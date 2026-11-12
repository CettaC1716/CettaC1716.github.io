import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{t as r}from"./ShieldCheckIcon-DxI_OsMN.js";import{c as i,s as a}from"./Loader-UAZqxsnw-OzBlysTp.js";import{D as o,d as s,et as c,s as l}from"./privy-context-C9y77F5F-BwifsPXg.js";import{a as u}from"./ModalFooter-W9Sd_7dV-CtUJqzHj.js";import{a as d}from"./Layouts-CaU-iybi-DYobM49r.js";import{a as f,h as p,i as m,p as h,s as g}from"./shared-DHGjyjF2-CDerMH4z.js";import{s as _}from"./index-BosOOpwV-ClYz8uz_.js";import{p as v}from"./errors-DfUuyeiY-CZPAWCgC.js";import{t as y}from"./Screen-BqYCWWp8-Ca9NUxm9.js";var b=n(),x=e(t(),1),S={component:()=>{let[e,t]=(0,x.useState)(!0),{authenticated:n,user:i}=s(),{walletProxy:a,closePrivyModal:u,createAnalyticsEvent:S,client:E}=c(),{navigate:D,data:O,onUserCloseViaDialogOrKeybindRef:k}=o(),[A,j]=(0,x.useState)(void 0),[M,N]=(0,x.useState)(``),[P,F]=(0,x.useState)(!1),{entropyId:I,entropyIdVerifier:L,onCompleteNavigateTo:R,onSuccess:z,onFailure:B}=O.recoverWallet,V=(e=`User exited before their wallet could be recovered`)=>{u({shouldCallAuthOnSuccess:!1}),B(typeof e==`string`?new v(e):e)};return k.current=V,(0,x.useEffect)((()=>{if(!n)return V(`User must be authenticated and have a Privy wallet before it can be recovered`)}),[n]),(0,b.jsxs)(y,{children:[(0,b.jsx)(y.Header,{icon:r,title:`Enter your password`,subtitle:`Please provision your account on this new device. To continue, enter your recovery password.`,showClose:!0,onClose:V}),(0,b.jsx)(y.Body,{children:(0,b.jsx)(C,{children:(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(m,{children:[(0,b.jsx)(f,{type:e?`password`:`text`,onChange:e=>(e=>{e&&j(e)})(e.target.value),disabled:P,style:{paddingRight:`2.3rem`}}),(0,b.jsx)(p,{style:{right:`0.75rem`},children:e?(0,b.jsx)(h,{onClick:()=>t(!1)}):(0,b.jsx)(g,{onClick:()=>t(!0)})})]}),!!M&&(0,b.jsx)(w,{children:M})]})})}),(0,b.jsxs)(y.Footer,{children:[(0,b.jsx)(y.HelpText,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(`h4`,{children:`Why is this necessary?`}),(0,b.jsx)(`p`,{children:`You previously set a password for this wallet. This helps ensure only you can access it`})]})}),(0,b.jsx)(y.Actions,{children:(0,b.jsx)(T,{loading:P||!a,disabled:!A,onClick:async()=>{F(!0);let e=await E.getAccessToken(),t=l(i,I);if(!e||!t||A===null)return V(`User must be authenticated and have a Privy wallet before it can be recovered`);try{S({eventName:`embedded_wallet_recovery_started`,payload:{walletAddress:t.address}}),await a?.recover({accessToken:e,entropyId:I,entropyIdVerifier:L,recoveryPassword:A}),N(``),R?D(R):u({shouldCallAuthOnSuccess:!1}),z?.(t),S({eventName:`embedded_wallet_recovery_completed`,payload:{walletAddress:t.address}})}catch(e){_(e)?N(`Invalid recovery password, please try again.`):N(`An error has occurred, please try again.`)}finally{F(!1)}},$hideAnimations:!I&&P,children:`Recover your account`})}),(0,b.jsx)(y.Watermark,{})]})]})}},C=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,w=i.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,T=i(u)`
  ${({$hideAnimations:e})=>e&&a`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{S as PasswordRecoveryScreen,S as default};