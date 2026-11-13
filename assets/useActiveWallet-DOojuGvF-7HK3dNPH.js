import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{c as r,s as i}from"./Loader-UAZqxsnw-OzBlysTp.js";import{h as a}from"./isAddress-UiVV5sSd.js";import{D as o,P as s,i as c,k as l,w as u}from"./prepareFundingModalData-BnnZJKUp-BtCGSu8p.js";import{a as d,et as f,g as p}from"./privy-context-C9y77F5F-BwifsPXg.js";import{a as m,c as h,t as g}from"./useWallets-CE0NDhdl-C-DDlE9O.js";import{g as _}from"./get-entropy-details-for-user-CANnHlPf-DUqFLCXy.js";var v=e(t(),1),y=n(),b=e=>{let[t,n]=(0,v.useState)(`auto`);return(0,v.useEffect)((()=>{let t=new ResizeObserver((e=>{n(e[0]?.contentRect.height??`auto`)}));return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[e.current]),t},x=r.div`
  text-align: left;
  flex-grow: 1;
`,S=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,C=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,w=r(C)`
  ${e=>e.$colorScheme===`light`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;`:e.$colorScheme===`dark`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;`:void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,T=i`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,E=r.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,D=r.button.attrs({className:`login-method-button`})`
  ${T}
`;r.a`
  ${T}
`;var O=r.div`
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.$fullSize?`0`:`4px`};
  background: ${e=>e.$fullSize?`transparent`:`var(--privy-color-background-2)`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${e=>e.$fullSize?`32px`:`18px`};
    height: ${e=>e.$fullSize?`32px`:`18px`};
    color: ${e=>e.$fullSize?`inherit`:`var(--privy-color-icon-muted)`};
  }
`,k=r.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.$if?`display: none;`:``}
`,A=r.div`
  width: 100%;
  height: 100%;
  padding: ${e=>e.$withPadding?`64px 0px`:`0px`};
`,j=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;async function M(e,t,n){if(!t.shouldEnforceDefaultChainOnConnect)return;let r=Number(e.chainId.replace(`eip155:`,``));if(!t.chains.find((e=>e.id===r))&&(e.connectorType!==`wallet_connect_v2`||e.walletClientType!==`metamask`)){n?.();try{await e.switchChain(t.defaultChain.id),e.chainId=c(a(t.defaultChain.id))}catch{s.warn(`Unable to switch to default chain after connect`,{chainId:t.defaultChain.id})}}}var N=(0,v.createContext)({}),P=({children:e})=>{let t=d(),[n,r]=(0,v.useState)({});return u(`login`,{onComplete:({loginAccount:e})=>{e&&e.type!==`passkey`&&e.type!==`cross_app`&&(e.type!==`wallet`||e.walletClientType!==`privy`)&&(l.put(F(t.id),e.type),e.type===`wallet`?(l.put(I(t.id),e.walletClientType),l.put(L(t.id),e.chainType),r({accountType:e.type,walletClientType:e.walletClientType,chainType:e.chainType})):(l.del(I(t.id)),l.del(L(t.id)),r({accountType:e.type})))}}),(0,v.useEffect)((()=>{if(!t.id)return;let e=l.get(F(t.id)),n=l.get(I(t.id)),i=l.get(L(t.id));e&&r(e===`wallet`?{accountType:e,walletClientType:n,chainType:i}:{accountType:e})}),[t.id]),(0,y.jsx)(N.Provider,{value:n,children:e})},F=e=>`privy:${e}:recent-login-method`,I=e=>`privy:${e}:recent-login-wallet-client`,L=e=>`privy:${e}:recent-login-chain-type`,R=()=>(0,v.useContext)(N),z=e=>{u(`fundWallet`,e);let{fundWallet:t}=f();return{fundWallet:({address:e,options:n})=>t(e,n)}};function B(e){let{login:t}=(0,v.useContext)(p);return u(`login`,e),{login:t}}function V(e){let{logout:t}=(0,v.useContext)(p);return u(`logout`,e),{logout:t}}var H=e=>{u(`update`,e);let{update:t}=h(),{update:n}=m();return{updateEmail:t,updatePhone:n}};function U(e){let{connectWallet:t}=(0,v.useContext)(p);return u(`connectWallet`,e),{connectWallet:t}}var W=_((()=>({isModalOpen:!1,resolvers:null}))),G=_((()=>({}))),K=async()=>{let e,t,n=new Promise(((n,r)=>{e=n,t=r}));return G.setState({}),W.setState({isModalOpen:!0,resolvers:{resolve:e,reject:t}}),await n},q=({address:e,client:t,appId:n})=>{let r=`${t}:${e}`;n&&l.put(J(n),r),W.setState({wallet:r})},J=e=>`privy:${e}:active-wallet-connection`,Y=()=>{let e=d(),{wallets:t}=g(),{connectors:n}=f(),r=(0,v.useMemo)((()=>n.filter(o).flatMap((e=>e.wallets))),[n]),i=W((e=>e.wallet));(0,v.useEffect)((()=>{if(!e.id)return;let t=l.get(J(e.id));W.setState({wallet:t})}),[e.id]);let a=(0,v.useMemo)((()=>{if(!i)return;let[,e]=i.split(`:`);return t.find((t=>t.address===e))||r.find((t=>t.address===e))}),[i,t,r]),s=(0,v.useMemo)((()=>a?a.type===`ethereum`?a.chainId:`solana`:void 0),[a]);return{connect:async n=>{n?.reset&&(l.del(J(e.id)),W.setState({wallet:void 0}));let{wallet:i}=await K();if(!i)return{};let[,a]=i.split(`:`),o=t.find((e=>e.address===a));if(o)return{wallet:o,network:o.chainId};let s=r.find((e=>e.address===a));return s?{wallet:s,network:`solana`}:{}},setActiveWallet:(0,v.useCallback)((t=>{q({address:t.address,client:t.walletClientType,appId:e.id})}),[e.id]),wallet:a,network:s}};export{q as _,V as a,U as b,A as c,M as d,P as f,D as g,z as h,B as i,R as l,C as m,w as n,O as o,S as p,j as r,H as s,x as t,k as u,E as v,Y as x,b as y};