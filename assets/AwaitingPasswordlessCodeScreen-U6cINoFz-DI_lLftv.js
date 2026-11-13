import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{t as r}from"./EnvelopeIcon-C2ZUKxMy.js";import{t as i}from"./PhoneIcon-D71RtyUE.js";import{W as a}from"./prepareFundingModalData-BnnZJKUp-BTbxU1eK.js";import{c as o}from"./Loader-UAZqxsnw-OzBlysTp.js";import{s}from"./Layouts-CaU-iybi-DYobM49r.js";import{t as c}from"./Link-BdDilT2T-BbSzGW9K.js";import{D as l,a as u,d,et as f,f as p}from"./privy-context-C9y77F5F-BwifsPXg.js";import{s as m,t as h,u as g}from"./errors-DfUuyeiY-CZPAWCgC.js";import{t as _}from"./shouldProceedtoEmbeddedWalletCreationFlow-HNXS9_qv-CgNxNp3x.js";import{t as v}from"./ScreenLayout-B5KIshKq-DdTuMdQp.js";var y=n(),b=e(t());function x({title:e,titleId:t,...n},r){return b.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?b.createElement(`title`,{id:t},e):null,b.createElement(`path`,{fillRule:`evenodd`,d:`M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z`,clipRule:`evenodd`}))}var S=b.forwardRef(x),C=e(a(),1),w=({contactMethod:e,authFlow:t,emailDomain:n,appName:a=`Privy`,whatsAppEnabled:o=!1,onBack:l,onCodeSubmit:u,onResend:d,errorMessage:f,success:p=!1,resendCountdown:m=0,onInvalidInput:h,onClearError:g})=>{let[_,x]=(0,b.useState)(E);(0,b.useEffect)((()=>{f||x(E)}),[f]);let w=async e=>{e.preventDefault();let t=e.currentTarget.value.replace(` `,``);if(t===``)return;if(isNaN(Number(t)))return void h?.(`Code should be numeric`);g?.();let n=Number(e.currentTarget.name?.charAt(5)),r=[...t||[``]].slice(0,T-n),i=[..._.slice(0,n),...r,..._.slice(n+r.length)];x(i);let a=Math.min(Math.max(n+r.length,0),T-1);isNaN(Number(e.currentTarget.value))||document.querySelector(`input[name=code-${a}]`)?.focus(),i.every((e=>e&&!isNaN(+e)))&&(document.querySelector(`input[name=code-${a}]`)?.blur(),await u?.(i.join(``)))};return(0,y.jsx)(v,{title:`Enter confirmation code`,subtitle:(0,y.jsxs)(`span`,t===`email`?{children:[`Please check `,(0,y.jsx)(L,{children:e}),` for an email from`,` `,n??`privy.io`,` and enter your code below.`]}:{children:[`Please check `,(0,y.jsx)(L,{children:e}),` for a`,o?` WhatsApp`:``,` message from `,a,` and enter your code below.`]}),icon:t===`email`?r:i,onBack:l,showBack:!0,helpText:(0,y.jsxs)(F,{children:[(0,y.jsxs)(`span`,{children:[`Didn't get `,t===`email`?`an email`:`a message`,`?`]}),m?(0,y.jsxs)(I,{children:[(0,y.jsx)(S,{color:`var(--privy-color-foreground)`,strokeWidth:1.33,height:`12px`,width:`12px`}),(0,y.jsx)(`span`,{children:`Code sent`})]}):(0,y.jsx)(c,{as:`button`,size:`sm`,onClick:d,children:`Resend code`})]}),children:(0,y.jsx)(M,{children:(0,y.jsx)(s,{children:(0,y.jsxs)(N,{children:[(0,y.jsx)(`div`,{children:_.map(((e,t)=>(0,y.jsx)(`input`,{name:`code-${t}`,type:`text`,value:_[t],onChange:w,onKeyUp:e=>{e.key===`Backspace`&&(e=>{g?.(),x([..._.slice(0,e),``,..._.slice(e+1)]),e>0&&document.querySelector(`input[name=code-${e-1}]`)?.focus()})(t)},inputMode:`numeric`,autoFocus:t===0,pattern:`[0-9]`,className:`${p?`success`:``} ${f?`fail`:``}`,autoComplete:C.isMobile?`one-time-code`:`off`},t)))}),(0,y.jsx)(P,{$fail:!!f,$success:p,children:(0,y.jsx)(`span`,{children:f===`Invalid or expired verification code`?`Incorrect code`:f||(p?`Success!`:``)})})]})})})})},T=6,E=[,,,,,,].fill(``),D,O,k=((D=k||{})[D.RESET_AFTER_DELAY=0]=`RESET_AFTER_DELAY`,D[D.CLEAR_ON_NEXT_VALID_INPUT=1]=`CLEAR_ON_NEXT_VALID_INPUT`,D),A=((O=A||{})[O.EMAIL=0]=`EMAIL`,O[O.SMS=1]=`SMS`,O),j={component:()=>{let{navigate:e,lastScreen:t,navigateBack:n,setModalData:r,onUserCloseViaDialogOrKeybindRef:i}=l(),a=u(),{closePrivyModal:o,resendEmailCode:s,resendSmsCode:c,getAuthMeta:v,loginWithCode:x,updateWallets:S,createAnalyticsEvent:C}=f(),{authenticated:T,logout:E,user:D}=d(),{whatsAppEnabled:O}=u(),[k,A]=(0,b.useState)(!1),[j,M]=(0,b.useState)(null),[N,P]=(0,b.useState)(null),[F,I]=(0,b.useState)(0);i.current=()=>null;let L=+!v()?.email,R=L===0?v()?.email||``:v()?.phoneNumber||``,z=p-500;return(0,b.useEffect)((()=>{if(F){let e=setTimeout((()=>{I(F-1)}),1e3);return()=>clearTimeout(e)}}),[F]),(0,b.useEffect)((()=>{if(T&&k&&D){if(a?.legal.requireUsersAcceptTerms&&!D.hasAcceptedTerms){let t=setTimeout((()=>{e(`AffirmativeConsentScreen`)}),z);return()=>clearTimeout(t)}if(_(D,a.embeddedWallets)){let t=setTimeout((()=>{r({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),C({eventName:`embedded_wallet_creation_failure_logout`,payload:{error:e,screen:`AwaitingPasswordlessCodeScreen`}}),E()},callAuthOnSuccessOnClose:!0}}),e(`EmbeddedWalletOnAccountCreateScreen`)}),z);return()=>clearTimeout(t)}{S();let e=setTimeout((()=>o({shouldCallAuthOnSuccess:!0,isSuccess:!0})),p);return()=>clearTimeout(e)}}}),[T,k,D]),(0,b.useEffect)((()=>{if(j&&N===0){let e=setTimeout((()=>{M(null),P(null),document.querySelector(`input[name=code-0]`)?.focus()}),1400);return()=>clearTimeout(e)}}),[j,N]),(0,y.jsx)(w,{contactMethod:R,authFlow:L===0?`email`:`sms`,emailDomain:a?.appearance.emailDomain,appName:a?.name,whatsAppEnabled:O,onBack:()=>n(),onCodeSubmit:async n=>{try{await x(n),A(!0)}catch(n){if(n instanceof g&&n.privyErrorCode===m.INVALID_CREDENTIALS)M(`Invalid or expired verification code`),P(0);else if(n instanceof g&&n.privyErrorCode===m.CANNOT_LINK_MORE_OF_TYPE)M(n.message);else{if(n instanceof g&&n.privyErrorCode===m.USER_LIMIT_REACHED)return console.error(new h(n).toString()),void e(`UserLimitReachedScreen`);if(n instanceof g&&n.privyErrorCode===m.USER_DOES_NOT_EXIST)return void e(`AccountNotFoundScreen`);if(n instanceof g&&n.privyErrorCode===m.LINKED_TO_ANOTHER_USER)return r({errorModalData:{error:n,previousScreen:t??`AwaitingPasswordlessCodeScreen`}}),void e(`ErrorScreen`,!1);if(n instanceof g&&n.privyErrorCode===m.DISALLOWED_PLUS_EMAIL)return r({inlineError:{error:n}}),void e(`ConnectOrCreateScreen`,!1);if(n instanceof g&&n.privyErrorCode===m.ACCOUNT_TRANSFER_REQUIRED&&n.data?.data?.nonce)return r({accountTransfer:{nonce:n.data?.data?.nonce,account:R,displayName:n.data?.data?.account?.displayName,linkMethod:L===0?`email`:`sms`,embeddedWalletAddress:n.data?.data?.otherUser?.embeddedWalletAddress}}),void e(`LinkConflictScreen`);M(`Issue verifying code`),P(0)}}},onResend:async()=>{I(30),L===0?await s():await c()},errorMessage:j||void 0,success:k,resendCountdown:F,onInvalidInput:e=>{M(e),P(1)},onClearError:()=>{N===1&&(M(null),P(null))}})}},M=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,N=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0);
    }
    33% {
      transform: translate(-1px, 0);
    }
    67% {
      transform: translate(-1px, 0);
    }
    100% {
      transform: translate(1px, 0);
    }
  }
`,P=o.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.$success?`var(--privy-color-success-dark)`:e.$fail?`var(--privy-color-error-dark)`:`transparent`};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,F=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,I=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,L=o.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;export{j as AwaitingPasswordlessCodeScreen,j as default,w as AwaitingPasswordlessCodeScreenView};