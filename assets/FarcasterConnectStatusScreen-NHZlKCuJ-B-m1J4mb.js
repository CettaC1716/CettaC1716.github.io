import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{W as r}from"./prepareFundingModalData-BnnZJKUp-DA1qrC-u.js";import{c as i,t as a}from"./Loader-UAZqxsnw-OzBlysTp.js";import{t as o}from"./OpenLink-CUpJ1mOr-BR9PLI7u.js";import{t as s}from"./QrCode-q6VkcfwB-WUxzBnua.js";import{t as c}from"./check-HFCOShJA.js";import{t as l}from"./copy-CkfktZQy.js";import{o as u}from"./ModalFooter-W9Sd_7dV-CtUJqzHj.js";import{t as d}from"./LabelXs-oqZNqbm_-BG8lRlTP.js";import{D as f,a as p,d as m,et as h,f as g}from"./privy-context-C9y77F5F-BwifsPXg.js";import{s as _,t as v}from"./errors-DfUuyeiY-CZPAWCgC.js";import{t as y}from"./shouldProceedtoEmbeddedWalletCreationFlow-HNXS9_qv-DDsRE5kx.js";import{t as b}from"./ScreenLayout-B5KIshKq-DdTuMdQp.js";import{t as x}from"./farcaster-DPlSjvF5-BbOKNGbA.js";var S=n(),C=e(t(),1),w=e(r(),1),T=i.div`
  width: 100%;
`,E=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?`var(--privy-color-background-2)`:`var(--privy-color-background)`};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?`var(--privy-color-foreground-4)`:`var(--privy-color-foreground-3)`};
  }
`,D=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,O=i.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?`var(--privy-color-foreground-2)`:`var(--privy-color-foreground)`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,k=i(O)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,A=i(d)`
  margin-bottom: 0.5rem;
`,j=i(u)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`,M=({value:e,title:t,placeholder:n,className:r,showCopyButton:i=!0,truncate:a,maxLength:o=40,disabled:s=!1})=>{let[u,d]=(0,C.useState)(!1),f=a&&e?((e,t,n)=>{if((e=e.startsWith(`https://`)?e.slice(8):e).length<=n)return e;if(t===`middle`){let t=Math.ceil(n/2)-2,r=Math.floor(n/2)-1;return`${e.slice(0,t)}...${e.slice(-r)}`}return`${e.slice(0,n-3)}...`})(e,a,o):e;return(0,C.useEffect)((()=>{if(u){let e=setTimeout((()=>d(!1)),3e3);return()=>clearTimeout(e)}}),[u]),(0,S.jsxs)(T,{className:r,children:[t&&(0,S.jsx)(A,{children:t}),(0,S.jsxs)(E,{$disabled:s,children:[(0,S.jsx)(D,{children:e?(0,S.jsx)(O,{$disabled:s,title:e,children:f}):(0,S.jsx)(k,{$disabled:s,children:n||`No value`})}),i&&e&&(0,S.jsx)(j,{onClick:function(t){t.stopPropagation(),navigator.clipboard.writeText(e).then((()=>d(!0))).catch(console.error)},size:`sm`,children:(0,S.jsxs)(S.Fragment,u?{children:[`Copied`,(0,S.jsx)(c,{size:14})]}:{children:[`Copy`,(0,S.jsx)(l,{size:14})]})})]})]})},N=({connectUri:e,loading:t,success:n,errorMessage:r,onBack:i,onClose:c,onOpenFarcaster:l})=>(0,S.jsx)(b,w.isMobile||t?w.isIOS?{title:r?r.message:`Sign in with Farcaster`,subtitle:r?r.detail:`To sign in with Farcaster, please open the Farcaster app.`,icon:x,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},primaryCta:e&&l?{label:`Open Farcaster app`,onClick:l}:void 0,onBack:i,onClose:c,watermark:!0}:{title:r?r.message:`Signing in with Farcaster`,subtitle:r?r.detail:`This should only take a moment`,icon:x,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},onBack:i,onClose:c,watermark:!0,children:e&&w.isMobile&&(0,S.jsx)(F,{children:(0,S.jsx)(o,{text:`Take me to Farcaster`,url:e,color:`#8a63d2`})})}:{title:`Sign in with Farcaster`,subtitle:`Scan with your phone's camera to continue.`,onBack:i,onClose:c,watermark:!0,children:(0,S.jsxs)(I,{children:[(0,S.jsx)(L,{children:e?(0,S.jsx)(s,{url:e,size:275,squareLogoElement:x}):(0,S.jsx)(B,{children:(0,S.jsx)(a,{})})}),(0,S.jsxs)(R,{children:[(0,S.jsx)(z,{children:`Or copy this link and paste it into a phone browser to open the Farcaster app.`}),e&&(0,S.jsx)(M,{value:e,truncate:`end`,maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),P={component:()=>{let{authenticated:e,logout:t,ready:n,user:r}=m(),{lastScreen:i,navigate:a,navigateBack:o,setModalData:s}=f(),c=p(),{getAuthFlow:l,loginWithFarcaster:u,closePrivyModal:d,createAnalyticsEvent:b}=h(),[x,w]=(0,C.useState)(void 0),[T,E]=(0,C.useState)(!1),[D,O]=(0,C.useState)(!1),k=(0,C.useRef)([]),A=l(),j=A?.meta.connectUri;return(0,C.useEffect)((()=>{let e=Date.now(),t=setInterval((async()=>{let n=await A.pollForReady.execute(),r=Date.now()-e;if(n){clearInterval(t),E(!0);try{await u(),O(!0)}catch(e){let t={retryable:!1,message:`Authentication failed`};if(e?.privyErrorCode===_.ALLOWLIST_REJECTED)return void a(`AllowlistRejectionScreen`);if(e?.privyErrorCode===_.USER_LIMIT_REACHED)return console.error(new v(e).toString()),void a(`UserLimitReachedScreen`);if(e?.privyErrorCode===_.USER_DOES_NOT_EXIST)return void a(`AccountNotFoundScreen`);if(e?.privyErrorCode===_.LINKED_TO_ANOTHER_USER)t.detail=e.message??`This account has already been linked to another user.`;else{if(e?.privyErrorCode===_.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return s({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:`farcaster`,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:e.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void a(`LinkConflictScreen`);e?.privyErrorCode===_.INVALID_CREDENTIALS?(t.retryable=!0,t.detail=`Something went wrong. Try again.`):e?.privyErrorCode===_.TOO_MANY_REQUESTS&&(t.detail=`Too many requests. Please wait before trying again.`)}w(t)}}else r>12e4&&(clearInterval(t),w({retryable:!0,message:`Authentication failed`,detail:`The request timed out. Try again.`}))}),2e3);return()=>{clearInterval(t),k.current.forEach((e=>clearTimeout(e)))}}),[]),(0,C.useEffect)((()=>{if(n&&e&&D&&r){if(c?.legal.requireUsersAcceptTerms&&!r.hasAcceptedTerms){let e=setTimeout((()=>{a(`AffirmativeConsentScreen`)}),g);return()=>clearTimeout(e)}D&&(y(r,c.embeddedWallets)?k.current.push(setTimeout((()=>{s({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),b({eventName:`embedded_wallet_creation_failure_logout`,payload:{error:e,screen:`FarcasterConnectStatusScreen`}}),t()},callAuthOnSuccessOnClose:!0}}),a(`EmbeddedWalletOnAccountCreateScreen`)}),1400)):k.current.push(setTimeout((()=>d({shouldCallAuthOnSuccess:!0,isSuccess:!0})),1400)))}}),[D,n,e,r]),(0,S.jsx)(N,{connectUri:j,loading:T,success:D,errorMessage:x,onBack:i?o:void 0,onClose:d,onOpenFarcaster:()=>{j&&(window.location.href=j)}})}},F=i.div`
  margin-top: 24px;
`,I=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,R=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,z=i.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,B=i.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{P as FarcasterConnectStatusScreen,P as default,N as FarcasterConnectStatusView};