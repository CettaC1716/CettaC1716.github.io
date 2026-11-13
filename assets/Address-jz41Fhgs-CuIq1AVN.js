import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./jsx-runtime-xk_ScxrM.js";import{t as r}from"./check-HFCOShJA.js";import{t as i}from"./copy-CkfktZQy.js";import{c as a}from"./Loader-UAZqxsnw-OzBlysTp.js";import{h as o}from"./prepareFundingModalData-BnnZJKUp-BnZGoUlW.js";import{o as s}from"./ModalFooter-W9Sd_7dV-CtUJqzHj.js";var c=n(),l=e(t(),1),u=({address:e,showCopyIcon:t,url:n,className:a})=>{let[u,m]=(0,l.useState)(!1);function h(t){t.stopPropagation(),navigator.clipboard.writeText(e).then((()=>m(!0))).catch(console.error)}return(0,l.useEffect)((()=>{if(u){let e=setTimeout((()=>m(!1)),3e3);return()=>clearTimeout(e)}}),[u]),(0,c.jsxs)(d,n?{children:[(0,c.jsx)(p,{title:e,className:a,href:`${n}/address/${e}`,target:`_blank`,children:o(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(r,{size:16})]}:{children:[`Copy`,(0,c.jsx)(i,{size:16})]})})]}:{children:[(0,c.jsx)(f,{title:e,className:a,children:o(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`,fontSize:`14px`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(r,{size:14})]}:{children:[`Copy`,(0,c.jsx)(i,{size:14})]})})]})},d=a.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,f=a.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,p=a.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{u as t};