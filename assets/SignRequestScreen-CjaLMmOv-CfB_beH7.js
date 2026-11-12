import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{r}from"./esm-n2lWo7kz.js";import{t as i}from"./createLucideIcon-8N3FIa-L.js";import{c as a}from"./Loader-UAZqxsnw-OzBlysTp.js";import{P as o,b as s}from"./isAddress-UiVV5sSd.js";import{A as c,K as l,_ as u}from"./esm-Wbmz1DiJ.js";import{t as d}from"./CopyToClipboard-i_OQSBJr-dvr0UTUk.js";import{r as f}from"./Layouts-CaU-iybi-DYobM49r.js";import{n as p,t as m}from"./JsonTree-BHzNC-ic-ChSEmaY5.js";import{P as h,X as g}from"./use-sign-transaction-internal-DOuaa7Jg-DYTu_bbP.js";import{D as _,d as v,et as y,f as b,q as x}from"./privy-context-C9y77F5F-BwifsPXg.js";import{t as S}from"./ScreenLayout-B5KIshKq-DdTuMdQp.js";var C=i(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]),w=n(),T=e(t(),1),E=a.img`
  && {
    height: ${e=>e.size===`sm`?`65px`:`140px`};
    width: ${e=>e.size===`sm`?`65px`:`140px`};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`,D=e=>{if(!o(e))return e;try{let t=s(e);return t.includes(`�`)?e:t}catch{return e}},O=e=>{try{let t=r.decode(e),n=new TextDecoder().decode(t);return n.includes(`�`)?e:n}catch{return e}},k=e=>{let{types:t,primaryType:n,...r}=e.typedData;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(P,{data:r}),(0,w.jsx)(d,{text:(i=e.typedData,JSON.stringify(i,null,2)),itemName:`full payload to clipboard`}),` `]});var i},A=({method:e,messageData:t,copy:n,iconUrl:r,isLoading:i,success:a,walletProxyIsLoading:o,errorMessage:s,isCancellable:c,onSign:l,onCancel:u,onClose:d})=>(0,w.jsx)(S,{title:n.title,subtitle:n.description,showClose:!0,onClose:d,icon:C,iconVariant:`subtle`,helpText:s?(0,w.jsx)(N,{children:s}):void 0,primaryCta:{label:n.buttonText,onClick:l,disabled:i||a||o,loading:i},secondaryCta:c?{label:`Not now`,onClick:u,disabled:i||a||o}:void 0,watermark:!0,children:(0,w.jsxs)(f,{children:[r?(0,w.jsx)(E,{style:{alignSelf:`center`},size:`sm`,src:r,alt:`app image`}):null,(0,w.jsxs)(M,{children:[e===`personal_sign`&&(0,w.jsx)(F,{children:D(t)}),e===`eth_signTypedData_v4`&&(0,w.jsx)(k,{typedData:t}),e===`solana_signMessage`&&(0,w.jsx)(F,{children:O(t)})]})]})}),j={component:()=>{let{authenticated:e}=v(),{initializeWalletProxy:t,closePrivyModal:n}=y(),{navigate:r,data:i,onUserCloseViaDialogOrKeybindRef:a}=_(),[o,s]=(0,T.useState)(!0),[d,f]=(0,T.useState)(``),[p,m]=(0,T.useState)(),[S,C]=(0,T.useState)(null),[E,D]=(0,T.useState)(!1);(0,T.useEffect)((()=>{e||r(`LandingScreen`)}),[e]),(0,T.useEffect)((()=>{t(x).then((e=>{s(!1),e||(f(`An error has occurred, please try again.`),m(new h(new g(d,c.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:O,data:k,confirmAndSign:j,onSuccess:M,onFailure:N,uiOptions:P}=i.signMessage,F={title:P?.title||`Sign message`,description:P?.description||`Signing this message will not cost you any fees.`,buttonText:P?.buttonText||`Sign and continue`},I=e=>{e?M(e):N(p||new h(new g(`The user rejected the request.`,c.E4001_USER_REJECTED_REQUEST.eipCode))),n({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{C(null),f(``),m(void 0)}),200)};return a.current=()=>{I(S)},(0,w.jsx)(A,{method:O,messageData:k,copy:F,iconUrl:P?.iconUrl&&typeof P.iconUrl==`string`?P.iconUrl:void 0,isLoading:E,success:S!==null,walletProxyIsLoading:o,errorMessage:d,isCancellable:P?.isCancellable,onSign:async()=>{D(!0),f(``);try{let e=await j();C(e),D(!1),setTimeout((()=>{I(e)}),b)}catch(e){console.error(e);let t=e instanceof u&&e.code===l.MISSING_MFA_ENROLLMENT?e.message:`An error has occurred, please try again.`;f(t),m(new h(new g(t,c.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),D(!1)}},onCancel:()=>I(null),onClose:()=>I(S)})}},M=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,N=a.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,P=a(m)`
  margin-top: 0;
`,F=a(p)`
  margin-top: 0;
`;export{j as SignRequestScreen,j as default,A as SignRequestView};