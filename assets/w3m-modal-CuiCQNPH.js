import{c as e,i as t,l as n,n as r,p as i,r as a,s as o,t as s,v as c}from"./ConstantsUtil-DmLsRHAl.js";import{a as l,c as u,i as d,o as ee,s as f}from"./wui-ux-by-reown-FMYyiCs8.js";import{B as p,C as te,E as ne,M as re,O as ie,P as ae,U as m,V as h,_ as oe,a as se,b as ce,d as le,f as ue,g,i as _,j as de,l as fe,m as v,n as y,o as pe,p as b,t as x,u as S,v as C,w,x as me,y as T}from"./ApiController-B_b7XqGt.js";import{n as E,t as D}from"./SIWXUtil-BbS8y_4U.js";var O={getGasPriceInEther(e,t){let n=t*e;return Number(n)/0xde0b6b3a7640000},getGasPriceInUSD(e,t,n){let r=O.getGasPriceInEther(t,n);return h.bigNumber(e).times(r).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:n,toTokenAmount:r}){let i=h.bigNumber(e).times(t),a=h.bigNumber(r).times(n);return i.minus(a).div(i).times(100).toNumber()},getMaxSlippage(e,t){let n=h.bigNumber(e).div(100);return h.multiply(t,n).toNumber()},getProviderFee(e,t=.0085){return h.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){let n=t||`0`;return h.bigNumber(e).eq(0)?!0:h.bigNumber(h.bigNumber(n)).gt(e)},isInsufficientSourceTokenForSwap(e,t,n){let r=n?.find(e=>e.address===t)?.quantity?.numeric;return h.bigNumber(r||`0`).lt(e)}},he=15e4,k={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:``,sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:``,toTokenPriceInUSD:0,networkPrice:`0`,networkBalanceInUSD:`0`,networkTokenSymbol:``,inputError:void 0,slippage:ie.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:`0`,gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},A=re({...k}),ge={state:A,subscribe(e){return ae(A,()=>e(A))},subscribeKey(e,t){return de(A,e,t)},getParams(){let e=y.state.activeChain,t=y.getAccountData(e)?.caipAddress??y.state.activeCaipAddress,n=ne.getPlainAddress(t),r=fe(),i=le.getConnectorId(y.state.activeChain);if(!n)throw Error(`No address found to swap the tokens from.`);let a=!A.toToken?.address||!A.toToken?.decimals,o=!A.sourceToken?.address||!A.sourceToken?.decimals||!h.bigNumber(A.sourceTokenAmount).gt(0),s=!A.sourceTokenAmount;return{networkAddress:r,fromAddress:n,fromCaipAddress:t,sourceTokenAddress:A.sourceToken?.address,toTokenAddress:A.toToken?.address,toTokenAmount:A.toTokenAmount,toTokenDecimals:A.toToken?.decimals,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:A.sourceToken?.decimals,invalidToToken:a,invalidSourceToken:o,invalidSourceTokenAmount:s,availableToSwap:t&&!a&&!o&&!s,isAuthConnector:i===m.CONNECTOR_ID.AUTH}},async setSourceToken(e){e?(A.sourceToken=e,await j.setTokenPrice(e.address,`sourceToken`)):(A.sourceToken=e,A.sourceTokenAmount=``,A.sourceTokenPriceInUSD=0)},setSourceTokenAmount(e){A.sourceTokenAmount=e},async setToToken(e){e?(A.toToken=e,await j.setTokenPrice(e.address,`toToken`)):(A.toToken=e,A.toTokenAmount=``,A.toTokenPriceInUSD=0)},setToTokenAmount(e){A.toTokenAmount=e?h.toFixed(e,6):``},async setTokenPrice(e,t){let n=A.tokensPriceMap[e]||0;n||=(A.loadingPrices=!0,await j.getAddressPrice(e)),t===`sourceToken`?A.sourceTokenPriceInUSD=n:t===`toToken`&&(A.toTokenPriceInUSD=n),A.loadingPrices&&=!1,j.getParams().availableToSwap&&!A.switchingTokens&&j.swapTokens()},async switchTokens(){if(!(A.initializing||!A.initialized||A.switchingTokens)){A.switchingTokens=!0;try{let e=A.toToken?{...A.toToken}:void 0,t=A.sourceToken?{...A.sourceToken}:void 0,n=e&&A.toTokenAmount===``?`1`:A.toTokenAmount;j.setSourceTokenAmount(n),j.setToTokenAmount(``),await j.setSourceToken(e),await j.setToToken(t),A.switchingTokens=!1,j.swapTokens()}catch(e){throw A.switchingTokens=!1,e}}},resetState(){A.myTokensWithBalance=k.myTokensWithBalance,A.tokensPriceMap=k.tokensPriceMap,A.initialized=k.initialized,A.initializing=k.initializing,A.switchingTokens=k.switchingTokens,A.sourceToken=k.sourceToken,A.sourceTokenAmount=k.sourceTokenAmount,A.sourceTokenPriceInUSD=k.sourceTokenPriceInUSD,A.toToken=k.toToken,A.toTokenAmount=k.toTokenAmount,A.toTokenPriceInUSD=k.toTokenPriceInUSD,A.networkPrice=k.networkPrice,A.networkTokenSymbol=k.networkTokenSymbol,A.networkBalanceInUSD=k.networkBalanceInUSD,A.inputError=k.inputError},resetValues(){let{networkAddress:e}=j.getParams(),t=A.tokens?.find(t=>t.address===e);j.setSourceToken(t),j.setToToken(void 0)},getApprovalLoadingState(){return A.loadingApprovalTransaction},clearError(){A.transactionError=void 0},async initializeState(){if(!A.initializing){if(A.initializing=!0,!A.initialized)try{await j.fetchTokens(),A.initialized=!0}catch{A.initialized=!1,T.showError(`Failed to initialize swap`),b.goBack()}A.initializing=!1}},async fetchTokens(){let{networkAddress:e}=j.getParams();await j.getNetworkTokenPrice(),await j.getMyTokensWithBalance();let t=A.myTokensWithBalance?.find(t=>t.address===e);t&&(A.networkTokenSymbol=t.symbol,j.setSourceToken(t),j.setSourceTokenAmount(`0`))},async getTokenList(){let e=y.state.activeCaipNetwork?.caipNetworkId;if(!(A.caipNetworkId===e&&A.tokens))try{A.tokensLoading=!0;let t=await _.getTokenList(e);A.tokens=t,A.caipNetworkId=e,A.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol)),A.suggestedTokens=t.filter(e=>!!ie.SWAP_SUGGESTED_TOKENS.includes(e.symbol))}catch{A.tokens=[],A.popularTokens=[],A.suggestedTokens=[]}finally{A.tokensLoading=!1}},async getAddressPrice(e){let t=A.tokensPriceMap[e];if(t)return t;let n=(await C.fetchTokenPrice({addresses:[e]}))?.fungibles||[],r=[...A.tokens||[],...A.myTokensWithBalance||[]].find(t=>t.address===e)?.symbol,i=n.find(e=>e.symbol.toLowerCase()===r?.toLowerCase())?.price||0,a=parseFloat(i.toString());return A.tokensPriceMap[e]=a,a},async getNetworkTokenPrice(){let{networkAddress:e}=j.getParams(),t=(await C.fetchTokenPrice({addresses:[e]}).catch(()=>(T.showError(`Failed to fetch network token price`),{fungibles:[]}))).fungibles?.[0],n=t?.price.toString()||`0`;A.tokensPriceMap[e]=parseFloat(n),A.networkTokenSymbol=t?.symbol||``,A.networkPrice=n},async getMyTokensWithBalance(e){let t=await se.getMyTokensWithBalance(e),n=_.mapBalancesToSwapTokens(t);n&&(await j.getInitialGasPrice(),j.setBalances(n))},setBalances(e){let{networkAddress:t}=j.getParams(),n=y.state.activeCaipNetwork;if(!n)return;let r=e.find(e=>e.address===t);e.forEach(e=>{A.tokensPriceMap[e.address]=e.price||0}),A.myTokensWithBalance=e.filter(e=>e.address.startsWith(n.caipNetworkId)),A.networkBalanceInUSD=r?h.multiply(r.quantity.numeric,r.price).toString():`0`},async getInitialGasPrice(){let e=await _.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(y.state?.activeCaipNetwork?.chainNamespace){case m.CHAIN.SOLANA:return A.gasFee=e.standard??`0`,A.gasPriceInUSD=h.multiply(e.standard,A.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(A.gasFee),gasPriceInUSD:Number(A.gasPriceInUSD)};case m.CHAIN.EVM:default:let t=e.standard??`0`,n=BigInt(t),r=BigInt(he),i=O.getGasPriceInUSD(A.networkPrice,r,n);return A.gasFee=t,A.gasPriceInUSD=i,{gasPrice:n,gasPriceInUSD:i}}},async swapTokens(){let e=y.getAccountData()?.address,t=A.sourceToken,n=A.toToken,r=h.bigNumber(A.sourceTokenAmount).gt(0);if(r||j.setToTokenAmount(``),!n||!t||A.loadingPrices||!r||!e)return;A.loadingQuote=!0;let i=h.bigNumber(A.sourceTokenAmount).times(10**t.decimals).round(0);try{let r=await C.fetchSwapQuote({userAddress:e,from:t.address,to:n.address,gasPrice:A.gasFee,amount:i.toString()});A.loadingQuote=!1;let a=r?.quotes?.[0]?.toAmount;if(!a){E.open({displayMessage:`Incorrect amount`,debugMessage:`Please enter a valid amount`},`error`);return}let o=h.bigNumber(a).div(10**n.decimals).toString();j.setToTokenAmount(o),j.hasInsufficientToken(A.sourceTokenAmount,t.address)?A.inputError=`Insufficient balance`:(A.inputError=void 0,j.setTransactionDetails())}catch(e){let t=await _.handleSwapError(e);A.loadingQuote=!1,A.inputError=t||`Insufficient balance`}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=j.getParams(),n=A.sourceToken,r=A.toToken;if(e&&t&&n&&r&&!A.loadingQuote)try{A.loadingBuildTransaction=!0;let t=await _.fetchSwapAllowance({userAddress:e,tokenAddress:n.address,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:n.decimals}),r;return r=t?await j.createSwapTransaction():await j.createAllowanceTransaction(),A.loadingBuildTransaction=!1,A.fetchError=!1,r}catch{b.goBack(),T.showError(`Failed to check allowance`),A.loadingBuildTransaction=!1,A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:n}=j.getParams();if(e&&n){if(!t)throw Error(`createAllowanceTransaction - No source token address found.`);try{let r=await C.generateApproveCalldata({from:t,to:n,userAddress:e}),i=ne.getPlainAddress(r.tx.from);if(!i)throw Error(`SwapController:createAllowanceTransaction - address is required`);let a={data:r.tx.data,to:i,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:A.toTokenAmount};return A.swapTransaction=void 0,A.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch{b.goBack(),T.showError(`Failed to create approval transaction`),A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:n}=j.getParams(),r=A.sourceToken,i=A.toToken;if(!t||!n||!r||!i)return;let a=pe.parseUnits(n,r.decimals)?.toString();try{let n=await C.generateSwapCalldata({userAddress:t,from:r.address,to:i.address,amount:a,disableEstimate:!0}),o=r.address===e,s=BigInt(n.tx.eip155.gas),c=BigInt(n.tx.eip155.gasPrice),l=ne.getPlainAddress(n.tx.to);if(!l)throw Error(`SwapController:createSwapTransaction - address is required`);let u={data:n.tx.data,to:l,gas:s,gasPrice:c,value:BigInt(o?a??`0`:`0`),toAmount:A.toTokenAmount};return A.gasPriceInUSD=O.getGasPriceInUSD(A.networkPrice,s,c),A.approvalTransaction=void 0,A.swapTransaction=u,u}catch{b.goBack(),T.showError(`Failed to create transaction`),A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){T.showLoading(`Approve limit increase in your wallet`),b.replace(`SwapPreview`)},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:n}=j.getParams();A.loadingApprovalTransaction=!0,n?b.pushTransactionStack({onSuccess:j.onEmbeddedWalletApprovalSuccess}):T.showLoading(`Approve limit increase in your wallet`);try{await pe.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:m.CHAIN.EVM}),await j.swapTokens(),await j.getTransaction(),A.approvalTransaction=void 0,A.loadingApprovalTransaction=!1}catch(e){let t=e;A.transactionError=t?.displayMessage,A.loadingApprovalTransaction=!1,T.showError(t?.displayMessage||`Transaction error`),g.sendEvent({type:`track`,event:`SWAP_APPROVAL_ERROR`,properties:{message:t?.displayMessage||t?.message||`Unknown`,network:y.state.activeCaipNetwork?.caipNetworkId||``,swapFromToken:j.state.sourceToken?.symbol||``,swapToToken:j.state.toToken?.symbol||``,swapFromAmount:j.state.sourceTokenAmount||``,swapToAmount:j.state.toTokenAmount||``,isSmartAccount:S(m.CHAIN.EVM)===oe.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:n,isAuthConnector:r}=j.getParams();A.loadingTransaction=!0;let i=`Swapping ${A.sourceToken?.symbol} to ${h.formatNumberToLocalString(n,3)} ${A.toToken?.symbol}`,a=`Swapped ${A.sourceToken?.symbol} to ${h.formatNumberToLocalString(n,3)} ${A.toToken?.symbol}`;r?b.pushTransactionStack({onSuccess(){b.replace(`Account`),T.showLoading(i),ge.resetState()}}):T.showLoading(`Confirm transaction in your wallet`);try{let n=[A.sourceToken?.address,A.toToken?.address].join(`,`),i=await pe.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:m.CHAIN.EVM});return A.loadingTransaction=!1,T.showSuccess(a),g.sendEvent({type:`track`,event:`SWAP_SUCCESS`,properties:{network:y.state.activeCaipNetwork?.caipNetworkId||``,swapFromToken:j.state.sourceToken?.symbol||``,swapToToken:j.state.toToken?.symbol||``,swapFromAmount:j.state.sourceTokenAmount||``,swapToAmount:j.state.toTokenAmount||``,isSmartAccount:S(m.CHAIN.EVM)===oe.ACCOUNT_TYPES.SMART_ACCOUNT}}),ge.resetState(),r||b.replace(`Account`),ge.getMyTokensWithBalance(n),i}catch(e){let t=e;A.transactionError=t?.displayMessage,A.loadingTransaction=!1,T.showError(t?.displayMessage||`Transaction error`),g.sendEvent({type:`track`,event:`SWAP_ERROR`,properties:{message:t?.displayMessage||t?.message||`Unknown`,network:y.state.activeCaipNetwork?.caipNetworkId||``,swapFromToken:j.state.sourceToken?.symbol||``,swapToToken:j.state.toToken?.symbol||``,swapFromAmount:j.state.sourceTokenAmount||``,swapToAmount:j.state.toTokenAmount||``,isSmartAccount:S(m.CHAIN.EVM)===oe.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){return O.isInsufficientSourceTokenForSwap(e,t,A.myTokensWithBalance)},setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=j.getParams();e&&t&&(A.gasPriceInUSD=O.getGasPriceInUSD(A.networkPrice,BigInt(A.gasFee),BigInt(he)),A.priceImpact=O.getPriceImpact({sourceTokenAmount:A.sourceTokenAmount,sourceTokenPriceInUSD:A.sourceTokenPriceInUSD,toTokenPriceInUSD:A.toTokenPriceInUSD,toTokenAmount:A.toTokenAmount}),A.maxSlippage=O.getMaxSlippage(A.slippage,A.toTokenAmount),A.providerFee=O.getProviderFee(A.sourceTokenAmount))}},j=te(ge),M=re({message:``,open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:`shade`}),N=te({state:M,subscribe(e){return ae(M,()=>e(M))},subscribeKey(e,t){return de(M,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){M.open=!0,M.message=e,M.triggerRect=t,M.variant=n},hide(){M.open=!1,M.message=``,M.triggerRect={width:0,height:0,top:0,left:0}}}),_e={isUnsupportedChainView(){return b.state.view===`UnsupportedChain`||b.state.view===`SwitchNetwork`&&b.state.history.includes(`UnsupportedChain`)},async safeClose(){this.isUnsupportedChainView()||await D.isSIWXCloseDisabled()?v.shake():((b.state.view===`DataCapture`||b.state.view===`DataCaptureOtpConfirm`)&&pe.disconnect(),v.close())}},ve=o`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,ye=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},be=class extends n{render(){return i`<slot></slot>`}};be.styles=[t,ve],be=ye([l(`wui-card`)],be);var xe=o`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`,Se=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ce={info:`info`,success:`checkmark`,warning:`warningCircle`,error:`warning`},P=class extends n{constructor(){super(...arguments),this.message=``,this.type=`info`}render(){return i`
      <wui-flex
        data-type=${d(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Ce[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){E.close()}};P.styles=[t,xe],Se([u()],P.prototype,`message`,void 0),Se([u()],P.prototype,`type`,void 0),P=Se([l(`wui-alertbar`)],P);var we=o`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`,Te=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ee={info:{backgroundColor:`fg-350`,iconColor:`fg-325`,icon:`info`},success:{backgroundColor:`success-glass-reown-020`,iconColor:`success-125`,icon:`checkmark`},warning:{backgroundColor:`warning-glass-reown-020`,iconColor:`warning-100`,icon:`warningCircle`},error:{backgroundColor:`error-glass-reown-020`,iconColor:`error-125`,icon:`warning`}},De=class extends n{constructor(){super(),this.unsubscribe=[],this.open=E.state.open,this.onOpen(!0),this.unsubscribe.push(E.subscribeKey(`open`,e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=E.state,n=Ee[t];return i`
      <wui-alertbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${n?.iconColor}
        icon=${n?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:`scale(0.85)`},{opacity:1,transform:`scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: auto`):e||(this.animate([{opacity:1,transform:`scale(1)`},{opacity:0,transform:`scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: none`)}};De.styles=we,Te([f()],De.prototype,`open`,void 0),De=Te([l(`w3m-alertbar`)],De);var Oe=o`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},I=class extends n{constructor(){super(...arguments),this.icon=`card`,this.variant=`primary`,this.type=`accent`,this.size=`md`,this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return i`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${d(this.iconSize)}></wui-icon>
    </button>`}};I.styles=[t,r,Oe],F([u()],I.prototype,`icon`,void 0),F([u()],I.prototype,`variant`,void 0),F([u()],I.prototype,`type`,void 0),F([u()],I.prototype,`size`,void 0),F([u()],I.prototype,`iconSize`,void 0),F([u({type:Boolean})],I.prototype,`fullWidth`,void 0),F([u({type:Boolean})],I.prototype,`disabled`,void 0),I=F([l(`wui-icon-button`)],I);var ke=o`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ae={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},je={lg:`lg`,md:`md`,sm:`sm`},R=class extends n{constructor(){super(...arguments),this.imageSrc=``,this.text=``,this.size=`lg`,this.type=`text-dropdown`,this.disabled=!1}render(){return i`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let e=Ae[this.size];return this.text?i`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return i`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let e=je[this.size];return i` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};R.styles=[t,r,ke],L([u()],R.prototype,`imageSrc`,void 0),L([u()],R.prototype,`text`,void 0),L([u()],R.prototype,`size`,void 0),L([u()],R.prototype,`type`,void 0),L([u({type:Boolean})],R.prototype,`disabled`,void 0),R=L([l(`wui-select`)],R);var Me=o`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]},
      slide-down-in 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]},
      slide-up-in 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ne=[`SmartSessionList`],Pe={PayWithExchange:e.tokens.theme.foregroundPrimary};function Fe(){let e=b.state.data?.connector?.name,t=b.state.data?.wallet?.name,n=b.state.data?.network?.name,r=t??e,i=le.getConnectors(),a=i.length===1&&i[0]?.id===`w3m-email`,o=y.getAccountData()?.socialProvider,s=o?o.charAt(0).toUpperCase()+o.slice(1):`Connect Social`;return{Connect:`Connect ${a?`Email`:``} Wallet`,Create:`Create Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:`All Wallets`,ApproveTransaction:`Approve Transaction`,BuyInProgress:`Buy`,ConnectingExternal:r??`Connect Wallet`,ConnectingWalletConnect:r??`WalletConnect`,ConnectingWalletConnectBasic:`WalletConnect`,ConnectingSiwe:`Sign In`,Convert:`Convert`,ConvertSelectToken:`Select token`,ConvertPreview:`Preview Convert`,Downloads:r?`Get ${r}`:`Downloads`,EmailLogin:`Email Login`,EmailVerifyOtp:`Confirm Email`,EmailVerifyDevice:`Register Device`,GetWallet:`Get a Wallet`,Networks:`Choose Network`,OnRampProviders:`Choose Provider`,OnRampActivity:`Activity`,OnRampTokenSelect:`Select Token`,OnRampFiatSelect:`Select Currency`,Pay:`How you pay`,ProfileWallets:`Wallets`,SwitchNetwork:n??`Switch Network`,Transactions:`Activity`,UnsupportedChain:`Switch Network`,UpgradeEmailWallet:`Upgrade Your Wallet`,UpdateEmailWallet:`Edit Email`,UpdateEmailPrimaryOtp:`Confirm Current Email`,UpdateEmailSecondaryOtp:`Confirm New Email`,WhatIsABuy:`What is Buy?`,RegisterAccountName:`Choose Name`,RegisterAccountNameSuccess:``,WalletReceive:`Receive`,WalletCompatibleNetworks:`Compatible Networks`,Swap:`Swap`,SwapSelectToken:`Select Token`,SwapPreview:`Preview Swap`,WalletSend:`Send`,WalletSendPreview:`Review Send`,WalletSendSelectToken:`Select Token`,WalletSendConfirmed:`Confirmed`,WhatIsANetwork:`What is a network?`,WhatIsAWallet:`What is a Wallet?`,ConnectWallets:`Connect Wallet`,ConnectSocials:`All Socials`,ConnectingSocial:s,ConnectingMultiChain:`Select Chain`,ConnectingFarcaster:`Farcaster`,SwitchActiveChain:`Switch Chain`,SmartSessionCreated:void 0,SmartSessionList:`Smart Sessions`,SIWXSignMessage:`Sign In`,PayLoading:`Payment in Progress`,DataCapture:`Profile`,DataCaptureOtpConfirm:`Confirm Email`,FundWallet:`Fund Wallet`,PayWithExchange:`Deposit from Exchange`,PayWithExchangeSelectAsset:`Select Asset`}}var B=class extends n{constructor(){super(),this.unsubscribe=[],this.heading=Fe()[b.state.view],this.network=y.state.activeCaipNetwork,this.networkImage=ce.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=b.state.view,this.viewDirection=``,this.unsubscribe.push(me.subscribeNetworkImages(()=>{this.networkImage=ce.getNetworkImage(this.network)}),b.subscribeKey(`view`,e=>{setTimeout(()=>{this.view=e,this.heading=Fe()[e]},s.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),y.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=ce.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let t=Pe[b.state.view]??e.tokens.theme.backgroundPrimary;return this.style.setProperty(`--local-header-background-color`,t),i`
      <wui-flex
        .padding=${[`0`,`4`,`0`,`4`]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){g.sendEvent({type:`track`,event:`CLICK_WALLET_HELP`}),b.push(`WhatIsAWallet`)}async onClose(){await _e.safeClose()}rightHeaderTemplate(){let e=w?.state?.features?.smartSessions;return b.state.view!==`Account`||!e?this.closeButtonTemplate():i`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>b.push(`SmartSessionList`)}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return i`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){let e=Ne.includes(this.view);return i`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?i`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=b.state,t=e===`Connect`,n=w.state.enableEmbedded,r=e===`ApproveTransaction`,a=e===`ConnectingSiwe`,o=e===`Account`,s=w.state.enableNetworkSwitch,c=r||a||t&&n;return o&&s?i`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${d(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${d(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?i`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:i`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(g.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),b.push(`Networks`))}isAllowedNetworkSwitch(){let e=y.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onViewChange(){let{history:e}=b.state,t=s.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=s.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=b.state,t=this.shadowRoot?.querySelector(`#dynamic`);e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}onGoBack(){b.goBack()}};B.styles=Me,z([f()],B.prototype,`heading`,void 0),z([f()],B.prototype,`network`,void 0),z([f()],B.prototype,`networkImage`,void 0),z([f()],B.prototype,`showBack`,void 0),z([f()],B.prototype,`prevHistoryLength`,void 0),z([f()],B.prototype,`view`,void 0),z([f()],B.prototype,`viewDirection`,void 0),B=z([l(`w3m-header`)],B);var Ie=o`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`,Le=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends n{constructor(){super(...arguments),this.message=``,this.variant=`success`}render(){return i`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.variant===`loading`?i`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i`<wui-icon-box
      size="md"
      color=${{success:`success`,error:`error`,warning:`warning`,info:`default`}[this.variant]}
      icon=${{success:`checkmark`,error:`warning`,warning:`warningCircle`,info:`info`}[this.variant]}
    ></wui-icon-box>`}};V.styles=[t,Ie],Le([u()],V.prototype,`message`,void 0),Le([u()],V.prototype,`variant`,void 0),V=Le([l(`wui-snackbar`)],V);var Re=c`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,ze=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends n{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.state.open,this.unsubscribe.push(T.subscribeKey(`open`,e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=T.state;return i` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:`translateX(-50%) scale(0.85)`},{opacity:1,transform:`translateX(-50%) scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.timeout&&clearTimeout(this.timeout),T.state.autoClose&&(this.timeout=setTimeout(()=>T.hide(),2500))):this.animate([{opacity:1,transform:`translateX(-50%) scale(1)`},{opacity:0,transform:`translateX(-50%) scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`})}};H.styles=Re,ze([f()],H.prototype,`open`,void 0),H=ze([l(`w3m-snackbar`)],H);var Be=o`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends n{constructor(){super(),this.unsubscribe=[],this.open=N.state.open,this.message=N.state.message,this.triggerRect=N.state.triggerRect,this.variant=N.state.variant,this.unsubscribe.push(N.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?`flex`:`none`};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,i`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};W.styles=[Be],U([f()],W.prototype,`open`,void 0),U([f()],W.prototype,`message`,void 0),U([f()],W.prototype,`triggerRect`,void 0),U([f()],W.prototype,`variant`,void 0),W=U([l(`w3m-tooltip`)],W);var G={getTabsByNamespace(e){return e&&e===m.CHAIN.EVM?w.state.remoteFeatures?.activity===!1?s.ACCOUNT_TABS.filter(e=>e.label!==`Activity`):s.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,``).toLowerCase().replace(/[^a-zA-Z0-9]/gu,``)},hasFooter(){let e=b.state.view;if(s.VIEWS_WITH_LEGAL_FOOTER.includes(e)){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state,n=w.state.features?.legalCheckbox;return!(!e&&!t||n)}return s.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},Ve=o`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`,He=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ue=class extends n{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=w.state.remoteFeatures,this.unsubscribe.push(w.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state,n=w.state.features?.legalCheckbox;return!e&&!t||n?i`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:i`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${[`4`,`3`,`3`,`3`]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state;return e&&t?`and`:``}termsTemplate(){let{termsConditionsUrl:e}=w.state;return e?i`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=w.state;return e?i`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Ue.styles=[Ve],He([f()],Ue.prototype,`remoteFeatures`,void 0),Ue=He([l(`w3m-legal-footer`)],Ue);var We=c``,Ge=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ke=class extends n{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state;return!e&&!t?null:i`
      <wui-flex
        .padding=${[`4`,`3`,`3`,`3`]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return i` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){g.sendEvent({type:`track`,event:`SELECT_WHAT_IS_A_BUY`,properties:{isSmartAccount:S(y.state.activeChain)===oe.ACCOUNT_TYPES.SMART_ACCOUNT}}),b.push(`WhatIsABuy`)}};Ke.styles=[We],Ke=Ge([l(`w3m-onramp-providers-footer`)],Ke);var qe=o`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`,Je=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=class extends n{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status=`hide`,this.view=b.state.view}firstUpdated(){this.status=G.hasFooter()?`show`:`hide`,this.unsubscribe.push(b.subscribeKey(`view`,e=>{this.view=e,this.status=G.hasFooter()?`show`:`hide`,this.status===`hide`&&document.documentElement.style.setProperty(`--apkt-footer-height`,`0px`)})),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=`${t.contentRect.height}px`;document.documentElement.style.setProperty(`--apkt-footer-height`,e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return i`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return G.hasFooter()?i` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case`Networks`:return this.templateNetworksFooter();case`Connect`:case`ConnectWallets`:case`OnRampFiatSelect`:case`OnRampTokenSelect`:return i`<w3m-legal-footer></w3m-legal-footer>`;case`OnRampProviders`:return i`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){g.sendEvent({type:`track`,event:`CLICK_NETWORK_HELP`}),b.push(`WhatIsANetwork`)}getWrapper(){return this.shadowRoot?.querySelector(`div.container`)}};K.styles=[qe],Je([f()],K.prototype,`status`,void 0),Je([f()],K.prototype,`view`,void 0),K=Je([l(`w3m-footer`)],K);var Ye=o`
  :host {
    display: block;
    width: inherit;
  }
`,Xe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends n{constructor(){super(),this.unsubscribe=[],this.viewState=b.state.view,this.history=b.state.history.join(`,`),this.unsubscribe.push(b.subscribeKey(`view`,()=>{this.history=b.state.history.join(`,`),document.documentElement.style.setProperty(`--apkt-duration-dynamic`,`var(--apkt-durations-lg)`)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty(`--apkt-duration-dynamic`,`0s`)}render(){return i`${this.templatePageContainer()}`}templatePageContainer(){return i`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=b.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case`AccountSettings`:return i`<w3m-account-settings-view></w3m-account-settings-view>`;case`Account`:return i`<w3m-account-view></w3m-account-view>`;case`AllWallets`:return i`<w3m-all-wallets-view></w3m-all-wallets-view>`;case`ApproveTransaction`:return i`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case`BuyInProgress`:return i`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case`ChooseAccountName`:return i`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case`Connect`:return i`<w3m-connect-view></w3m-connect-view>`;case`Create`:return i`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case`ConnectingWalletConnect`:return i`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case`ConnectingWalletConnectBasic`:return i`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case`ConnectingExternal`:return i`<w3m-connecting-external-view></w3m-connecting-external-view>`;case`ConnectingSiwe`:return i`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case`ConnectWallets`:return i`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case`ConnectSocials`:return i`<w3m-connect-socials-view></w3m-connect-socials-view>`;case`ConnectingSocial`:return i`<w3m-connecting-social-view></w3m-connecting-social-view>`;case`DataCapture`:return i`<w3m-data-capture-view></w3m-data-capture-view>`;case`DataCaptureOtpConfirm`:return i`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case`Downloads`:return i`<w3m-downloads-view></w3m-downloads-view>`;case`EmailLogin`:return i`<w3m-email-login-view></w3m-email-login-view>`;case`EmailVerifyOtp`:return i`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case`EmailVerifyDevice`:return i`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case`GetWallet`:return i`<w3m-get-wallet-view></w3m-get-wallet-view>`;case`Networks`:return i`<w3m-networks-view></w3m-networks-view>`;case`SwitchNetwork`:return i`<w3m-network-switch-view></w3m-network-switch-view>`;case`ProfileWallets`:return i`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case`Transactions`:return i`<w3m-transactions-view></w3m-transactions-view>`;case`OnRampProviders`:return i`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case`OnRampTokenSelect`:return i`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case`OnRampFiatSelect`:return i`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case`UpgradeEmailWallet`:return i`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case`UpdateEmailWallet`:return i`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case`UpdateEmailPrimaryOtp`:return i`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case`UpdateEmailSecondaryOtp`:return i`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case`UnsupportedChain`:return i`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case`Swap`:return i`<w3m-swap-view></w3m-swap-view>`;case`SwapSelectToken`:return i`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case`SwapPreview`:return i`<w3m-swap-preview-view></w3m-swap-preview-view>`;case`WalletSend`:return i`<w3m-wallet-send-view></w3m-wallet-send-view>`;case`WalletSendSelectToken`:return i`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case`WalletSendPreview`:return i`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case`WalletSendConfirmed`:return i`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case`WhatIsABuy`:return i`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case`WalletReceive`:return i`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case`WalletCompatibleNetworks`:return i`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case`WhatIsAWallet`:return i`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case`ConnectingMultiChain`:return i`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case`WhatIsANetwork`:return i`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case`ConnectingFarcaster`:return i`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case`SwitchActiveChain`:return i`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case`RegisterAccountName`:return i`<w3m-register-account-name-view></w3m-register-account-name-view>`;case`RegisterAccountNameSuccess`:return i`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case`SmartSessionCreated`:return i`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case`SmartSessionList`:return i`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case`SIWXSignMessage`:return i`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case`Pay`:return i`<w3m-pay-view></w3m-pay-view>`;case`PayLoading`:return i`<w3m-pay-loading-view></w3m-pay-loading-view>`;case`FundWallet`:return i`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case`PayWithExchange`:return i`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case`PayWithExchangeSelectAsset`:return i`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;default:return i`<w3m-connect-view></w3m-connect-view>`}}};q.styles=[Ye],Xe([f()],q.prototype,`viewState`,void 0),Xe([f()],q.prototype,`history`,void 0),q=Xe([l(`w3m-router`)],q);var Ze=o`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e[`ease-out-power-2`]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e[`ease-out-power-2`]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qe=`scroll-lock`,$e={PayWithExchange:`0`,PayWithExchangeSelectAsset:`0`},Y=class extends n{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=w.state.enableEmbedded,this.open=v.state.open,this.caipAddress=y.state.activeCaipAddress,this.caipNetwork=y.state.activeCaipNetwork,this.shake=v.state.shake,this.filterByNamespace=le.state.filterByNamespace,this.padding=e.spacing[1],this.mobileFullScreen=w.state.enableMobileFullScreen,this.initializeTheming(),x.prefetchAnalyticsConfig(),this.unsubscribe.push(v.subscribeKey(`open`,e=>e?this.onOpen():this.onClose()),v.subscribeKey(`shake`,e=>this.shake=e),y.subscribeKey(`activeCaipNetwork`,e=>this.onNewNetwork(e)),y.subscribeKey(`activeCaipAddress`,e=>this.onNewAddress(e)),w.subscribeKey(`enableEmbedded`,e=>this.enableEmbedded=e),le.subscribeKey(`filterByNamespace`,e=>{this.filterByNamespace!==e&&!y.getAccountData(e)?.caipAddress&&(x.fetchRecommendedWallets(),this.filterByNamespace=e)}),b.subscribeKey(`view`,()=>{this.dataset.border=G.hasFooter()?`true`:`false`,this.padding=$e[b.state.view]??e.spacing[1]}))}firstUpdated(){if(this.dataset.border=G.hasFooter()?`true`:`false`,this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.caipAddress){if(this.enableEmbedded){v.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty(`--local-modal-padding`,this.padding),this.enableEmbedded?i`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?i`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return i` <wui-card
      shake="${this.shake}"
      data-embedded="${d(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await _e.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=ue.state,n=ee.getColorTheme(t);a(e,n)}onClose(){this.open=!1,this.classList.remove(`open`),this.onScrollUnlock(),T.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add(`open`),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement(`style`);e.dataset.w3m=Qe,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${Qe}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector(`wui-card`);e?.focus(),window.addEventListener(`keydown`,t=>{if(t.key===`Escape`)this.handleClose();else if(t.key===`Tab`){let{tagName:n}=t.target;n&&!n.includes(`W3M-`)&&!n.includes(`WUI-`)&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=y.state.isSwitchingNamespace,n=b.state.view===`ProfileWallets`;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:n}):t||this.enableEmbedded||n||v.close(),await D.initializeIfEnabled(e),this.caipAddress=e,y.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;let{chainNamespace:t,chainId:n,address:r}=p.parseCaipAddress(e.caipAddress),i=`${t}:${n}`,a=!ne.getPlainAddress(this.caipAddress),o=await D.getSessions({address:r,caipNetworkId:i}),s=!D.getSIWX()||o.some(e=>e.data.accountAddress===r),c=e.isSwitchingNamespace&&s&&!this.enableEmbedded,l=this.enableEmbedded&&a;c?b.goBack():l&&v.close()}onNewNetwork(e){let t=this.caipNetwork,n=t?.caipNetworkId?.toString(),r=t?.chainNamespace,i=e?.caipNetworkId?.toString(),a=e?.chainNamespace,o=n!==i,s=o&&r===a,c=t?.name===m.UNSUPPORTED_NETWORK_NAME,l=b.state.view===`ConnectingExternal`,u=b.state.view===`ProfileWallets`,d=!y.getAccountData(e?.chainNamespace)?.caipAddress,ee=b.state.view===`UnsupportedChain`,f=v.state.open,p=!1;this.enableEmbedded&&b.state.view===`SwitchNetwork`&&(p=!0),o&&j.resetState(),f&&!l&&!u&&(d?o&&(p=!0):(ee||s&&!c)&&(p=!0)),p&&b.state.view!==`SIWXSignMessage`&&b.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||=(x.prefetch(),x.fetchWalletsByPage({page:1}),!0)}};Y.styles=Ze,J([u({type:Boolean})],Y.prototype,`enableEmbedded`,void 0),J([f()],Y.prototype,`open`,void 0),J([f()],Y.prototype,`caipAddress`,void 0),J([f()],Y.prototype,`caipNetwork`,void 0),J([f()],Y.prototype,`shake`,void 0),J([f()],Y.prototype,`filterByNamespace`,void 0),J([f()],Y.prototype,`padding`,void 0),J([f()],Y.prototype,`mobileFullScreen`,void 0);var et=class extends Y{};et=J([l(`w3m-modal`)],et);var tt=class extends Y{};tt=J([l(`appkit-modal`)],tt);var nt=o`
  :host {
    width: 100%;
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=class extends n{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc=``,this.name=``,this.size=`md`,this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor=`accent-100`,this.rdnsId=``,this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has(`name`)||e.has(`imageSrc`)||e.has(`walletRank`))&&(this.hasImpressionSent=!1),e.has(`walletRank`)&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&=(this.intersectionObserver.disconnect(),void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&g.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:b.state.view,displayIndex:this.displayIndex}))}render(){return i`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${d(this.imageSrc)}
        name=${this.name}
        size=${d(this.size)}
        tagLabel=${d(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};Z.styles=nt,X([u({type:Array})],Z.prototype,`walletImages`,void 0),X([u()],Z.prototype,`imageSrc`,void 0),X([u()],Z.prototype,`name`,void 0),X([u()],Z.prototype,`size`,void 0),X([u()],Z.prototype,`tagLabel`,void 0),X([u()],Z.prototype,`tagVariant`,void 0),X([u()],Z.prototype,`walletIcon`,void 0),X([u()],Z.prototype,`tabIdx`,void 0),X([u({type:Boolean})],Z.prototype,`disabled`,void 0),X([u({type:Boolean})],Z.prototype,`showAllWallets`,void 0),X([u({type:Boolean})],Z.prototype,`loading`,void 0),X([u({type:String})],Z.prototype,`loadingSpinnerColor`,void 0),X([u()],Z.prototype,`rdnsId`,void 0),X([u()],Z.prototype,`displayIndex`,void 0),X([u()],Z.prototype,`walletRank`,void 0),Z=X([l(`w3m-list-wallet`)],Z);var rt=o`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e[`ease-out-power-2`]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},it=60,$=class extends n{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration=`0.15s`,this.transitionFunction=``,this.history=``,this.view=``,this.setView=void 0,this.viewDirection=``,this.historyState=``,this.previousHeight=`0px`,this.mobileFullScreen=w.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has(`history`)){let e=this.history;this.historyState!==``&&this.historyState!==e&&this.onViewChange(e)}e.has(`transitionDuration`)&&this.style.setProperty(`--local-duration`,this.transitionDuration),e.has(`transitionFunction`)&&this.style.setProperty(`--local-transition`,this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty(`--local-transition`,this.transitionFunction),this.style.setProperty(`--local-duration`,this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height,n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--apkt-footer-height`)||`0`);this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-n,this.style.setProperty(`--local-border-bottom-radius`,`0px`)):(e+=n,this.style.setProperty(`--local-border-bottom-radius`,n?`var(--apkt-borderRadius-5)`:`0px`)),this.style.setProperty(`--local-container-height`,`${e}px`),this.previousHeight!==`0px`&&this.style.setProperty(`--local-duration-height`,this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener(`resize`,this.onViewportResize),window.visualViewport?.addEventListener(`resize`,this.onViewportResize)}disconnectedCallback(){let e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener(`resize`,this.onViewportResize),window.visualViewport?.removeEventListener(`resize`,this.onViewportResize)}render(){return i`
      <div class="container" data-mobile-fullscreen="${d(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${d(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){let t=e.split(`,`).filter(Boolean),n=this.historyState.split(`,`).filter(Boolean),r=n.length,i=t.length,a=t[t.length-1]||``,o=ee.cssDurationToNumber(this.transitionDuration),s=``;i>r?s=`next`:i<r?s=`prev`:i===r&&t[i-1]!==n[r-1]&&(s=`next`),this.viewDirection=`${s}-${a}`,setTimeout(()=>{this.historyState=e,this.setView?.(a)},o),setTimeout(()=>{this.viewDirection=``},o*2)}getWrapper(){return this.shadowRoot?.querySelector(`div.page`)}updateContainerHeight(){let e=this.getWrapper();if(!e)return;let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--apkt-footer-height`)||`0`),n=0;this.mobileFullScreen?(n=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty(`--local-border-bottom-radius`,`0px`)):(n=e.getBoundingClientRect().height+t,this.style.setProperty(`--local-border-bottom-radius`,t?`var(--apkt-borderRadius-5)`:`0px`)),this.style.setProperty(`--local-container-height`,`${n}px`),this.previousHeight!==`0px`&&this.style.setProperty(`--local-duration-height`,this.transitionDuration),this.previousHeight=`${n}px`}getHeaderHeight(){return it}};$.styles=[rt],Q([u({type:String})],$.prototype,`transitionDuration`,void 0),Q([u({type:String})],$.prototype,`transitionFunction`,void 0),Q([u({type:String})],$.prototype,`history`,void 0),Q([u({type:String})],$.prototype,`view`,void 0),Q([u({attribute:!1})],$.prototype,`setView`,void 0),Q([f()],$.prototype,`viewDirection`,void 0),Q([f()],$.prototype,`historyState`,void 0),Q([f()],$.prototype,`previousHeight`,void 0),Q([f()],$.prototype,`mobileFullScreen`,void 0),$=Q([l(`w3m-router-container`)],$);export{tt as AppKitModal,Z as W3mListWallet,et as W3mModal,Y as W3mModalBase,$ as W3mRouterContainer};