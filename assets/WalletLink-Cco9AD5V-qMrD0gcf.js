import{t as e}from"./jsx-runtime-xk_ScxrM.js";import{c as t}from"./Loader-UAZqxsnw-OzBlysTp.js";import{o as n}from"./AbiItem-DFsQLniK.js";import{i as r,n as i,o as a,r as o}from"./ethers-CxEgrq2M-Bs9I2nch.js";import{t as s}from"./getFormattedUsdFromLamports-BmYfYx64-Gx4_wxON.js";import{n as c}from"./transaction-oglazAWT-BgNqIIn8.js";import{h as l}from"./prepareFundingModalData-BnnZJKUp-EMDILVwv.js";var u=e(),d=({weiQuantities:e,tokenPrice:t,tokenSymbol:n})=>{let o=r(e),s=t?a(o,t):void 0,c=i(o,n);return(0,u.jsx)(m,{children:s||c})},f=({weiQuantities:e,tokenPrice:t,tokenSymbol:n})=>{let o=r(e),s=t?a(o,t):void 0,c=i(o,n);return(0,u.jsx)(m,{children:s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{children:`USD`}),s===`<$0.01`?(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{children:`<`}),`$0.01`]}):s]}):c})},p=({quantities:e,tokenPrice:t,tokenSymbol:r=`SOL`,tokenDecimals:i=9})=>{let a=e.reduce(((e,t)=>e+t),0n),o=t&&r===`SOL`&&i===9?s(a,t):void 0,l=r===`SOL`&&i===9?c(a):`${n(a,i)} ${r}`;return(0,u.jsx)(m,{children:o?(0,u.jsx)(u.Fragment,{children:o===`<$0.01`?(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{children:`<`}),`$0.01`]}):o}):l})},m=t.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,h=t.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,g=t.span`
  font-size: 10px;
`,_=t.span`
  display: flex;
  align-items: center;
`;function v(e,t){return`https://explorer.solana.com/account/${e}?chain=${t}`}var y=e=>(0,u.jsx)(b,{href:e.chainType===`ethereum`?o(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:`_blank`,children:l(e.walletAddress)}),b=t.a`
  &:hover {
    text-decoration: underline;
  }
`;export{d as i,p as n,f as r,y as t};