import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{t as r}from"./ChevronDownIcon-DsgrdBqC.js";import{c as i}from"./Loader-UAZqxsnw-OzBlysTp.js";import{K as a,_ as o,l as s}from"./esm-CBvJx3pY.js";import{a as c,i as l,n as u,t as d,u as f}from"./ModalFooter-W9Sd_7dV-CtUJqzHj.js";import{a as p,i as m,n as h,r as g,t as _}from"./Value-DTgR824E-Dc9WCqvz.js";import{t as v}from"./ErrorMessage-D8VaAP5m-DELtJaZM.js";import{t as y}from"./LabelXs-oqZNqbm_-BG8lRlTP.js";import{t as ee}from"./Subtitle-CV-2yKE4-CQMOotRs.js";import{t as te}from"./Title-BnzYV3Is-BA08QGk1.js";import{t as b}from"./Address-jz41Fhgs-DvlGM3pd.js";import{t as x}from"./WalletInfoCard-9GRv5e7X-C_MHgWHK.js";import{a as ne,et as S}from"./privy-context-C9y77F5F-BwifsPXg.js";import{t as re}from"./useActiveWallet-DOojuGvF-1aKRzlAO.js";import{t as C}from"./LoadingSkeleton-BMsgO5PV-DV4wavzT.js";import{t as w}from"./isAddress-UiVV5sSd.js";import{t as T}from"./shared-FM0rljBt-Cb8rq78I.js";import{n as E,t as D}from"./Checkbox-D1EDeo41-rhP47XnR.js";import{t as O}from"./ErrorBanner-BcpGRt0h-DbgvNnTj.js";import{t as k}from"./WarningBanner-ZZqCEtZK-DhYhJwPa.js";import{t as A}from"./ExclamationCircleIcon-B9mBRb8z.js";var j=e(t());function M({title:e,titleId:t,...n},r){return j.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?j.createElement(`title`,{id:t},e):null,j.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`}))}var ie=j.forwardRef(M);function N({title:e,titleId:t,...n},r){return j.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?j.createElement(`title`,{id:t},e):null,j.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z`}))}var P=j.forwardRef(N),F=n();function I({title:e,titleId:t,...n},r){return j.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?j.createElement(`title`,{id:t},e):null,j.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z`}))}var L=j.forwardRef(I),ae=i(_)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`,R=({iconUrl:e,value:t,symbol:n,usdValue:r,nftName:i,nftCount:a,decimals:o,$isLoading:s})=>{if(s)return(0,F.jsx)(z,{$isLoading:s});let c=t&&r&&o?function(e,t,n){let r=parseFloat(e),i=parseFloat(n);if(r===0||i===0||Number.isNaN(r)||Number.isNaN(i))return e;let a=Math.ceil(-Math.log10(.01/(i/r))),o=10**(a=Math.max(a=Math.min(a,t),1)),s=+(Math.floor(r*o)/o).toFixed(a).replace(/\.?0+$/,``);return Intl.NumberFormat(void 0,{maximumFractionDigits:t}).format(s)}(t,o,r):t;return(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(z,{$isLoading:s,children:[e&&(0,F.jsx)(V,{src:e,alt:`Token icon`}),a&&a>1?a+`x`:void 0,` `,i,c,` `,n]}),r&&(0,F.jsxs)(B,{$isLoading:s,children:[`$`,r]})]})},z=i.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  /**
   * @NOTE This is a code smell anti-pattern for styling components.
   * We are mixing JSX definitions with styled-components CSS definitions.
   * This is not ideal and should be refactored in the future to separate concerns.
   * This is also hard to read, as it makes it difficult to understand the structure
   * of the component and its styles by viewing the JSX.
   */

  ${C}
`,B=i.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${C}
`,V=i.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`,oe=e=>{let{chain:t,transactionDetails:n,isTokenContractInfoLoading:r,symbol:i}=e,{action:a,functionName:o}=n;return(0,F.jsx)(T,{children:(0,F.jsxs)(p,{children:[a!==`transaction`&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Action`}),(0,F.jsx)(h,{children:o})]}),o===`mint`&&`args`in n&&n.args.filter((e=>e)).map(((e,n)=>(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Param ${n}`}),(0,F.jsx)(h,{children:typeof e==`string`&&w(e)?(0,F.jsx)(b,{address:e,url:t?.blockExplorers?.default?.url,showCopyIcon:!1}):e?.toString()})]},n))),o===`setApprovalForAll`&&n.operator&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Operator`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:n.operator,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),o===`setApprovalForAll`&&n.approved!==void 0&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Set approval to`}),(0,F.jsx)(h,{children:n.approved?`true`:`false`})]}),o===`transfer`||o===`transferWithMemo`||o===`transferFrom`||o===`safeTransferFrom`||o===`approve`?(0,F.jsxs)(F.Fragment,{children:[`formattedAmount`in n&&n.formattedAmount&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount`}),(0,F.jsxs)(h,{$isLoading:r,children:[n.formattedAmount,` `,i]})]}),`tokenId`in n&&n.tokenId&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token ID`}),(0,F.jsx)(h,{children:n.tokenId.toString()})]})]}):null,o===`safeBatchTransferFrom`&&(0,F.jsxs)(F.Fragment,{children:[`amounts`in n&&n.amounts&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amounts`}),(0,F.jsx)(h,{children:n.amounts.join(`, `)})]}),`tokenIds`in n&&n.tokenIds&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token IDs`}),(0,F.jsx)(h,{children:n.tokenIds.join(`, `)})]})]}),o===`approve`&&n.spender&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Spender`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:n.spender,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(o===`transferFrom`||o===`safeTransferFrom`||o===`safeBatchTransferFrom`)&&n.transferFrom&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Transferring from`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:n.transferFrom,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(o===`transferFrom`||o===`safeTransferFrom`||o===`safeBatchTransferFrom`)&&n.transferTo&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Transferring to`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:n.transferTo,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]})]})})},se=({variant:e,setPreventMaliciousTransaction:t,colorScheme:n=`light`,preventMaliciousTransaction:r})=>e===`warn`?(0,F.jsx)(H,{children:(0,F.jsxs)(k,{theme:n,children:[(0,F.jsx)(`span`,{style:{fontWeight:`500`},children:`Warning: Suspicious transaction`}),(0,F.jsx)(`br`,{}),`This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk.`]})}):e===`error`?(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(H,{children:[(0,F.jsx)(O,{theme:n,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`This is a malicious transaction`}),(0,F.jsx)(`br`,{}),`This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets.`]})}),(0,F.jsxs)(ce,{children:[(0,F.jsx)(D,{color:`var(--privy-color-error)`,checked:!r,readOnly:!0,onClick:()=>t(!r)}),(0,F.jsx)(`span`,{children:`I understand and want to proceed anyways.`})]})]})}):null,H=i.div`
  margin-top: 1.5rem;
`,ce=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,le=({transactionIndex:e,maxIndex:t})=>typeof e!=`number`||t===0?``:` (${e+1} / ${t+1})`,U=({img:e,submitError:t,prepareError:n,onClose:i,action:a,title:o,subtitle:s,to:u,tokenAddress:y,network:x,missingFunds:S,fee:C,from:w,cta:T,disabled:E,chain:D,isSubmitting:O,isPreparing:k,isTokenPriceLoading:A,isTokenContractInfoLoading:M,isSponsored:N,symbol:I,balance:L,onClick:z,transactionDetails:B,transactionIndex:V,maxIndex:H,onBack:ce,chainName:U,validation:W,hasScanDetails:G,setIsScanDetailsOpen:K,preventMaliciousTransaction:he,setPreventMaliciousTransaction:ge,tokensSent:q,tokensReceived:J,isScanning:_e,isCancellable:ve,functionName:ye})=>{let{showTransactionDetails:Y,setShowTransactionDetails:be,hasMoreDetails:X,isErc20Ish:Z}=(e=>{let[t,n]=(0,j.useState)(!1),r=!0,i=!1;return(!e||e.isErc20Ish||e.action===`transaction`)&&(r=!1),r&&(i=Object.entries(e||{}).some((([e,t])=>t&&![`action`,`isErc20Ish`,`isNFTIsh`].includes(e)))),{showTransactionDetails:t,setShowTransactionDetails:n,hasMoreDetails:r&&i,isErc20Ish:e?.isErc20Ish}})(B),Q=ne(),$=Z&&M||k||A||_e;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l,{onClose:i,backFn:ce}),e&&(0,F.jsx)(fe,{children:e}),(0,F.jsxs)(te,{style:{marginTop:e?`1.5rem`:0},children:[o,(0,F.jsx)(le,{maxIndex:H,transactionIndex:V})]}),(0,F.jsx)(ee,{children:s}),(0,F.jsxs)(p,{style:{marginTop:`2rem`},children:[(!!q[0]||$)&&(0,F.jsxs)(m,{children:[J.length>0?(0,F.jsx)(_,{children:`Send`}):(0,F.jsx)(_,{children:a===`approve`?`Approval amount`:`Amount`}),(0,F.jsx)(`div`,{className:`flex flex-col`,children:q.map(((e,t)=>(0,F.jsx)(R,{iconUrl:e.iconUrl,value:ye===`setApprovalForAll`?`All`:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t)))})]}),J.length>0&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Receive`}),(0,F.jsx)(`div`,{className:`flex flex-col`,children:J.map(((e,t)=>(0,F.jsx)(R,{iconUrl:e.iconUrl,value:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t)))})]}),B&&`spender`in B&&B?.spender?(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Spender`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:B.spender,url:D?.blockExplorers?.default?.url})})]}):null,u&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`To`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:u,url:D?.blockExplorers?.default?.url,showCopyIcon:!0})})]}),y&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token address`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:y,url:D?.blockExplorers?.default?.url})})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Network`}),(0,F.jsx)(h,{children:x})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Estimated fee`}),(0,F.jsx)(h,{$isLoading:k||A||N===void 0,children:N?(0,F.jsxs)(pe,{children:[(0,F.jsxs)(me,{children:[`Sponsored by `,Q.name]}),(0,F.jsx)(P,{height:16,width:16})]}):C})]}),X&&!G&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(m,{className:`cursor-pointer`,onClick:()=>be(!Y),children:(0,F.jsxs)(g,{className:`flex items-center gap-x-1`,children:[`Details`,` `,(0,F.jsx)(r,{style:{width:`0.75rem`,marginLeft:`0.25rem`,transform:Y?`rotate(180deg)`:void 0}})]})}),Y&&B&&(0,F.jsx)(oe,{action:a,chain:D,transactionDetails:B,isTokenContractInfoLoading:M,symbol:I})]}),G&&(0,F.jsx)(m,{children:(0,F.jsxs)(ae,{onClick:()=>K(!0),children:[(0,F.jsx)(`span`,{className:`text-color-primary`,children:`Details`}),(0,F.jsx)(ie,{height:`14px`,width:`14px`,strokeWidth:`2`})]})})]}),(0,F.jsx)(re,{}),t?(0,F.jsx)(v,{style:{marginTop:`2rem`},children:t.message}):n&&V===0?(0,F.jsx)(v,{style:{marginTop:`2rem`},children:n.shortMessage??de}):null,(0,F.jsx)(se,{variant:W,preventMaliciousTransaction:he,setPreventMaliciousTransaction:ge}),(0,F.jsx)(ue,{$useSmallMargins:!(!n&&!t&&W!==`warn`&&W!==`error`),address:w,balance:L,errMsg:k||n||t||!S?void 0:`Add funds on ${D?.name??U} to complete transaction.`}),(0,F.jsx)(c,{style:{marginTop:`1rem`},loading:O,disabled:E||k,onClick:z,children:T}),ve&&(0,F.jsx)(f,{style:{marginTop:`1rem`},onClick:i,isSubmitting:!1,children:`Not now`}),(0,F.jsx)(d,{})]})},W=({img:e,title:t,subtitle:n,cta:i,instructions:a,network:o,blockExplorerUrl:u,isMissingFunds:f,submitError:g,parseError:x,total:S,swap:C,transactingWalletAddress:w,fee:T,balance:E,disabled:D,isSubmitting:O,isPreparing:k,isTokenPriceLoading:A,onClick:M,onClose:ie,onBack:N,isSponsored:I})=>{let L=k||A,[R,z]=(0,j.useState)(!1),B=ne();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l,{onClose:ie,backFn:N}),e&&(0,F.jsx)(fe,{children:e}),(0,F.jsx)(te,{style:{marginTop:e?`1.5rem`:0},children:t}),(0,F.jsx)(ee,{children:n}),(0,F.jsxs)(p,{style:{marginTop:`2rem`,marginBottom:`.5rem`},children:[(S||L)&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount`}),(0,F.jsx)(h,{$isLoading:L,children:S})]}),C&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Swap`}),(0,F.jsx)(h,{children:C})]}),o&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Network`}),(0,F.jsx)(h,{children:o})]}),(T||L||I!==void 0)&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Estimated fee`}),(0,F.jsx)(h,{$isLoading:L,children:I&&!L?(0,F.jsxs)(pe,{children:[(0,F.jsxs)(me,{children:[`Sponsored by `,B.name]}),(0,F.jsx)(P,{height:16,width:16})]}):T})]})]}),(0,F.jsx)(m,{children:(0,F.jsxs)(ae,{onClick:()=>z((e=>!e)),children:[(0,F.jsx)(`span`,{children:`Advanced`}),(0,F.jsx)(r,{height:`16px`,width:`16px`,strokeWidth:`2`,style:{transition:`all 300ms`,transform:R?`rotate(180deg)`:void 0}})]})}),R&&(0,F.jsx)(F.Fragment,{children:a.map(((e,t)=>e.type===`sol-transfer`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Transfer `,e.withSeed?`with seed`:``]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount`}),(0,F.jsxs)(h,{children:[s({amount:e.value,decimals:e.token.decimals}),` `,e.token.symbol]})]}),!!e.toAccount&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Destination`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.toAccount,url:u})})]})]},t):e.type===`spl-transfer`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Transfer `,e.token.symbol]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount`}),(0,F.jsx)(h,{children:e.value.toString()})]}),!!e.fromAta&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Source`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.fromAta,url:u})})]}),!!e.toAta&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Destination`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.toAta,url:u})})]}),!!e.token.address&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.token.address,url:u})})]})]},t):e.type===`ata-creation`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsx)(y,{children:`Create token account`})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Program ID`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.program,url:u})})]}),!!e.owner&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Owner`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.owner,url:u})})]})]},t):e.type===`create-account`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Create account `,e.withSeed?`with seed`:``]})}),!!e.account&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Account`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.account,url:u})})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount`}),(0,F.jsxs)(h,{children:[s({amount:e.value,decimals:9}),` SOL`]})]})]},t):e.type===`spl-init-account`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsx)(y,{children:`Initialize token account`})}),!!e.account&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Account`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.account,url:u})})]}),!!e.mint&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Mint`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mint,url:u})})]}),!!e.owner&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Owner`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.owner,url:u})})]})]},t):e.type===`spl-close-account`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsx)(y,{children:`Close token account`})}),!!e.source&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Source`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.source,url:u})})]}),!!e.destination&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Destination`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.destination,url:u})})]}),!!e.owner&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Owner`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.owner,url:u})})]})]},t):e.type===`spl-sync-native`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsx)(y,{children:`Sync native`})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Program ID`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.program,url:u})})]})]},t):e.type===`raydium-swap-base-input`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Raydium swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount in`}),(0,F.jsx)(h,{children:e.amountIn.toString()})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Minimum amount out`}),(0,F.jsx)(h,{children:e.minimumAmountOut.toString()})]}),e.mintIn&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token in`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintIn,url:u})})]}),e.mintOut&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token out`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintOut,url:u})})]})]},t):e.type===`raydium-swap-base-output`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Raydium swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Max amount in`}),(0,F.jsx)(h,{children:e.maxAmountIn.toString()})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount out`}),(0,F.jsx)(h,{children:e.amountOut.toString()})]}),e.mintIn&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token in`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintIn,url:u})})]}),e.mintOut&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token out`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintOut,url:u})})]})]},t):e.type===`jupiter-swap-shared-accounts-route`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Jupiter swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`In amount`}),(0,F.jsx)(h,{children:e.inAmount.toString()})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Quoted out amount`}),(0,F.jsx)(h,{children:e.quotedOutAmount.toString()})]}),e.mintIn&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token in`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintIn,url:u})})]}),e.mintOut&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token out`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintOut,url:u})})]})]},t):e.type===`jupiter-swap-exact-out-route`?(0,F.jsxs)(G,{children:[(0,F.jsx)(m,{children:(0,F.jsxs)(y,{children:[`Jupiter swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Quoted in amount`}),(0,F.jsx)(h,{children:e.quotedInAmount.toString()})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Amount out`}),(0,F.jsx)(h,{children:e.outAmount.toString()})]}),e.mintIn&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token in`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintIn,url:u})})]}),e.mintOut&&(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Token out`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.mintOut,url:u})})]})]},t):(0,F.jsxs)(G,{children:[(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Program ID`}),(0,F.jsx)(h,{children:(0,F.jsx)(b,{address:e.program,url:u})})]}),(0,F.jsxs)(m,{children:[(0,F.jsx)(_,{children:`Data`}),(0,F.jsx)(h,{children:e.discriminator})]})]},t)))}),(0,F.jsx)(re,{}),g?(0,F.jsx)(v,{style:{marginTop:`2rem`},children:g.message}):x?(0,F.jsx)(v,{style:{marginTop:`2rem`},children:de}):null,(0,F.jsx)(ue,{$useSmallMargins:!(!x&&!g),title:``,address:w,balance:E,errMsg:k||x||g||!f?void 0:`Add funds on Solana to complete transaction.`}),(0,F.jsx)(c,{style:{marginTop:`1rem`},loading:O,disabled:D||k,onClick:M,children:i}),(0,F.jsx)(d,{})]})},ue=i(x)`
  ${e=>e.$useSmallMargins?`margin-top: 0.5rem;`:`margin-top: 2rem;`}
`,G=i(p)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,de=`There was an error preparing your transaction. Your transaction request will likely fail.`,fe=i.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,pe=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,me=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,K=e=>e?.code===a.COMPLIANCE_BLOCKED,he=()=>(0,F.jsxs)(ve,{children:[(0,F.jsx)(Y,{}),(0,F.jsx)(ye,{})]}),ge=({transactionError:e,chainId:t,onClose:n,onRetry:r,chainType:i,transactionHash:s})=>{let{chains:c}=S(),[d,f]=(0,j.useState)(!1),{errorCode:p,errorMessage:m}=((e,t)=>{if(e instanceof o&&e.code===a.MISSING_MFA_ENROLLMENT)return{errorCode:`MFA enrollment required`,errorMessage:e.message};if(t===`ethereum`)return K(e)?{errorCode:`Transaction blocked`,errorMessage:e.message}:{errorCode:e.details??e.message,errorMessage:e.shortMessage};let n=e.txSignature,r=e?.transactionMessage||`Something went wrong.`;if(Array.isArray(e.logs)){let t=e.logs.find((e=>/insufficient (lamports|funds)/gi.test(e)));t&&(r=t)}return{transactionHash:n,errorMessage:r}})(e,i),h=K(e),g=(({chains:e,chainId:t,chainType:n,transactionHash:r})=>n===`ethereum`?e.find((e=>e.id===t))?.blockExplorers?.default.url??`https://etherscan.io`:function(e,t){return`https://explorer.solana.com/tx/${e}?chain=${t}`}(r||``,t))({chains:c,chainId:t,chainType:i,transactionHash:s});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l,{onClose:n}),(0,F.jsxs)(q,{children:[(0,F.jsx)(he,{}),(0,F.jsx)(J,{children:p}),(0,F.jsx)(_e,{children:h?`This transaction cannot be completed.`:`Please try again.`}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(X,{children:`Error message`}),(0,F.jsx)($,{$clickable:!1,children:m})]}),s&&(0,F.jsxs)(Z,{children:[(0,F.jsx)(X,{children:`Transaction hash`}),(0,F.jsxs)(Q,{children:[`Copy this hash to view details about the transaction on a`,` `,(0,F.jsx)(`u`,{children:(0,F.jsx)(`a`,{href:g,children:`block explorer`})}),`.`]}),(0,F.jsxs)($,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(s),f(!0)},children:[s,(0,F.jsx)(Ce,{clicked:d})]})]}),!h&&(0,F.jsx)(be,{onClick:()=>r({resetNonce:!!s}),children:`Retry transaction`})]}),(0,F.jsx)(u,{})]})},q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,J=i.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,_e=i.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,ve=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ye=i(A)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,Y=i.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,be=i(c)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,X=i.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,Z=i.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Q=i.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
`,$=i.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
  ${e=>e.$clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,xe=i(L)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,Se=i(E)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,Ce=({clicked:e})=>(0,F.jsx)(e?Se:xe,{});export{U as n,ge as r,W as t};