import{c as Q,i as Kt,n as Je,o as M,r as Zt,s as H}from"./index.js";import{A as k,B as Jt,C as J,D as Ft,E as p,H as qe,I as we,L as Xt,M as F,N as _t,O as N,P as Tt,R as re,S as be,T as er,V as tr,_ as W,a as rr,b as Xe,c as _e,d as je,f as u,h as L,i as Ve,j as nr,k as O,l as ar,m as h,o as et,p as Y,s as We,t as ir,u as Ie,v as Be,w as P,x as b,y as xe,z as Bt}from"./AP5L3KAF.js";import{t as q}from"./clsx.js";var or=!0,lr=or&&!1;function sr(t){return t!==null&&(typeof t=="object"||typeof t=="function")}var Te=(t,e)=>t===e||t.length===e.length&&t.every((i,o)=>i===e[o]),tt=t=>typeof t=="function"&&!t.length?t():t,rt=t=>Array.isArray(t)?t:t?[t]:[];function nt(t,...e){return typeof t=="function"?t(...e):t}var cr=lr?t=>Tt()?re(t):t:re;function fe(t,e,i,o){return t.addEventListener(e,i,o),cr(t.removeEventListener.bind(t,e,i,o))}function at(t,e,i,o){const c=()=>{rt(tt(t)).forEach(s=>{s&&rt(tt(e)).forEach(a=>fe(s,a,i,o))})};typeof t=="function"?N(c):k(c)}function Ye(t,e=Tt()){let i=0,o,c;return()=>(i++,re(()=>{i--,queueMicrotask(()=>{!i&&c&&(c(),c=o=void 0)})}),c||nr(s=>o=t(c=s),e),o)}function it(t,e){for(let i=t.length-1;i>=0;i--){const o=e.slice(0,i+1);if(!Te(t[i],o))return!1}return!0}var Pt=Ye(()=>{const[t,e]=F(null);return fe(window,"keydown",i=>{e(i),setTimeout(()=>e(null))}),t}),It=Ye(()=>{const[t,e]=F([]),i=()=>e([]),o=Pt();return fe(window,"keydown",c=>{if(c.repeat||typeof c.key!="string")return;const s=c.key.toUpperCase(),a=t();if(a.includes(s))return;const n=[...a,s];a.length===0&&s!=="ALT"&&s!=="CONTROL"&&s!=="META"&&s!=="SHIFT"&&(c.shiftKey&&n.unshift("SHIFT"),c.altKey&&n.unshift("ALT"),c.ctrlKey&&n.unshift("CONTROL"),c.metaKey&&n.unshift("META")),e(n)}),fe(window,"keyup",c=>{if(typeof c.key!="string")return;const s=c.key.toUpperCase();e(a=>a.filter(n=>n!==s))}),fe(window,"blur",i),fe(window,"contextmenu",c=>{c.defaultPrevented||i()}),t[0]=t,t[1]={event:o},t[Symbol.iterator]=function*(){yield t[0],yield t[1]},t}),dr=Ye(()=>{const t=It();return O(e=>t().length===0?[]:[...e,t()],[])});function gr(t,e,i={}){if(!t.length)return;t=t.map(d=>d.toUpperCase());const{preventDefault:o=!0}=i,c=Pt(),s=dr();let a=!1;const n=d=>{if(!d.length)return a=!1;if(a)return;const l=c();d.length<t.length?it(d,t.slice(0,d.length))?o&&l&&l.preventDefault():a=!0:(a=!0,it(d,t)&&(o&&l&&l.preventDefault(),e(l)))},r=d=>{const l=d.at(-1);if(!l)return;const g=c();if(o&&l.length<t.length){Te(l,t.slice(0,t.length-1))&&g&&g.preventDefault();return}if(Te(l,t)){const f=d.at(-2);(!f||Te(f,t.slice(0,t.length-1)))&&(o&&g&&g.preventDefault(),e(g))}};N(Xt(s,i.requireReset?n:r))}var Lt=Ft(void 0),ur=t=>{const[e,i]=F(t.theme);return N(()=>{i(t.theme)}),p(Lt.Provider,{value:{theme:e,setTheme:i},get children(){return t.children}})};function pr(){const t=qe(Lt);if(!t)throw new Error("useTheme must be used within a ThemeContextProvider");return t}var v={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)",xl:"calc(var(--tsrd-font-size) * 1.25)","2xl":"calc(var(--tsrd-font-size) * 1.5)","3xl":"calc(var(--tsrd-font-size) * 1.875)","4xl":"calc(var(--tsrd-font-size) * 2.25)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.75)","7xl":"calc(var(--tsrd-font-size) * 4.5)","8xl":"calc(var(--tsrd-font-size) * 6)","9xl":"calc(var(--tsrd-font-size) * 8)"},lineHeight:{"3xs":"calc(var(--tsrd-font-size) * 0.75)","2xs":"calc(var(--tsrd-font-size) * 0.875)",xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)",md:"calc(var(--tsrd-font-size) * 1.5)",lg:"calc(var(--tsrd-font-size) * 1.75)",xl:"calc(var(--tsrd-font-size) * 2)","2xl":"calc(var(--tsrd-font-size) * 2.25)","3xl":"calc(var(--tsrd-font-size) * 2.5)","4xl":"calc(var(--tsrd-font-size) * 2.75)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.25)","7xl":"calc(var(--tsrd-font-size) * 3.5)","8xl":"calc(var(--tsrd-font-size) * 3.75)","9xl":"calc(var(--tsrd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)",xl:"calc(var(--tsrd-font-size) * 0.75)","2xl":"calc(var(--tsrd-font-size) * 1)","3xl":"calc(var(--tsrd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsrd-font-size) * 0.0625)",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",4.5:"calc(var(--tsrd-font-size) * 1.125)",5:"calc(var(--tsrd-font-size) * 1.25)",5.5:"calc(var(--tsrd-font-size) * 1.375)",6:"calc(var(--tsrd-font-size) * 1.5)",6.5:"calc(var(--tsrd-font-size) * 1.625)",7:"calc(var(--tsrd-font-size) * 1.75)",8:"calc(var(--tsrd-font-size) * 2)",9:"calc(var(--tsrd-font-size) * 2.25)",10:"calc(var(--tsrd-font-size) * 2.5)",11:"calc(var(--tsrd-font-size) * 2.75)",12:"calc(var(--tsrd-font-size) * 3)",14:"calc(var(--tsrd-font-size) * 3.5)",16:"calc(var(--tsrd-font-size) * 4)",20:"calc(var(--tsrd-font-size) * 5)",24:"calc(var(--tsrd-font-size) * 6)",28:"calc(var(--tsrd-font-size) * 7)",32:"calc(var(--tsrd-font-size) * 8)",36:"calc(var(--tsrd-font-size) * 9)",40:"calc(var(--tsrd-font-size) * 10)",44:"calc(var(--tsrd-font-size) * 11)",48:"calc(var(--tsrd-font-size) * 12)",52:"calc(var(--tsrd-font-size) * 13)",56:"calc(var(--tsrd-font-size) * 14)",60:"calc(var(--tsrd-font-size) * 15)",64:"calc(var(--tsrd-font-size) * 16)",72:"calc(var(--tsrd-font-size) * 18)",80:"calc(var(--tsrd-font-size) * 20)",96:"calc(var(--tsrd-font-size) * 24)"},shadow:{xs:(t="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(t="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${t}, 0 1px 2px -1px ${t}`,md:(t="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${t}, 0 2px 4px -2px ${t}`,lg:(t="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${t}, 0 4px 6px -4px ${t}`,xl:(t="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${t}, 0 8px 10px -6px ${t}`,"2xl":(t="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${t}`,inner:(t="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${t}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},hr={data:""},fr=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||hr};var vr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mr=/\/\*[^]*?\*\/|  +/g,ot=/\n+/g,de=(t,e)=>{let i="",o="",c="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?i=s+" "+a+";":o+=s[1]=="f"?de(a,s):s+"{"+de(a,s[1]=="k"?"":e)+"}":typeof a=="object"?o+=de(a,e?e.replace(/([^,])+/g,n=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,n):n?n+" "+r:r)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=de.p?de.p(s,a):s+":"+a+";")}return i+(e&&c?e+"{"+c+"}":c)+o},ae={},Dt=t=>{if(typeof t=="object"){let e="";for(let i in t)e+=i+Dt(t[i]);return e}return t},br=(t,e,i,o,c)=>{let s=Dt(t),a=ae[s]||(ae[s]=(r=>{let d=0,l=11;for(;d<r.length;)l=101*l+r.charCodeAt(d++)>>>0;return"go"+l})(s));if(!ae[a]){let r=s!==t?t:(d=>{let l,g,f=[{}];for(;l=vr.exec(d.replace(mr,""));)l[4]?f.shift():l[3]?(g=l[3].replace(ot," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][l[1]]=l[2].replace(ot," ").trim();return f[0]})(t);ae[a]=de(c?{["@keyframes "+a]:r}:r,i?"":"."+a)}let n=i&&ae.g?ae.g:null;return i&&(ae.g=ae[a]),((r,d,l,g)=>{g?d.data=d.data.replace(g,r):d.data.indexOf(r)===-1&&(d.data=l?r+d.data:d.data+r)})(ae[a],e,o,n),a},yr=(t,e,i)=>t.reduce((o,c,s)=>{let a=e[s];if(a&&a.call){let n=a(i),r=n&&n.props&&n.props.className||/^go/.test(n)&&n;a=r?"."+r:n&&typeof n=="object"?n.props?"":de(n,""):n===!1?"":n}return o+c+(a??"")},"");function Le(t){let e=this||{},i=t.call?t(e.p):t;return br(i.unshift?i.raw?yr(i,[].slice.call(arguments,1),e.p):i.reduce((o,c)=>Object.assign(o,c&&c.call?c(e.p):c),{}):i,fr(e.target),e.g,e.o,e.k)}var li=Le.bind({g:1}),ge=Le.bind({k:1}),kr={primary:{bg:{light:v.colors.gray[900],dark:v.colors.gray[100]},hover:{light:v.colors.gray[800],dark:v.colors.gray[200]},active:{light:v.colors.gray[700],dark:v.colors.gray[300]},text:{light:"#fff",dark:v.colors.gray[900]},border:{light:v.colors.gray[800],dark:v.colors.gray[200]},outline:{light:v.colors.gray[900],dark:v.colors.gray[100]},outlineHover:{light:v.colors.gray[800],dark:v.colors.gray[200]}},secondary:{bg:{light:v.colors.gray[100],dark:v.colors.gray[100]},hover:{light:v.colors.gray[200],dark:v.colors.gray[200]},active:{light:v.colors.gray[300],dark:v.colors.gray[300]},text:{light:v.colors.gray[900],dark:v.colors.gray[900]},border:{light:v.colors.gray[300],dark:v.colors.gray[300]},outline:{light:v.colors.gray[700],dark:v.colors.gray[300]},outlineHover:{light:v.colors.gray[800],dark:v.colors.gray[200]}},info:{bg:{light:v.colors.blue[500],dark:v.colors.blue[500]},hover:{light:v.colors.blue[600],dark:v.colors.blue[600]},active:{light:v.colors.blue[700],dark:v.colors.blue[700]},text:{light:"#fff",dark:"#fff"},border:{light:v.colors.blue[500],dark:v.colors.blue[500]},outline:{light:v.colors.blue[700],dark:v.colors.blue[300]},outlineHover:{light:v.colors.blue[600],dark:v.colors.blue[200]}},warning:{bg:{light:v.colors.yellow[500],dark:v.colors.yellow[500]},hover:{light:v.colors.yellow[600],dark:v.colors.yellow[600]},active:{light:v.colors.yellow[700],dark:v.colors.yellow[700]},text:{light:"#fff",dark:"#fff"},border:{light:v.colors.yellow[500],dark:v.colors.yellow[500]},outline:{light:v.colors.yellow[700],dark:v.colors.yellow[300]},outlineHover:{light:v.colors.yellow[600],dark:v.colors.yellow[200]}},danger:{bg:{light:v.colors.red[500],dark:v.colors.red[500]},hover:{light:v.colors.red[600],dark:v.colors.red[600]},active:{light:v.colors.red[700],dark:v.colors.red[700]},text:{light:"#fff",dark:"#fff"},border:{light:v.colors.red[500],dark:v.colors.red[500]},outline:{light:v.colors.red[700],dark:v.colors.red[300]},outlineHover:{light:v.colors.red[600],dark:v.colors.red[200]}},success:{bg:{light:v.colors.green[500],dark:v.colors.green[500]},hover:{light:v.colors.green[600],dark:v.colors.green[600]},active:{light:v.colors.green[700],dark:v.colors.green[700]},text:{light:"#fff",dark:"#fff"},border:{light:v.colors.green[500],dark:v.colors.green[500]},outline:{light:v.colors.green[700],dark:v.colors.green[300]},outlineHover:{light:v.colors.green[600],dark:v.colors.green[200]}}},$=Le,lt=t=>{const{colors:e,font:i,size:o,border:c}=v,{fontFamily:s}=i,a=(l,g)=>t==="light"?l:g,n=l=>{const g=kr[l],f=a(g.outline.light,g.outline.dark),w=a(g.outlineHover.light,g.outlineHover.dark),m=a(g.bg.light,g.bg.dark),y=a(g.hover.light,g.hover.dark),x=a(g.active.light,g.active.dark),S=a(g.text.light,g.text.dark),E=a(g.border.light,g.border.dark);return{ghost:$`
        background: transparent;
        color: ${f};
        border-color: transparent;
        &:hover {
          background: ${a(e.gray[100],e.darkGray[800])};
          color: ${w};
        }
        &:active {
          background: ${a(e.gray[200],e.darkGray[700])};
          color: ${w};
        }
      `,outline:$`
        background: transparent;
        color: ${f};
        border-color: ${f};
        &:hover {
          background: ${a(e.gray[50],e.darkGray[800])};
          color: ${w};
          border-color: ${w};
        }
        &:active {
          background: ${a(e.gray[100],e.darkGray[700])};
          color: ${w};
          border-color: ${w};
        }
      `,solid:$`
        background: ${m};
        color: ${S};
        border-color: ${E};
        &:hover {
          background: ${y};
          border-color: ${y};
          box-shadow: ${a(v.shadow.xs("rgb(0 0 0 / 0.12)"),v.shadow.xs("rgb(0 0 0 / 0.5)"))};
        }
        &:active {
          background: ${x};
          border-color: ${x};
          box-shadow: ${a(v.shadow.inner("rgb(0 0 0 / 0.2)"),v.shadow.inner("rgb(0 0 0 / 0.6)"))};
        }
      `}},r={primary:n("primary"),secondary:n("secondary"),info:n("info"),warning:n("warning"),danger:n("danger"),success:n("success")},d=320;return{logo:$`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${o[12]};
      height: ${o[12]};
      font-family: ${s.sans};
      gap: ${v.size[.5]};
      padding: 0;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:$`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:$`
      width: 100%;
    `,selectLabel:$`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${a(e.gray[900],e.gray[100])};
      text-align: left;
    `,selectDescription:$`
      font-size: 0.8rem;
      color: ${a(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:$`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      color: ${a(e.gray[900],e.gray[100])};
      border: 1px solid ${a(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${a(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${e.gray[400]};
        box-shadow: 0 0 0 3px ${a(e.gray[200],e.gray[800])};
      }
    `,inputWrapper:$`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:$`
      width: 100%;
    `,inputLabel:$`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${a(e.gray[900],e.gray[100])};
      text-align: left;
    `,inputDescription:$`
      font-size: 0.8rem;
      color: ${a(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:$`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      color: ${a(e.gray[900],e.gray[100])};
      border: 1px solid ${a(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      font-family: ${s.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${a(e.gray[400],e.gray[500])};
      }

      &:hover {
        border-color: ${a(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${a(e.gray[400],e.gray[600])};
        box-shadow: 0 0 0 3px ${a(e.gray[200],e.gray[800])};
      }
    `,checkboxWrapper:$`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${a(e.gray[50],e.darkGray[900])};
      }
    `,checkboxContainer:$`
      width: 100%;
    `,checkboxLabelContainer:$`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:$`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${a(e.gray[300],e.gray[700])};
      border-radius: 0.25rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${a(e.gray[400],e.gray[600])};
      }

      &:checked {
        background-color: ${a(e.gray[900],e.gray[100])};
        border-color: ${a(e.gray[900],e.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${a("#fff",e.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:$`
      color: ${a(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:$`
      color: ${a(e.gray[500],e.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:$`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${v.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,variant(l,g,f){const w=r[l];return f?w.ghost:g?w.outline:w.solid}},tag:{dot:l=>$`
        width: ${v.size[1.5]};
        height: ${v.size[1.5]};
        border-radius: ${v.border.radius.full};
        background-color: ${a(v.colors[l][500],v.colors[l][500])};
      `,base:$`
        display: flex;
        gap: ${v.size[1.5]};
        box-sizing: border-box;
        height: ${v.size[6.5]};
        background: ${a(e.gray[50],e.darkGray[500])};
        color: ${a(e.gray[700],e.gray[300])};
        border-radius: ${v.border.radius.sm};
        font-size: ${i.size.sm};
        padding: ${v.size[1]};
        padding-left: ${v.size[1.5]};
        align-items: center;
        font-weight: ${i.weight.medium};
        border: ${a("1px solid "+e.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${a(e.blue[700],e.blue[800])};
        }
      `,label:$`
        font-size: ${i.size.xs};
      `,count:$`
        font-size: ${i.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${a(e.gray[500],e.gray[400])};
        background-color: ${a(e.gray[200],e.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${v.size[4.5]};
      `},tree:{info:$`
        color: ${a(e.gray[500],e.gray[500])};
        font-size: ${i.size.xs};
        margin-right: ${o[1]};
      `,actionButton:$`
        background-color: transparent;
        color: ${a(e.gray[500],e.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${o[3]};
        height: ${o[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${a(e.gray[600],e.gray[400])};
        }

        &:focus-visible {
          border-radius: ${c.radius.xs};
          outline: 2px solid ${a(e.blue[700],e.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:$`
        position: relative;
      `,expander:$`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${a(e.blue[400],e.blue[300])};
        }
        & svg {
          width: ${o[3]};
          height: ${o[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:l=>$`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${l?`border-left: 1px solid ${a(e.blue[400],e.blue[300])};`:""}
      `,collapsible:$`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${a(e.gray[100],e.darkGray[700])};
          border-radius: ${v.border.radius.sm};
          padding: 0 ${v.size[1]};
        }
      `,actions:$`
        display: inline-flex;
        margin-left: ${o[2]};
        gap: ${o[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:$`
        color: ${a(e.gray[500],e.gray[400])};
      `,valueFunction:$`
        color: ${a(e.cyan[500],e.cyan[400])};
      `,valueString:$`
        color: ${a(e.green[500],e.green[400])};
      `,valueNumber:$`
        color: ${a(e.yellow[500],e.yellow[400])};
      `,valueBoolean:$`
        color: ${a(e.pink[500],e.pink[400])};
      `,valueNull:$`
        color: ${a(e.gray[500],e.gray[400])};
        font-style: italic;
      `,valueKey:$`
        color: ${a(e.blue[400],e.blue[300])};
      `,valueBraces:$`
        color: ${e.gray[500]};
      `,valueContainer:l=>$`
        display: block;
        margin-left: ${l?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:$`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${v.size[2]} ${v.size[2.5]};
        gap: ${v.size[2.5]};
        border-bottom: ${a(e.gray[300],e.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:$`
        display: flex;
        gap: ${v.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${o[.5]};
          flex-direction: column;
        }
      `,logo:$`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${v.size[.5]};
        padding: 0;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${e.blue[800]};
        }
      `,tanstackLogo:$`
        font-size: ${i.size.md};
        font-weight: ${i.weight.bold};
        line-height: ${i.lineHeight.xs};
        white-space: nowrap;
        color: ${a(e.gray[700],e.gray[300])};
      `,flavorLogo:(l,g)=>$`
        font-weight: ${i.weight.semibold};
        font-size: ${i.size.xs};
        background: linear-gradient(to right, ${a(l,g)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:$`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${a(e.gray[50],e.darkGray[800])};
        border: 1px solid ${a(e.gray[200],e.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:$`
        font-size: 1rem;
        font-weight: 600;
        color: ${a(e.gray[900],e.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${a(e.gray[200],e.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:$`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${a(e.gray[700],e.gray[400])};
      `,description:$`
        color: ${a(e.gray[500],e.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:l=>$`
        padding: ${l?v.size[3]:0};
        background: ${a(e.gray[50],e.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function ie(){const{theme:t}=pr(),[e,i]=F(lt(t()));return N(()=>{i(lt(t()))}),e}var wr=b("<div><label><input type=checkbox><div>"),st=b("<span>");function ke(t){const e=ie(),[i,o]=F(t.checked||!1),c=s=>{const a=s.target.checked;o(a),t.onChange?.(a)};return(()=>{var s=wr(),a=s.firstChild,n=a.firstChild,r=n.nextSibling;return n.$$input=c,h(r,(()=>{var d=L(()=>!!t.label);return()=>d()&&(()=>{var l=st();return h(l,()=>t.label),k(()=>u(l,e().checkboxLabel)),l})()})(),null),h(r,(()=>{var d=L(()=>!!t.description);return()=>d()&&(()=>{var l=st();return h(l,()=>t.description),k(()=>u(l,e().checkboxDescription)),l})()})(),null),k(d=>{var l=e().checkboxContainer,g=e().checkboxWrapper,f=e().checkbox,w=e().checkboxLabelContainer;return l!==d.e&&u(s,d.e=l),g!==d.t&&u(a,d.t=g),f!==d.a&&u(n,d.a=f),w!==d.o&&u(r,d.o=w),d},{e:void 0,t:void 0,a:void 0,o:void 0}),k(()=>n.checked=i()),s})()}Y(["input"]);var xr=b("<div><div><input>"),Cr=b("<label>"),Sr=b("<p>");function Ht(t){const e=ie(),[i,o]=F(t.value||""),c=s=>{const a=s.target.value;o(n=>n!==a?a:n),t.onChange?.(a)};return(()=>{var s=xr(),a=s.firstChild,n=a.firstChild;return h(a,(()=>{var r=L(()=>!!t.label);return()=>r()&&(()=>{var d=Cr();return h(d,()=>t.label),k(()=>u(d,e().inputLabel)),d})()})(),n),h(a,(()=>{var r=L(()=>!!t.description);return()=>r()&&(()=>{var d=Sr();return h(d,()=>t.description),k(()=>u(d,e().inputDescription)),d})()})(),n),n.$$input=c,k(r=>{var d=e().inputContainer,l=e().inputWrapper,g=t.type||"text",f=e().input,w=t.placeholder;return d!==r.e&&u(s,r.e=d),l!==r.t&&u(a,r.t=l),g!==r.a&&W(n,"type",r.a=g),f!==r.o&&u(n,r.o=f),w!==r.i&&W(n,"placeholder",r.i=w),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),k(()=>n.value=i()),s})()}Y(["input"]);var Mr=b("<div><div><select>"),$r=b("<label>"),zr=b("<p>"),Er=b("<option>");function He(t){const e=ie(),[i,o]=F(t.value||t.options[0]?.value),c=s=>{const a=s.target.value;o(n=>n!==a?a:n),t.onChange?.(a)};return(()=>{var s=Mr(),a=s.firstChild,n=a.firstChild;return h(a,(()=>{var r=L(()=>!!t.label);return()=>r()&&(()=>{var d=$r();return h(d,()=>t.label),k(()=>u(d,e().selectLabel)),d})()})(),n),h(a,(()=>{var r=L(()=>!!t.description);return()=>r()&&(()=>{var d=zr();return h(d,()=>t.description),k(()=>u(d,e().selectDescription)),d})()})(),n),n.$$input=c,h(n,()=>t.options.map(r=>(()=>{var d=Er();return h(d,()=>r.label),k(()=>d.value=r.value),d})())),k(r=>{var d=e().selectContainer,l=e().selectWrapper,g=e().select;return d!==r.e&&u(s,r.e=d),l!==r.t&&u(a,r.t=l),g!==r.a&&u(n,r.a=g),r},{e:void 0,t:void 0,a:void 0}),k(()=>n.value=i()),s})()}Y(["input"]);var Ar=b('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">'),Fr=b('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">'),Tr=b('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">'),Br=b('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">'),Pr=b('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>'),Ir=b('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>'),Lr=b('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>'),Dr=b('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),Hr=b('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Nr=b('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Or=b('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Rr=b('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ur=b('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Qr=b('<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),qr=b('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),jr=b('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Vr=b('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>');function Wr(){return Ar()}function Yr(){return Fr()}function Gr(){return Tr()}function Kr(){return Br()}function Zr(){return Pr()}function Jr(){return Ir()}function Xr(){return Lr()}function _r(){return Dr()}function en(){return Hr()}function tn(){return Nr()}function rn(){return Or()}function nn(){return Rr()}function an(){return Ur()}function on(){return Qr()}function ln(){return qr()}function sn(){return jr()}function cn(){return Vr()}var dn=b("<button>");function Nt(t){const e=ie(),i=O(()=>{const o=t.variant||"primary";return q(e().button.base,e().button.variant(o,t.outline,t.ghost),t.className)});return(()=>{var o=dn();return xe(o,we(t,{get class(){return i()}}),!1,!0),h(o,()=>t.children),o})()}var gn=b("<div>"),Ot=({className:t,children:e,class:i,withPadding:o})=>{const c=ie();return(()=>{var s=gn();return h(s,e),k(()=>u(s,q(c().mainPanel.panel(!!o),t,i))),s})()},un=b("<section>"),pn=b("<h3>"),hn=b("<p>"),fn=b("<span>"),ve=({children:t,...e})=>{const i=ie();return(()=>{var o=un();return xe(o,we({get class(){return q(i().section.main,e.class)}},e),!1,!0),h(o,t),o})()},Ce=({children:t,...e})=>{const i=ie();return(()=>{var o=pn();return xe(o,we({get class(){return q(i().section.title,e.class)}},e),!1,!0),h(o,t),o})()},me=({children:t,...e})=>{const i=ie();return(()=>{var o=hn();return xe(o,we({get class(){return q(i().section.description,e.class)}},e),!1,!0),h(o,t),o})()},Se=({children:t,...e})=>{const i=ie();return(()=>{var o=fn();return xe(o,we({get class(){return q(i().section.icon,e.class)}},e),!1,!0),h(o,t),o})()},pe=new WeakMap,Z=new WeakMap,V=new WeakMap,Ne=new WeakMap,le=new WeakMap,ye=new WeakMap,se=new WeakMap,Me=new WeakMap,$e=new WeakMap,ct=new WeakMap,he=new WeakMap,ze=new WeakMap,ce=new WeakMap,Oe=new WeakMap,Ee=new WeakMap,dt=new WeakMap,vn=class{constructor({pluginId:t,debug:e=!1,enabled:i=!0,reconnectEveryMs:o=300}){Q(this,pe,!0),Q(this,Z,void 0),Q(this,V,void 0),Q(this,Ne,void 0),Q(this,le,void 0),Q(this,ye,void 0),Q(this,se,void 0),Q(this,Me,void 0),Q(this,$e,0),Q(this,ct,5),Q(this,he,!1),Q(this,ze,!1),Q(this,ce,null),Q(this,Oe,()=>{this.debugLog("Connected to event bus"),H(ye,this,!0),H(he,this,!1),this.debugLog("Emitting queued events",M(le,this)),M(le,this).forEach(c=>this.emitEventToBus(c)),H(le,this,[]),this.stopConnectLoop(),M(V,this).call(this).removeEventListener("tanstack-connect-success",M(Oe,this))}),Q(this,Ee,()=>{if(M($e,this)<M(ct,this)){var c;H($e,this,(c=M($e,this),c++,c)),this.dispatchCustomEvent("tanstack-connect",{});return}M(V,this).call(this).removeEventListener("tanstack-connect",M(Ee,this)),H(ze,this,!0),this.debugLog("Max retries reached, giving up on connection"),this.stopConnectLoop()}),Q(this,dt,()=>{M(he,this)||(H(he,this,!0),M(V,this).call(this).addEventListener("tanstack-connect-success",M(Oe,this)),M(Ee,this).call(this))}),H(Z,this,t),H(pe,this,i),H(V,this,this.getGlobalTarget),H(Ne,this,e),this.debugLog(" Initializing event subscription for plugin",M(Z,this)),H(le,this,[]),H(ye,this,!1),H(ze,this,!1),H(se,this,null),H(Me,this,o)}startConnectLoop(){M(se,this)!==null||M(ye,this)||(this.debugLog(`Starting connect loop (every ${M(Me,this)}ms)`),H(se,this,setInterval(M(Ee,this),M(Me,this))))}stopConnectLoop(){H(he,this,!1),M(se,this)!==null&&(clearInterval(M(se,this)),H(se,this,null),H(le,this,[]),this.debugLog("Stopped connect loop"))}debugLog(...t){M(Ne,this)&&console.log(`🌴 [tanstack-devtools:${M(Z,this)}-plugin]`,...t)}getGlobalTarget(){if(typeof globalThis<"u"&&globalThis.__TANSTACK_EVENT_TARGET__)return this.debugLog("Using global event target"),globalThis.__TANSTACK_EVENT_TARGET__;if(typeof window<"u"&&typeof window.addEventListener<"u")return this.debugLog("Using window as event target"),window;const t=typeof EventTarget<"u"?new EventTarget:void 0;return typeof t>"u"||typeof t.addEventListener>"u"?(this.debugLog("No event mechanism available, running in non-web environment"),{addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>!1}):(this.debugLog("Using new EventTarget as fallback"),t)}getPluginId(){return M(Z,this)}dispatchCustomEventShim(t,e){try{const i=new Event(t,{detail:e});M(V,this).call(this).dispatchEvent(i)}catch{this.debugLog("Failed to dispatch shim event")}}dispatchCustomEvent(t,e){try{M(V,this).call(this).dispatchEvent(new CustomEvent(t,{detail:e}))}catch{this.dispatchCustomEventShim(t,e)}}emitEventToBus(t){this.debugLog("Emitting event to client bus",t),this.dispatchCustomEvent("tanstack-dispatch-event",t)}createEventPayload(t,e){return{type:`${M(Z,this)}:${t}`,payload:e,pluginId:M(Z,this)}}emit(t,e){if(!M(pe,this)){this.debugLog("Event bus client is disabled, not emitting event",t,e);return}if(M(ce,this)&&(this.debugLog("Emitting event to internal event target",t,e),M(ce,this).dispatchEvent(new CustomEvent(`${M(Z,this)}:${t}`,{detail:this.createEventPayload(t,e)}))),M(ze,this)){this.debugLog("Previously failed to connect, not emitting to bus");return}if(!M(ye,this)){this.debugLog("Bus not available, will be pushed as soon as connected"),M(le,this).push(this.createEventPayload(t,e)),typeof CustomEvent<"u"&&!M(he,this)&&(M(dt,this).call(this),this.startConnectLoop());return}return this.emitEventToBus(this.createEventPayload(t,e))}on(t,e,i){const o=i?.withEventTarget??!1,c=`${M(Z,this)}:${t}`;if(o&&(M(ce,this)||H(ce,this,new EventTarget),M(ce,this).addEventListener(c,a=>{e(a.detail)})),!M(pe,this))return this.debugLog("Event bus client is disabled, not registering event",c),()=>{};const s=a=>{this.debugLog("Received event from bus",a.detail),e(a.detail)};return M(V,this).call(this).addEventListener(c,s),this.debugLog("Registered event to bus",c),()=>{o&&M(ce,this)?.removeEventListener(c,s),M(V,this).call(this).removeEventListener(c,s)}}onAll(t){if(!M(pe,this))return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const e=i=>{const o=i.detail;t(o)};return M(V,this).call(this).addEventListener("tanstack-devtools-global",e),()=>M(V,this).call(this).removeEventListener("tanstack-devtools-global",e)}onAllPluginEvents(t){if(!M(pe,this))return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const e=i=>{const o=i.detail;M(Z,this)&&o.pluginId!==M(Z,this)||t(o)};return M(V,this).call(this).addEventListener("tanstack-devtools-global",e),()=>M(V,this).call(this).removeEventListener("tanstack-devtools-global",e)}},mn=class extends vn{constructor(){super({pluginId:"tanstack-devtools-core"})}},te=new mn;function bn(t){const e={...t},i={...t},o={},c=a=>{let n=o[a];if(!n){if(!_t())return e[a];o[a]=n=F(e[a],{internal:!0}),delete e[a]}return n[0]()};for(const a in t)Object.defineProperty(i,a,{get:()=>c(a),enumerable:!0});const s=(a,n)=>{const r=o[a];if(r)return r[1](n);a in e&&(e[a]=nt(n,e[a]))};return[i,(a,n)=>{if(sr(a)){const r=tr(()=>Object.entries(nt(a,i)));er(()=>{for(const[d,l]of r)s(d,()=>l)})}else s(a,n);return i}]}var Rt={width:null,height:null};function Re(t){if(!t)return{...Rt};const{width:e,height:i}=t.getBoundingClientRect();return{width:e,height:i}}function yn(t){const e=typeof t=="function",[i,o]=bn(Jt.context||e?Rt:Re(t)),c=new ResizeObserver(([s])=>o(Re(s.target)));return re(()=>c.disconnect()),e?N(()=>{const s=t();s&&(o(Re(s)),c.observe(s),re(()=>c.unobserve(s)))}):(c.observe(t),re(()=>c.unobserve(t))),i}var kn=t=>{const[e,i]=F(!1),[o,c]=F(!1),s=O(()=>e()||o());let a=null;return re(()=>{a&&clearTimeout(a)}),{expanded:s,setForceExpand:c,hoverUtils:{enter:()=>{a&&(clearTimeout(a),a=null),i(!0)},leave:()=>{a=setTimeout(()=>{i(!1)},t.animationMs)}},animationMs:t.animationMs}},Ut=Ft(void 0),wn=t=>{const e=kn({animationMs:t.animationMs});return p(Ut.Provider,{value:e,get children(){return t.children}})};function Ge(){const t=qe(Ut);if(t===void 0)throw new Error("useDrawContext must be used within a DrawClientProvider");return t}var Ke=()=>{const t=qe(ir);if(t===void 0)throw new Error("useDevtoolsShellContext must be used within a ShellContextProvider");return t};function Ze(){const{settings:t,setSettings:e}=ue();return{theme:O(()=>t().theme),setTheme:i=>e({theme:i})}}var Qt=()=>{const{store:t,setStore:e}=Ke(),{setForceExpand:i}=Ge(),o=O(()=>t.plugins),c=O(()=>t.state.activePlugins);return N(()=>{c().length===0?i(!0):i(!1)}),{plugins:o,toggleActivePlugins:a=>{e(n=>{const r=n.state.activePlugins.includes(a),d=t.plugins?.find(g=>g.id===a);d?.destroy&&r&&d.destroy(a);const l=r?n.state.activePlugins.filter(g=>g!==a):[...n.state.activePlugins,a];return l.length>3?n:{...n,state:{...n.state,activePlugins:l}}})},activePlugins:c}},De=()=>{const{store:t,setStore:e}=Ke();return{state:O(()=>t.state),setState:c=>{e(s=>({...s,state:{...s.state,...c}}))}}},ue=()=>{const{store:t,setStore:e}=Ke(),i=O(()=>t.settings);return{setSettings:c=>{e(s=>({...s,settings:{...s.settings,...c}}))},settings:i}},xn=()=>{const{state:t,setState:e}=De();return{persistOpen:O(()=>t().persistOpen),setPersistOpen:c=>{e({persistOpen:c})}}},qt=()=>{const{state:t,setState:e}=De();return{height:O(()=>t().height),setHeight:c=>{e({height:c})}}},jt=(t,e=!0)=>{e?t.setAttribute("tabIndex","-1"):t.removeAttribute("tabIndex");for(const i of t.children)jt(i,e)},Cn=t=>{N(()=>{const e=document.getElementById(Ve);e&&jt(e,!t())})},Sn=t=>t.includes("CtrlOrMeta")?[t.map(e=>e==="CtrlOrMeta"?"Control":e),t.map(e=>e==="CtrlOrMeta"?"Meta":e)]:[t],Vt=t=>Sn(t).flatMap(e=>{const i=e.filter(c=>Je.includes(c)),o=e.filter(c=>!Je.includes(c));return i.length===0?[o]:rr(i).map(c=>[...c,...o])}),Mn=(t,e)=>{const i=Vt(e),o=t.map(c=>c.toUpperCase());return i.some(c=>c.every(s=>o.includes(String(s).toUpperCase()))&&o.every(s=>c.map(a=>String(a).toUpperCase()).includes(s)))},$n={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)",xl:"calc(var(--tsrd-font-size) * 1.25)","2xl":"calc(var(--tsrd-font-size) * 1.5)","3xl":"calc(var(--tsrd-font-size) * 1.875)","4xl":"calc(var(--tsrd-font-size) * 2.25)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.75)","7xl":"calc(var(--tsrd-font-size) * 4.5)","8xl":"calc(var(--tsrd-font-size) * 6)","9xl":"calc(var(--tsrd-font-size) * 8)"},lineHeight:{"3xs":"calc(var(--tsrd-font-size) * 0.75)","2xs":"calc(var(--tsrd-font-size) * 0.875)",xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)",md:"calc(var(--tsrd-font-size) * 1.5)",lg:"calc(var(--tsrd-font-size) * 1.75)",xl:"calc(var(--tsrd-font-size) * 2)","2xl":"calc(var(--tsrd-font-size) * 2.25)","3xl":"calc(var(--tsrd-font-size) * 2.5)","4xl":"calc(var(--tsrd-font-size) * 2.75)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.25)","7xl":"calc(var(--tsrd-font-size) * 3.5)","8xl":"calc(var(--tsrd-font-size) * 3.75)","9xl":"calc(var(--tsrd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)",xl:"calc(var(--tsrd-font-size) * 0.75)","2xl":"calc(var(--tsrd-font-size) * 1)","3xl":"calc(var(--tsrd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsrd-font-size) * 0.0625)",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",4.5:"calc(var(--tsrd-font-size) * 1.125)",5:"calc(var(--tsrd-font-size) * 1.25)",5.5:"calc(var(--tsrd-font-size) * 1.375)",6:"calc(var(--tsrd-font-size) * 1.5)",6.5:"calc(var(--tsrd-font-size) * 1.625)",7:"calc(var(--tsrd-font-size) * 1.75)",8:"calc(var(--tsrd-font-size) * 2)",9:"calc(var(--tsrd-font-size) * 2.25)",10:"calc(var(--tsrd-font-size) * 2.5)",11:"calc(var(--tsrd-font-size) * 2.75)",12:"calc(var(--tsrd-font-size) * 3)",14:"calc(var(--tsrd-font-size) * 3.5)",16:"calc(var(--tsrd-font-size) * 4)",20:"calc(var(--tsrd-font-size) * 5)",24:"calc(var(--tsrd-font-size) * 6)",28:"calc(var(--tsrd-font-size) * 7)",32:"calc(var(--tsrd-font-size) * 8)",36:"calc(var(--tsrd-font-size) * 9)",40:"calc(var(--tsrd-font-size) * 10)",44:"calc(var(--tsrd-font-size) * 11)",48:"calc(var(--tsrd-font-size) * 12)",52:"calc(var(--tsrd-font-size) * 13)",56:"calc(var(--tsrd-font-size) * 14)",60:"calc(var(--tsrd-font-size) * 15)",64:"calc(var(--tsrd-font-size) * 16)",72:"calc(var(--tsrd-font-size) * 18)",80:"calc(var(--tsrd-font-size) * 20)",96:"calc(var(--tsrd-font-size) * 24)"},shadow:{xs:(t="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(t="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${t}, 0 1px 2px -1px ${t}`,md:(t="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${t}, 0 2px 4px -2px ${t}`,lg:(t="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${t}, 0 4px 6px -4px ${t}`,xl:(t="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${t}, 0 8px 10px -6px ${t}`,"2xl":(t="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${t}`,inner:(t="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${t}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},gt=t=>`${(t/1e3).toFixed(2)}s`,ut=ge`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,zn=ge`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,En=ge`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,An=ge`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Fn=ge`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,Tn=ge`
  to {
    transform: rotate(360deg);
  }
`,pt=ge`
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1) rotate(10deg);
  }
`,ht=t=>{const{colors:e,font:i,size:o,border:c}=$n,{fontFamily:s,size:a}=i,n=Le,r=(d,l)=>t==="light"?d:l;return{seoTabContainer:n`
      padding: 0;
      margin: 0 auto;
      background: ${r(e.white,e.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:n`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${r(e.gray[200],e.gray[800])};
    `,seoTabSection:n`
      padding: 1.5rem;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoSubNav:n`
      display: flex;
      flex-direction: row;
      gap: 0;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${r(e.gray[200],e.gray[800])};
    `,seoSubNavLabel:n`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: ${r(e.gray[600],e.gray[400])};
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      &:hover {
        color: ${r(e.gray[800],e.gray[200])};
      }
    `,seoSubNavLabelActive:n`
      color: ${r(e.gray[900],e.gray[100])};
      border-bottom-color: ${r(e.gray[900],e.gray[100])};
    `,seoPreviewSection:n`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:n`
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${r(e.white,e.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${r("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:n`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${r(e.gray[700],e.gray[300])};
    `,seoPreviewImage:n`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${r("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:n`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${r(e.gray[900],e.gray[100])};
    `,seoPreviewDesc:n`
      color: ${r(e.gray[600],e.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:n`
      color: ${r(e.gray[500],e.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:n`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${r(e.red[500],e.red[400])};
    `,seoMissingTagsList:n`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:n`
      background: ${r(e.red[100],e.red[500]+"22")};
      color: ${r(e.red[700],e.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:n`
      color: ${r(e.green[700],e.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,serpPreviewBlock:n`
      margin-bottom: 1.5rem;
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 10px;
      padding: 1rem;
    `,serpPreviewLabel:n`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: ${r(e.gray[700],e.gray[300])};
    `,serpSnippet:n`
      border: 1px solid ${r(e.gray[100],e.gray[800])};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${r(e.white,e.darkGray[900])};
      max-width: 600px;
      font-family: ${s.sans};
      box-shadow: 0 1px 2px ${r("rgba(0,0,0,0.04)","rgba(0,0,0,0.08)")};
    `,serpSnippetMobile:n`
      border: 1px solid ${r(e.gray[100],e.gray[800])};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${r(e.white,e.darkGray[900])};
      max-width: 380px;
      font-family: ${s.sans};
      box-shadow: 0 1px 2px ${r("rgba(0,0,0,0.04)","rgba(0,0,0,0.08)")};
    `,serpSnippetDescMobile:n`
      font-size: 0.875rem;
      color: ${r(e.gray[700],e.gray[300])};
      margin: 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    `,serpSnippetTopRow:n`
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    `,serpSnippetFavicon:n`
      width: 28px;
      height: 28px;
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,serpSnippetDefaultFavicon:n`
      width: 28px;
      height: 28px;
      background-color: ${r(e.gray[200],e.gray[800])};
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,serpSnippetSiteColumn:n`
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: 0;
    `,serpSnippetSiteName:n`
      font-size: 0.875rem;
      color: ${r(e.gray[900],e.gray[100])};
      line-height: 1.4;
      margin: 0;
    `,serpSnippetSiteUrl:n`
      font-size: 0.75rem;
      color: ${r(e.gray[500],e.gray[500])};
      line-height: 1.4;
      margin: 0;
    `,serpSnippetTitle:n`
      font-size: 1.25rem;
      font-weight: 400;
      color: ${r("#1a0dab","#8ab4f8")};
      margin: 0 0 4px 0;
      line-height: 1.3;
    `,serpSnippetDesc:n`
      font-size: 0.875rem;
      color: ${r(e.gray[700],e.gray[300])};
      margin: 0;
      line-height: 1.5;
    `,serpMeasureHidden:n`
      position: absolute;
      left: -9999px;
      top: 0;
      visibility: hidden;
      pointer-events: none;
      box-sizing: border-box;
    `,serpMeasureHiddenMobile:n`
      position: absolute;
      left: -9999px;
      top: 0;
      width: 340px;
      visibility: hidden;
      pointer-events: none;
      font-size: 0.875rem;
      line-height: 1.5;
    `,serpReportSection:n`
      margin-top: 1rem;
      font-size: 0.875rem;
      color: ${r(e.gray[700],e.gray[300])};
    `,serpErrorList:n`
      margin: 4px 0 0 0;
      padding-left: 1.25rem;
      list-style-type: disc;
    `,serpReportItem:n`
      margin-top: 0.25rem;
      color: ${r(e.red[700],e.red[400])};
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(d,l)=>n`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${d}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${l?"":"max-height: 90%;"}
      border-top: 1px solid ${r(e.gray[200],e.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:d=>n`
        visibility: ${d?"visible":"hidden"};
        height: ${d?"auto":"0"};
      `,devtoolsPanelContainerResizing:d=>d()?n`
          transition: none;
        `:n`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(d,l,g)=>d?n`
          pointer-events: auto;
          transform: translateY(0);
        `:n`
        pointer-events: none;
        transform: translateY(${g==="top"?-l:l}px);
      `,devtoolsPanel:n`
      display: flex;
      font-size: ${a.sm};
      font-family: ${s.sans};
      background-color: ${r(e.white,e.darkGray[700])};
      color: ${r(e.gray[900],e.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:d=>n`
      position: absolute;
      left: 0;
      ${d==="bottom"?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${r(e.gray[400],e.gray[500])};
      }
    `,mainCloseBtn:n`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${i.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${c.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${r(e.black,e.black)};
      }
    `,mainCloseBtnPosition:d=>n`
        ${d==="top-left"?`top: ${o[2]}; left: ${o[2]};`:""}
        ${d==="top-right"?`top: ${o[2]}; right: ${o[2]};`:""}
        ${d==="middle-left"?`top: 50%; left: ${o[2]}; transform: translateY(-50%);`:""}
        ${d==="middle-right"?`top: 50%; right: ${o[2]}; transform: translateY(-50%);`:""}
        ${d==="bottom-left"?`bottom: ${o[2]}; left: ${o[2]};`:""}
        ${d==="bottom-right"?`bottom: ${o[2]}; right: ${o[2]};`:""}
      `,mainCloseBtnAnimation:(d,l)=>d?n`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:l?n`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:n`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:n`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${r(e.gray[50],e.darkGray[900])};
      border-right: 1px solid ${r(e.gray[200],e.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${o[10]};
    `,tab:n`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${o[10]};
      cursor: pointer;
      font-size: ${a.sm};
      font-family: ${s.sans};
      color: ${r(e.gray[600],e.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.active {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${r(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${r(e.green[700],e.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${r(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${r(e.red[700],e.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${e.gray[300]};
      }
      & > svg {
        flex-shrink: 0;
      }
    `,tabContent:n`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:n`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:d=>n`
      width: ${d?o[48]:0};
      height: 100%;
      background-color: ${r(e.white,e.darkGray[900])};
      box-shadow: none;
      ${d?`border-right: 1px solid ${r(e.gray[200],e.gray[800])};`:""}
    `,pluginsTabDrawExpanded:n`
      width: ${o[48]};
      border-right: 1px solid ${r(e.gray[200],e.gray[800])};
    `,pluginsTabDrawTransition:d=>n`
        transition: width ${gt(d)} ease;
      `,pluginsTabSidebar:d=>n`
      width: ${o[48]};
      overflow-y: auto;
      transform: ${d?"translateX(0)":"translateX(-100%)"};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:d=>n`
        transition: transform ${gt(d)} ease;
      `,pluginsList:n`
      flex: 1;
      overflow-y: auto;
    `,pluginName:n`
      font-size: ${a.xs};
      font-family: ${s.sans};
      color: ${r(e.gray[600],e.gray[400])};
      padding: ${o[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        padding: ${o[2]};
      }
      &.active {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.active:hover {
        background-color: ${r(e.gray[200],e.gray[700])};
      }
    `,pluginsTabContent:n`
      width: 100%;
      height: 100%;

      & > * > * {
        min-width: 0;
        min-height: 0;
        height: 100%;
      }

      &:not(:last-child) {
        border-right: 5px solid ${r(e.purple[200],e.purple[800])};
      }
    `,settingsGroup:n`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:n`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${r(e.gray[300],e.gray[600])};
      background-color: ${r(e.gray[50],e.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:n`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:n`
      display: flex;
      gap: 0.5rem;
    `,settingsStack:n`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,noPluginsFallback:n`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${r(e.gray[50],e.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:n`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:n`
      width: 64px;
      height: 64px;
      color: ${r(e.gray[400],e.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:n`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:n`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:n`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${r(e.white,e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:n`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:n`
      font-size: 0.875rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:n`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${r(e.gray[50],e.darkGray[900])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${r(e.gray[300],e.gray[600])};
        background: ${r(e.gray[100],e.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:n`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:n`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:n`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:n`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${r(e.green[600],e.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:n`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:n`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${r(e.red[600],e.red[400])};
    `,noPluginsEmptyState:n`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${r(e.white,e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:n`
      font-size: 0.875rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:n`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:n`
      font-size: 0.875rem;
      color: ${r(e.gray[700],e.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${r(e.gray[900],e.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:n`
      color: ${r(e.gray[400],e.gray[600])};
    `,pluginMarketplace:n`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${r("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1a1d23 0%, #13161a 100%)")};
      animation: ${ut} 0.3s ease;
    `,pluginMarketplaceHeader:n`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${r(e.gray[200],e.gray[700])};
    `,pluginMarketplaceTitleRow:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:n`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:n`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:n`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${r(e.gray[400],e.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:n`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${r(e.gray[50],e.darkGray[900])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${r(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-family: ${s.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${r(e.gray[400],e.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${r(e.blue[500],e.blue[400])};
        background: ${r(e.white,e.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${r("rgba(59, 130, 246, 0.1)","rgba(96, 165, 250, 0.1)")};
      }
    `,pluginMarketplaceFilters:n`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:n`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:n`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${r(e.white,e.darkGray[700])};
      border: 2px solid ${r(e.gray[300],e.gray[600])};
      border-radius: 0.375rem;
      color: ${r(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[600])};
        border-color: ${r(e.gray[400],e.gray[500])};
        color: ${r(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:n`
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")} !important;
      border-color: ${r("#2563eb","#3b82f6")} !important;
      color: white !important;

      &:hover {
        background: ${r("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")} !important;
        border-color: ${r("#1d4ed8","#2563eb")} !important;
      }
    `,pluginMarketplaceSettingsButton:n`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${r(e.gray[100],e.darkGray[800])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${r(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${r(e.gray[200],e.darkGray[700])};
        border-color: ${r(e.gray[300],e.gray[600])};
        color: ${r(e.gray[900],e.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:n`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${r(e.white,e.darkGray[800])};
      border-left: 1px solid ${r(e.gray[200],e.gray[700])};
      box-shadow: -4px 0 12px ${r("rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.4)")};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: ${zn} 0.3s ease;
    `,pluginMarketplaceSettingsPanelHeader:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${r(e.gray[200],e.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:n`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:n`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${r(e.gray[600],e.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[700])};
        color: ${r(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:n`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:n`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: ${En} 0.4s ease;
    `,pluginMarketplaceCard:n`
      background: ${r(e.white,e.darkGray[800])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${r("linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)")};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${r(e.gray[400],e.gray[500])};
        box-shadow: 0 8px 24px ${r("rgba(0,0,0,0.1)","rgba(0,0,0,0.4)")};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:n`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)")};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:n`
      flex: 1;
    `,pluginMarketplaceCardTitle:n`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:n`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:n`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:n`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:n`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:n`
      color: ${r(e.green[600],e.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:n`
      color: ${r(e.red[600],e.red[400])};
    `,pluginMarketplaceCardDocsLink:n`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${r(e.blue[600],e.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${r(e.blue[700],e.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:n`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:n`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${r(e.gray[100],e.darkGray[700])};
      border: 1px solid ${r(e.gray[300],e.gray[600])};
      border-radius: 0.25rem;
      color: ${r(e.gray[700],e.gray[300])};
    `,pluginMarketplaceCardImage:n`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:n`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${r(e.green[500],e.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:n`
      border-color: ${r(e.blue[500],e.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:n`
      border-color: ${r(e.green[500],e.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${r(e.green[500],e.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:n`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${r(e.green[600],e.green[400])};
      animation: ${An} 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        animation: ${Fn} 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    `,pluginMarketplaceCardSpinner:n`
      width: 18px;
      height: 18px;
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-top-color: ${r(e.blue[600],e.blue[400])};
      border-radius: 50%;
      animation: ${Tn} 0.8s linear infinite;
    `,pluginMarketplaceCardStatusText:n`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:n`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${r(e.red[600],e.red[400])};
    `,pluginMarketplaceEmpty:n`
      padding: 3rem 2rem;
      text-align: center;
      background: ${r(e.white,e.darkGray[800])};
      border: 2px dashed ${r(e.gray[300],e.gray[700])};
      border-radius: 0.75rem;
      animation: ${ut} 0.3s ease;
    `,pluginMarketplaceEmptyText:n`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:n`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:n`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[700])};
        border-color: ${r(e.gray[300],e.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:n`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:n`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${r(e.gray[700],e.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:n`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:n`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${r(e.gray[900],e.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:n`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceFeatureBanner:n`
      margin-top: 1rem;
      padding: 1.25rem 1.5rem;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)")};
      border-radius: 0.75rem;
      border: 1px solid ${r(e.blue[400],e.blue[800])};
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `,pluginMarketplaceFeatureBannerContent:n`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,pluginMarketplaceFeatureBannerTitle:n`
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceFeatureBannerIcon:n`
      width: 24px;
      height: 24px;
      display: inline-flex;
    `,pluginMarketplaceFeatureBannerText:n`
      font-size: 0.95rem;
      color: ${r("rgba(255, 255, 255, 0.95)","rgba(255, 255, 255, 0.9)")};
      line-height: 1.5;
      margin: 0;
    `,pluginMarketplaceFeatureBannerButton:n`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: white;
      color: ${e.blue[600]};
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${r(e.gray[50],e.gray[100])};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
      }
    `,pluginMarketplaceFeatureBannerButtonIcon:n`
      width: 18px;
      height: 18px;
    `,pluginMarketplaceCardDisabled:n`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:n`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:n`
      background: ${r(e.green[100],e.green[900])};
      color: ${r(e.green[700],e.green[300])};
    `,pluginMarketplaceCardBadgeAdd:n`
      background: ${r(e.blue[100],e.blue[900])};
      color: ${r(e.blue[700],e.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:n`
      background: ${r(e.gray[100],e.gray[800])};
      color: ${r(e.gray[600],e.gray[400])};
    `,pluginMarketplaceButtonInstalled:n`
      opacity: 0.5;
    `,pluginNameAddMore:n`
      font-size: ${a.xs};
      font-family: ${s.sans};
      color: ${r(e.gray[600],e.gray[400])};
      padding: ${o[3]} ${o[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${r("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1f2937 0%, #111827 100%)")};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: ${pt} 2s ease-in-out infinite;
        }
      }

      &:hover {
        background: ${r("linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)","linear-gradient(135deg, #374151 0%, #1f2937 100%)")};
        color: ${r(e.gray[900],e.gray[100])};
        border-left-color: ${r(e.blue[500],e.blue[400])};

        h3::before {
          animation: ${pt} 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
        color: ${r(e.white,e.white)};
        border-left: 2px solid ${r(e.blue[600],e.blue[300])};
        box-shadow: 0 4px 12px
          ${r("rgba(59, 130, 246, 0.3)","rgba(96, 165, 250, 0.3)")};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${r("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")};
      }
    `}};function R(){const{theme:t}=Ze(),[e,i]=F(ht(t()));return N(()=>{i(ht(t()))}),e}var Bn="data:image/png;base64,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",Pn=b("<div>"),In=b('<button type=button aria-label="Open TanStack Devtools">'),Ln=b('<img alt="TanStack Devtools">'),Dn=t=>{const{settings:e}=ue(),[i,o]=F(),c=R(),s=O(()=>q(c().mainCloseBtn,c().mainCloseBtnPosition(e().position),c().mainCloseBtnAnimation(t.isOpen(),e().hideUntilHover)));return N(()=>{const a=e().customTrigger,n=i();a&&n&&a(n,{theme:e().theme})}),p(P,{get when(){return!e().triggerHidden},get children(){var a=In();return a.$$click=()=>t.setIsOpen(!t.isOpen()),h(a,p(P,{get when(){return e().customTrigger},get fallback(){return(()=>{var n=Ln();return W(n,"src",Bn),n})()},get children(){var n=Pn();return be(o,n),n}})),k(()=>u(a,s())),a}})};Y(["click"]);var Hn=b("<div>"),Nn=t=>{const e=R(),{height:i}=qt(),{settings:o}=ue(),c=We();return(()=>{var s=Hn();return W(s,"id",Ve),h(s,p(wn,{animationMs:400,get children(){return t.children}})),k(a=>{var n=c().pipWindow?"100vh":i()+"px",r=c().pipWindow?"100vh":i()+"px",d=q(e().devtoolsPanelContainer(o().panelLocation,!!c().pipWindow),e().devtoolsPanelContainerAnimation(t.isOpen(),i(),o().panelLocation),e().devtoolsPanelContainerVisibility(t.isOpen()),e().devtoolsPanelContainerResizing(t.isResizing));return n!==a.e&&Be(s,"height",a.e=n),r!==a.t&&Be(s,"--tsd-main-panel-height",a.t=r),d!==a.a&&u(s,a.a=d),a},{e:void 0,t:void 0,a:void 0}),s})()},ft=b("<div>"),On=t=>{const e=R(),{settings:i}=ue();return(()=>{var o=ft(),c=t.ref;return typeof c=="function"?be(c,o):t.ref=o,h(o,(()=>{var s=L(()=>!!t.handleDragStart);return()=>s()?(()=>{var a=ft();return Ie(a,"mousedown",t.handleDragStart,!0),k(()=>u(a,e().dragHandle(i().panelLocation))),a})():null})(),null),h(o,()=>t.children,null),k(()=>u(o,e().devtoolsPanel)),o})()};Y(["mousedown"]);var Rn=b("<div><h4 style=margin:0></h4><div></div>Final shortcut is: "),Un={Shift:"Shift",Alt:"Alt",Meta:"Meta",Control:"Control",CtrlOrMeta:"Ctrl Or Meta"},vt=t=>{const e=R(),i=a=>{if(t.hotkey.includes(a))t.onHotkeyChange(t.hotkey.filter(n=>n!==a));else{const n=t.hotkey.filter(d=>t.modifiers.includes(d)),r=t.hotkey.filter(d=>!t.modifiers.includes(d));t.onHotkeyChange([...n,a,...r])}},o=()=>t.hotkey.filter(a=>!t.modifiers.includes(a)).join("+"),c=a=>{const n=l=>{if(l.length===1)return[et(l)];const g=[];for(const f of l){const w=et(f);g.includes(w)||g.push(w)}return g},r=t.hotkey.filter(l=>t.modifiers.includes(l)),d=a.split("+").flatMap(l=>n(l)).filter(Boolean);t.onHotkeyChange([...r,...d])},s=()=>t.hotkey.join(" + ");return(()=>{var a=Rn(),n=a.firstChild,r=n.nextSibling,d=r.nextSibling;return h(n,()=>t.description),h(r,p(P,{keyed:!0,get when(){return t.hotkey},get children(){return t.modifiers.map(l=>p(Nt,{variant:"success",onclick:()=>i(l),get outline(){return!t.hotkey.includes(l)},get children(){return Un[l]||l}}))}})),h(a,p(Ht,{description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return o()},onChange:c}),d),h(a,s,null),k(l=>{var g=e().settingsGroup,f=e().settingsModifiers;return g!==l.e&&u(a,l.e=g),f!==l.t&&u(r,l.t=f),l},{e:void 0,t:void 0}),a})()},Ae=b("<div>"),Qn=b("<div><div>"),qn=()=>{const{setSettings:t,settings:e}=ue(),i=R(),o=["CtrlOrMeta","Alt","Shift"];return p(Ot,{withPadding:!0,get children(){return[p(ve,{get children(){return[p(Ce,{get children(){return[p(Se,{get children(){return p(Kr,{})}}),"General"]}}),p(me,{children:"Configure general behavior of the devtools panel."}),(()=>{var c=Ae();return h(c,p(ke,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>t({defaultOpen:!e().defaultOpen}),get checked(){return e().defaultOpen}}),null),h(c,p(ke,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>t({hideUntilHover:!e().hideUntilHover}),get checked(){return e().hideUntilHover}}),null),h(c,p(ke,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>t({triggerHidden:!e().triggerHidden}),get checked(){return e().triggerHidden}}),null),h(c,p(He,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return e().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:s=>t({theme:s})}),null),k(()=>u(c,i().settingsGroup)),c})()]}}),p(ve,{get children(){return[p(Ce,{get children(){return[p(Se,{get children(){return p(Xr,{})}}),"URL Configuration"]}}),p(me,{children:"Control when devtools are available based on URL parameters."}),(()=>{var c=Ae();return h(c,p(ke,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return e().requireUrlFlag},onChange:s=>t({requireUrlFlag:s})}),null),h(c,p(P,{get when(){return e().requireUrlFlag},get children(){var s=Ae();return h(s,p(Ht,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return e().urlFlag},onChange:a=>t({urlFlag:a})})),k(()=>u(s,i().conditionalSetting)),s}}),null),k(()=>u(c,i().settingsGroup)),c})()]}}),p(ve,{get children(){return[p(Ce,{get children(){return[p(Se,{get children(){return p(Zr,{})}}),"Keyboard"]}}),p(me,{children:"Customize keyboard shortcuts for quick access."}),(()=>{var c=Ae();return h(c,p(vt,{title:"Open/Close Devtools",description:"Hotkey to open/close devtools",get hotkey(){return e().openHotkey},modifiers:o,onHotkeyChange:s=>t({openHotkey:s})}),null),h(c,p(vt,{title:"Source Inspector",description:"Hotkey to open source inspector",get hotkey(){return e().inspectHotkey},modifiers:o,onHotkeyChange:s=>t({inspectHotkey:s})}),null),k(()=>u(c,i().settingsStack)),c})()]}}),p(ve,{get children(){return[p(Ce,{get children(){return[p(Se,{get children(){return p(Jr,{})}}),"Position"]}}),p(me,{children:"Adjust the position of the trigger button and devtools panel."}),(()=>{var c=Qn(),s=c.firstChild;return h(s,p(He,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return e().position},onChange:a=>t({position:a})}),null),h(s,p(He,{label:"Panel Position",get value(){return e().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:a=>t({panelLocation:a})}),null),k(a=>{var n=i().settingsGroup,r=i().settingRow;return n!==a.e&&u(c,a.e=n),r!==a.t&&u(s,a.t=r),a},{e:void 0,t:void 0}),c})()]}})]}})},jn=t=>{if(t.status==="installing")return"Installing...";if(t.status==="success")return"Installed!";if(t.status==="error")return"Error";switch(t.actionType){case"install":return"Install";case"install-devtools":return"Install Devtools";case"add-to-devtools":return"Add to Devtools";case"requires-package":return`Requires ${t.requiredPackageName}`;case"wrong-framework":return"Different Framework";case"already-installed":return"Already Installed";case"bump-version":return"Bump Version";case"version-mismatch":return"Version Mismatch";default:return"Install"}},Vn=t=>t.actionType==="requires-package"||t.actionType==="wrong-framework"||t.actionType==="version-mismatch"?"danger":t.actionType==="bump-version"?"warning":t.actionType==="already-installed"?"secondary":"primary",Wn=(t,e)=>{const i=e(),o=i.pluginMarketplaceCardBadge;switch(t.actionType){case"install":case"install-devtools":return`${o} ${i.pluginMarketplaceCardBadgeInstall}`;case"add-to-devtools":return`${o} ${i.pluginMarketplaceCardBadgeAdd}`;case"already-installed":return`${o} ${i.pluginMarketplaceCardBadgeAdd}`;case"bump-version":return`${o} ${i.pluginMarketplaceCardBadgeRequires}`;case"version-mismatch":return`${o} ${i.pluginMarketplaceCardBadgeRequires}`;case"requires-package":case"wrong-framework":return`${o} ${i.pluginMarketplaceCardBadgeRequires}`;default:return o}},Yn=t=>{switch(t.actionType){case"install":case"install-devtools":return"Available";case"add-to-devtools":return"Installed";case"already-installed":return"Active";case"version-mismatch":return"Incompatible";case"requires-package":return"Unavailable";case"wrong-framework":return"Other Framework";default:return""}},Gn=b("<div>New"),Kn=b("<img>"),Zn=b("<span>✓ v<!> • Min v"),Jn=b("<p>"),Xn=b('<a target=_blank rel="noopener noreferrer">Documentation '),Ue=b("<div>"),_n=b("<div style=position:relative><span></span><div></div><div><h3></h3><p></p><p>"),ea=b("<span>⚠️ v<!> • Requires v<!>+"),mt=b("<span>"),ta=b("<span>Installing..."),ra=b("<span>Installed!"),na=t=>{const e=R(),{card:i}=t;return(()=>{var o=_n(),c=o.firstChild,s=c.nextSibling,a=s.nextSibling,n=a.firstChild,r=n.nextSibling,d=r.nextSibling;return h(o,p(P,{get when(){return i.metadata?.isNew},get children(){var l=Gn();return k(()=>u(l,e().pluginMarketplaceNewBanner)),l}}),c),h(c,()=>Yn(i)),h(s,p(P,{get when(){return i.metadata?.logoUrl},get fallback(){return p(en,{})},get children(){var l=Kn();return k(g=>{var f=i.metadata?.logoUrl,w=i.metadata?.title||i.devtoolsPackage,m=e().pluginMarketplaceCardImage;return f!==g.e&&W(l,"src",g.e=f),w!==g.t&&W(l,"alt",g.t=w),m!==g.a&&u(l,g.a=m),g},{e:void 0,t:void 0,a:void 0}),l}})),h(n,()=>i.metadata?.title||i.devtoolsPackage),h(r,()=>i.devtoolsPackage),h(d,(()=>{var l=L(()=>i.actionType==="requires-package");return()=>l()?`Requires ${i.requiredPackageName}`:L(()=>i.actionType==="wrong-framework")()?"For different framework projects":L(()=>i.actionType==="already-installed")()?"Active in your devtools":L(()=>i.actionType==="version-mismatch")()?i.versionInfo?.reason||"Version incompatible":i.metadata?.description||`For ${i.requiredPackageName}`})()),h(a,p(P,{get when(){return i.versionInfo},get children(){var l=Jn();return h(l,p(P,{get when(){return i.versionInfo?.satisfied},get fallback(){return(()=>{var g=ea(),f=g.firstChild.nextSibling,w=f.nextSibling.nextSibling;return w.nextSibling,h(g,()=>i.versionInfo?.current,f),h(g,()=>i.versionInfo?.required,w),k(()=>u(g,e().pluginMarketplaceCardVersionUnsatisfied)),g})()},get children(){var g=Zn(),f=g.firstChild.nextSibling;return f.nextSibling,h(g,()=>i.versionInfo?.current,f),h(g,()=>i.versionInfo?.required,null),k(()=>u(g,e().pluginMarketplaceCardVersionSatisfied)),g}})),k(()=>u(l,e().pluginMarketplaceCardVersionInfo)),l}}),null),h(a,p(P,{get when(){return i.metadata?.docsUrl},get children(){var l=Xn();return l.firstChild,h(l,p(on,{}),null),k(g=>{var f=i.metadata?.docsUrl,w=e().pluginMarketplaceCardDocsLink;return f!==g.e&&W(l,"href",g.e=f),w!==g.t&&u(l,g.t=w),g},{e:void 0,t:void 0}),l}}),null),h(a,p(P,{get when(){return L(()=>!!i.metadata?.tags)()&&i.metadata.tags.length>0},get children(){var l=Ue();return h(l,p(J,{get each(){return i.metadata?.tags},children:g=>(()=>{var f=mt();return h(f,g),k(()=>u(f,e().pluginMarketplaceCardTag)),f})()})),k(()=>u(l,e().pluginMarketplaceCardTags)),l}}),null),h(o,p(P,{get when(){return i.status==="idle"},get fallback(){return(()=>{var l=Ue();return h(l,p(P,{get when(){return i.status==="installing"},get children(){return[(()=>{var g=Ue();return k(()=>u(g,e().pluginMarketplaceCardSpinner)),g})(),(()=>{var g=ta();return k(()=>u(g,e().pluginMarketplaceCardStatusText)),g})()]}}),null),h(l,p(P,{get when(){return i.status==="success"},get children(){return[p(tn,{}),(()=>{var g=ra();return k(()=>u(g,e().pluginMarketplaceCardStatusText)),g})()]}}),null),h(l,p(P,{get when(){return i.status==="error"},get children(){return[p(rn,{}),(()=>{var g=mt();return h(g,()=>i.error||"Failed to install"),k(()=>u(g,e().pluginMarketplaceCardStatusTextError)),g})()]}}),null),k(()=>u(l,e().pluginMarketplaceCardStatus)),l})()},get children(){return p(Nt,{get variant(){return Vn(i)},onClick:()=>t.onAction(i),get disabled(){return i.status!=="idle"||i.actionType==="requires-package"||i.actionType==="wrong-framework"||i.actionType==="already-installed"||i.actionType==="version-mismatch"},get class(){return L(()=>i.actionType==="already-installed")()?e().pluginMarketplaceButtonInstalled:""},get children(){return jn(i)}})}}),null),k(l=>{var g=e().pluginMarketplaceCard,f={[e().pluginMarketplaceCardDisabled]:!i.isCurrentFramework&&i.actionType!=="already-installed",[e().pluginMarketplaceCardFeatured]:!!i.metadata?.featured&&i.actionType!=="already-installed",[e().pluginMarketplaceCardActive]:i.actionType==="already-installed"},w=Wn(i,e),m=e().pluginMarketplaceCardIcon,y=!!i.metadata?.logoUrl,x=e().pluginMarketplaceCardHeader,S=e().pluginMarketplaceCardTitle,E=e().pluginMarketplaceCardPackageBadge,j=e().pluginMarketplaceCardDescriptionText;return g!==l.e&&u(o,l.e=g),l.t=je(o,f,l.t),w!==l.a&&u(c,l.a=w),m!==l.o&&u(s,l.o=m),y!==l.i&&s.classList.toggle("custom-logo",l.i=y),x!==l.n&&u(a,l.n=x),S!==l.s&&u(n,l.s=S),E!==l.h&&u(r,l.h=E),j!==l.r&&u(d,l.r=j),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),o})()},aa=b('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">'),ia=b('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect x=2 y=4 width=20 height=16 rx=2></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">'),oa=b(`<div><div><h4><span></span>Want to be featured here?</h4><p>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"><span></span>Contact Us`),la=b("<div>"),sa=b("<div><div><div><div></div><h3>"),ca=()=>aa(),da=()=>ia(),ga=t=>{const e=R();return(()=>{var i=sa(),o=i.firstChild,c=o.firstChild,s=c.firstChild,a=s.nextSibling;return Ie(o,"click",t.onToggleCollapse,!0),h(s,p(nn,{})),h(a,()=>t.section.displayName),h(i,p(P,{get when(){return!t.isCollapsed()},get children(){return[p(P,{get when(){return t.section.id==="featured"},get children(){var n=oa(),r=n.firstChild,d=r.firstChild,l=d.firstChild,g=d.nextSibling,f=g.nextSibling,w=f.firstChild;return h(l,p(ca,{})),h(w,p(da,{})),k(m=>{var y=e().pluginMarketplaceFeatureBanner,x=e().pluginMarketplaceFeatureBannerContent,S=e().pluginMarketplaceFeatureBannerTitle,E=e().pluginMarketplaceFeatureBannerIcon,j=e().pluginMarketplaceFeatureBannerText,X=e().pluginMarketplaceFeatureBannerButton,_=e().pluginMarketplaceFeatureBannerButtonIcon;return y!==m.e&&u(n,m.e=y),x!==m.t&&u(r,m.t=x),S!==m.a&&u(d,m.a=S),E!==m.o&&u(l,m.o=E),j!==m.i&&u(g,m.i=j),X!==m.n&&u(f,m.n=X),_!==m.s&&u(w,m.s=_),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),n}}),(()=>{var n=la();return h(n,p(J,{get each(){return t.section.cards},children:r=>p(na,{card:r,get onAction(){return t.onCardAction}})})),k(()=>u(n,e().pluginMarketplaceGrid)),n})()]}}),null),k(n=>{var r=e().pluginMarketplaceSection,d=e().pluginMarketplaceSectionHeader,l=e().pluginMarketplaceSectionHeaderLeft,g=e().pluginMarketplaceSectionChevron,f={[e().pluginMarketplaceSectionChevronCollapsed]:t.isCollapsed()},w=e().pluginMarketplaceSectionTitle;return r!==n.e&&u(i,n.e=r),d!==n.t&&u(o,n.t=d),l!==n.a&&u(c,n.a=l),g!==n.o&&u(s,n.o=g),n.i=je(s,f,n.i),w!==n.n&&u(a,n.n=w),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),i})()};Y(["click"]);var ua=b("<div><div><h3>Marketplace Settings</h3><button></button></div><div>"),pa=t=>{const e=R();return p(P,{get when(){return t.isOpen()},get children(){var i=ua(),o=i.firstChild,c=o.firstChild,s=c.nextSibling,a=o.nextSibling;return Ie(s,"click",t.onClose,!0),h(s,p(sn,{})),h(a,p(ke,{label:"Show active plugins",description:"Display installed plugins in a separate section",get checked(){return t.showActivePlugins()},onChange:n=>t.setShowActivePlugins(n)})),k(n=>{var r=e().pluginMarketplaceSettingsPanel,d=e().pluginMarketplaceSettingsPanelHeader,l=e().pluginMarketplaceSettingsPanelTitle,g=e().pluginMarketplaceSettingsPanelClose,f=e().pluginMarketplaceSettingsPanelContent;return r!==n.e&&u(i,n.e=r),d!==n.t&&u(o,n.t=d),l!==n.a&&u(c,n.a=l),g!==n.o&&u(s,n.o=g),f!==n.i&&u(a,n.i=f),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),i}})};Y(["click"]);var ha=b("<div>"),fa=b("<button>"),va=t=>{const e=R();return p(P,{get when(){return t.tags().length>0},get children(){var i=ha();return h(i,p(J,{get each(){return t.tags()},children:o=>(()=>{var c=fa();return c.$$click=()=>t.onToggleTag(o),h(c,o),k(s=>{var a=e().pluginMarketplaceTagButton,n={[e().pluginMarketplaceTagButtonActive]:t.selectedTags().has(o)};return a!==s.e&&u(c,s.e=a),s.t=je(c,n,s.t),s},{e:void 0,t:void 0}),c})()})),k(()=>u(i,e().pluginMarketplaceTagsContainer)),i}})};Y(["click"]);var ma=b('<div><div><h2>Plugin Marketplace</h2><div style=display:flex;align-items:center><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer'),ba=t=>{const e=R();return(()=>{var i=ma(),o=i.firstChild,c=o.firstChild,s=c.nextSibling.firstChild,a=s.firstChild,n=s.nextSibling,r=o.nextSibling;return h(s,p(an,{}),a),a.$$input=d=>t.onSearchInput(d.currentTarget.value),Ie(n,"click",t.onSettingsClick,!0),h(n,p(ln,{})),h(i,p(va,{get tags(){return t.tags},get selectedTags(){return t.selectedTags},get onToggleTag(){return t.onToggleTag}}),null),k(d=>{var l=e().pluginMarketplaceHeader,g=e().pluginMarketplaceTitleRow,f=e().pluginMarketplaceTitle,w=e().pluginMarketplaceSearchWrapper,m=e().pluginMarketplaceSearch,y=e().pluginMarketplaceSettingsButton,x=e().pluginMarketplaceDescription;return l!==d.e&&u(i,d.e=l),g!==d.t&&u(o,d.t=g),f!==d.a&&u(c,d.a=f),w!==d.o&&u(s,d.o=w),m!==d.i&&u(a,d.i=m),y!==d.n&&u(n,d.n=y),x!==d.s&&u(r,d.s=x),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),k(()=>a.value=t.searchInput()),i})()};Y(["input","click"]);var bt=["react","solid","vue","svelte","angular"],ya={"@tanstack/react-query-devtools":{packageName:"@tanstack/react-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/react-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/solid-query-devtools":{packageName:"@tanstack/solid-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/solid-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/react-router-devtools":{packageName:"@tanstack/react-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","routing","navigation"]},"@tanstack/solid-router-devtools":{packageName:"@tanstack/solid-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/solid-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","routing","navigation"]},"@tanstack/react-form-devtools":{packageName:"@tanstack/react-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/react-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","forms","validation"]},"@tanstack/solid-form-devtools":{packageName:"@tanstack/solid-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/solid-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",isNew:!0,framework:"solid",tags:["TanStack","forms","validation"]},"@tanstack/react-pacer-devtools":{packageName:"@tanstack/react-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/react-pacer",minVersion:"0.16.4"},author:"TanStack",framework:"react",isNew:!0,tags:["TanStack"]},"@tanstack/solid-pacer-devtools":{packageName:"@tanstack/solid-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/solid-pacer",minVersion:"0.14.4"},author:"TanStack",framework:"solid",isNew:!0,tags:["TanStack"]},"@tanstack/devtools-a11y":{packageName:"@tanstack/devtools-a11y",title:"Accessibility Devtools",description:"Audit accessibility issues in real-time with axe-core. Supports WCAG 2.1/2.2, live monitoring, and visual overlays.",pluginImport:{importName:"createA11yPlugin",type:"function"},pluginId:"devtools-a11y",docsUrl:"https://tanstack.com/devtools/latest/docs/plugins/a11y",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","a11y"]},"@dimano/ts-devtools-plugin-prefetch-heatmap":{packageName:"@dimano/ts-devtools-plugin-prefetch-heatmap",title:"Prefetch Heatmap",description:"Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginImport:{importName:"registerPrefetchHeatmapPlugin",type:"function"},pluginId:"prefetch-heatmap",logoUrl:"https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png",docsUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin",repoUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap",author:"Dimitris Anoudis (@dimitrianoudi)",framework:"react",isNew:!0,tags:["Router","Prefetch","Analytics","Overlay","TanStack"]}};function ka(){return Object.values(ya)}function Pe(t){if(!t)return null;const e=t.replace(/^[v^~]/,"").split("-")[0]?.split("+")[0];if(!e)return null;const i=e.split(".");if(i.length<2)return null;const o=parseInt(i[0]??"0",10),c=parseInt(i[1]??"0",10),s=parseInt(i[2]??"0",10);return isNaN(o)||isNaN(c)||isNaN(s)?null:{major:o,minor:c,patch:s,raw:t}}function Wt(t,e){return t.major!==e.major?t.major-e.major:t.minor!==e.minor?t.minor-e.minor:t.patch-e.patch}function wa(t,e){const i=Pe(t),o=Pe(e);return!i||!o?!0:Wt(i,o)>=0}function xa(t,e){const i=Pe(t),o=Pe(e);return!i||!o?!0:Wt(i,o)<=0}function Ca(t,e,i){return!e&&!i?{satisfied:!0}:e&&!wa(t,e)?{satisfied:!1,reason:`Requires v${e} or higher (current: v${t})`}:i&&!xa(t,i)?{satisfied:!1,reason:`Requires v${i} or lower (current: v${t})`}:{satisfied:!0}}var yt=(t,e)=>{const i={...t.dependencies,...t.devDependencies},o={react:["react","react-dom"],vue:["vue","@vue/core"],solid:["solid-js"],svelte:["svelte"],angular:["@angular/core"]};for(const c of e){const s=o[c];if(s&&s.some(a=>i[a]))return c}return"unknown"},Sa=(t,e,i,o,c)=>{if(c)return Array.from(t).some(n=>{const r=n.toLowerCase(),d=c.toLowerCase();return r.startsWith(d)||r.includes(d)});if(t.has(e))return!0;const s=i.toLowerCase().split(/[-_/@]/).filter(n=>n.length>0),a=o.toLowerCase();return Array.from(t).some(n=>{const r=n.toLowerCase();if(r.includes(i.toLowerCase()))return!0;const d=s.filter(l=>r.includes(l));return!!(d.length>=2||r.includes(a)&&d.length>=1)})},kt=(t,e,i,o)=>{const c={...t.dependencies,...t.devDependencies},s=[];return ka().forEach(a=>{const n=a.packageName,r=a.framework===e||a.framework==="other",d=a.requires?.packageName,l=d?!!c[d]:!1,g=!!c[n];let f;if(l&&a.requires){const x=d?c[d]:void 0;if(x){const S=Ca(x,a.requires.minVersion,a.requires.maxVersion);f={current:x,required:a.requires.minVersion,satisfied:S.satisfied,reason:S.reason}}}const w=Sa(i,n,a.packageName,a.framework,a.pluginId);let m;r?a.requires&&!l?m="requires-package":f&&!f.satisfied?m="bump-version":g&&w?m="already-installed":g&&!w?m="add-to-devtools":!g&&a.requires&&l?m="install-devtools":m="install":m="wrong-framework";const y=o.find(x=>x.devtoolsPackage===n);s.push({requiredPackageName:d||"",devtoolsPackage:n,framework:a.framework,hasPackage:l,hasDevtools:g,isRegistered:w,actionType:m,status:y?.status||"idle",error:y?.error,isCurrentFramework:r,metadata:a,versionInfo:f})}),s},wt=t=>{const e=[],i=t.filter(s=>s.metadata?.featured&&s.actionType!=="already-installed"&&s.isCurrentFramework);e.push({id:"featured",displayName:"⭐ Featured",cards:i});const o=t.filter(s=>s.actionType==="already-installed"&&s.isRegistered);o.length>0&&e.push({id:"active",displayName:"✓ Active Plugins",cards:o});const c=t.filter(s=>s.isCurrentFramework&&s.actionType!=="already-installed"&&!s.metadata?.featured);return c.length>0&&e.push({id:"available",displayName:"Available Plugins",cards:c}),e},Ma=b("<div><p>"),$a=b("<div>"),xt=()=>{const t=R(),{plugins:e}=Qt(),[i,o]=F([]),[c,s]=F(null),[a,n]=F(""),[r,d]=F(""),[l,g]=F(new Set),[f,w]=F(!0),[m,y]=F(new Set),[x,S]=F(!1);let E;const j=C=>{n(C),E&&clearTimeout(E),E=setTimeout(()=>{d(C)},300)},X=C=>{g(z=>{const A=new Set(z);return A.has(C)?A.delete(C):A.add(C),A})},_=(C,z)=>{if(!z)return!0;const A=z.toLowerCase();return C.devtoolsPackage.toLowerCase().includes(A)||C.requiredPackageName.toLowerCase().includes(A)||C.framework.toLowerCase().includes(A)},T=()=>{const C=r(),z=f(),A=m(),D=c();if(!D)return[];let I=wt(kt(D,yt(D,bt),new Set(e()?.map(B=>B.id||"")||[]),i().flatMap(B=>B.cards)));return z||(I=I.filter(B=>B.id!=="active")),A.size>0&&(I=I.map(B=>({...B,cards:B.cards.filter(ee=>ee.metadata?.tags?ee.metadata.tags.some(ne=>A.has(ne)):!1)})).filter(B=>B.cards.length>0)),C?I.map(B=>({...B,cards:B.cards.filter(ee=>_(ee,C))})).filter(B=>B.cards.length>0):I};Bt(()=>{const C=te.on("package-json-read",I=>{s(I.payload.packageJson),U(I.payload.packageJson)}),z=te.on("package-json-updated",I=>{s(I.payload.packageJson),U(I.payload.packageJson)}),A=te.on("devtools-installed",I=>{o(B=>B.map(ee=>({...ee,cards:ee.cards.map(ne=>ne.devtoolsPackage===I.payload.packageName?{...ne,status:I.payload.success?"success":"error",error:I.payload.error}:ne)})))}),D=te.on("plugin-added",I=>{if(o(B=>B.map(ee=>({...ee,cards:ee.cards.map(ne=>ne.devtoolsPackage===I.payload.packageName?{...ne,status:I.payload.success?"success":"error",error:I.payload.error}:ne)}))),I.payload.success){const B=c();B&&U(B)}});re(()=>{C(),z(),A(),D()}),te.emit("mounted",void 0)});const U=C=>{C&&o(wt(kt(C,yt(C,bt),new Set(e()?.map(z=>z.id||"")||[]),i().flatMap(z=>z.cards))))},oe=C=>{if(!(C.actionType==="requires-package"||C.actionType==="wrong-framework"||C.actionType==="already-installed"||C.actionType==="version-mismatch")){if(o(z=>z.map(A=>({...A,cards:A.cards.map(D=>D.devtoolsPackage===C.devtoolsPackage?{...D,status:"installing"}:D)}))),C.actionType==="bump-version"){te.emit("bump-package-version",{packageName:C.requiredPackageName,devtoolsPackage:C.devtoolsPackage,pluginName:C.metadata?.title||C.devtoolsPackage,minVersion:C.metadata?.requires?.minVersion,pluginImport:C.metadata?.pluginImport});return}if(C.actionType==="add-to-devtools"){te.emit("add-plugin-to-devtools",{packageName:C.devtoolsPackage,pluginName:C.metadata?.title??C.devtoolsPackage,pluginImport:C.metadata?.pluginImport});return}te.emit("install-devtools",{packageName:C.devtoolsPackage,pluginName:C.metadata?.title??C.devtoolsPackage,pluginImport:C.metadata?.pluginImport})}},G=()=>{const C=new Set;return i().forEach(z=>{(z.id==="featured"||z.id==="available")&&z.cards.forEach(A=>{A.metadata?.tags&&A.metadata.tags.forEach(D=>C.add(D))})}),Array.from(C).sort()},K=C=>{y(z=>{const A=new Set(z);return A.has(C)?A.delete(C):A.add(C),A})};return(()=>{var C=$a();return h(C,p(pa,{isOpen:x,onClose:()=>S(!1),showActivePlugins:f,setShowActivePlugins:w}),null),h(C,p(ba,{searchInput:a,onSearchInput:j,onSettingsClick:()=>S(!x()),tags:G,selectedTags:m,onToggleTag:K}),null),h(C,p(P,{get when(){return T().length>0},get children(){return p(J,{get each(){return T()},children:z=>p(ga,{section:z,isCollapsed:()=>l().has(z.id),onToggleCollapse:()=>X(z.id),onCardAction:oe})})}}),null),h(C,p(P,{get when(){return T().length===0},get children(){var z=Ma(),A=z.firstChild;return h(A,(()=>{var D=L(()=>!!r());return()=>D()?`No plugins found matching "${r()}"`:"No additional plugins available. You have all compatible devtools installed and registered!"})()),k(D=>{var I=t().pluginMarketplaceEmpty,B=t().pluginMarketplaceEmptyText;return I!==D.e&&u(z,D.e=I),B!==D.t&&u(A,D.t=B),D},{e:void 0,t:void 0}),z}}),null),k(()=>u(C,t().pluginMarketplace)),C})()},za=b("<div><div><div><div></div><div><h3>Add More"),Ea=b("<div><h3>"),Aa=b("<div>"),Fa=t=>{const{plugins:e,activePlugins:i,toggleActivePlugins:o}=Qt(),{expanded:c,hoverUtils:s,animationMs:a,setForceExpand:n}=Ge(),[r,d]=F(new Map),[l,g]=F(!1),f=R(),{theme:w}=Ze(),m=O(()=>e()?.length&&e().length>0);N(()=>{n(l())}),N(()=>{e()?.filter(S=>i().includes(S.id))?.forEach(S=>{const E=r().get(S.id);E&&S.render(E,{theme:w(),devtoolsOpen:t.isOpen})})});const y=()=>g(!l()),x=S=>{l()&&g(!1),o(S)};return p(P,{get when(){return m()},get fallback(){return p(xt,{})},get children(){var S=za(),E=S.firstChild,j=E.firstChild,X=j.firstChild,_=X.nextSibling;return E.addEventListener("mouseleave",()=>{l()||s.leave()}),E.addEventListener("mouseenter",()=>s.enter()),h(X,p(J,{get each(){return e()},children:T=>{let U;N(()=>{U&&(typeof T.name=="string"?U.textContent=T.name:T.name(U,{theme:w(),devtoolsOpen:t.isOpen}))});const oe=O(()=>i().includes(T.id));return(()=>{var G=Ea(),K=G.firstChild;G.$$click=()=>x(T.id);var C=U;return typeof C=="function"?be(C,K):U=K,k(z=>{var A=q(f().pluginName,{active:oe()}),D=`${Kt}-${T.id}`;return A!==z.e&&u(G,z.e=A),D!==z.t&&W(K,"id",z.t=D),z},{e:void 0,t:void 0}),G})()}})),_.$$click=y,h(S,p(P,{get when(){return l()},get fallback(){return p(J,{get each(){return i()},children:T=>(()=>{var U=Aa();return be(oe=>{d(G=>{const K=new Map(G);return K.set(T,oe),K})},U),W(U,"id",`${Zt}-${T}`),k(()=>u(U,f().pluginsTabContent)),U})()})},get children(){return p(xt,{})}}),null),k(T=>{var U=f().pluginsTabPanel,oe=q(f().pluginsTabDraw(c()),{[f().pluginsTabDraw(c())]:c()},f().pluginsTabDrawTransition(a)),G=q(f().pluginsTabSidebar(c()),f().pluginsTabSidebarTransition(a)),K=f().pluginsList,C=q(f().pluginNameAddMore,{active:l()});return U!==T.e&&u(S,T.e=U),oe!==T.t&&u(E,T.t=oe),G!==T.a&&u(j,T.a=G),K!==T.o&&u(X,T.o=K),C!==T.i&&u(_,T.i=C),T},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),S}})};Y(["click"]);function Yt(t,e={}){const{attributes:i=!0,childList:o=!0,subtree:c=!0,observeTitle:s=!0}=e;Bt(()=>{const a=new MutationObserver(r=>{for(const d of r)if(d.type==="childList")d.addedNodes.forEach(l=>t({kind:"added",node:l},d)),d.removedNodes.forEach(l=>t({kind:"removed",node:l},d));else if(d.type==="attributes"){const l=d.target;t({kind:"attr",target:l,name:d.attributeName,oldValue:d.oldValue??null},d)}else d.target.parentNode&&d.target.parentNode.tagName.toLowerCase()==="title"&&t({kind:"title",title:document.title},d)});a.observe(document.head,{childList:o,attributes:i,subtree:c,attributeOldValue:i,characterData:!0,characterDataOldValue:!1});let n;if(s){const r=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));n=new MutationObserver(()=>{t({kind:"title",title:document.title})}),n.observe(r,{childList:!0,characterData:!0,subtree:!0})}re(()=>{a.disconnect(),n?.disconnect()})})}var Ta=b("<div><div> Preview</div><div></div><div></div><div>"),Ba=b("<img alt=Preview>"),Pa=b("<div style=background:#222;color:#888;display:flex;align-items:center;justify-content:center;min-height:80px;width:100%>No Image"),Ct=b("<div>"),Ia=b("<div><strong>Missing tags for <!>:</strong><ul>"),La=b("<li>"),St=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function Da(t){const e=R();return(()=>{var i=Ta(),o=i.firstChild,c=o.firstChild,s=o.nextSibling,a=s.nextSibling,n=a.nextSibling;return h(o,()=>t.network,c),h(i,(()=>{var r=L(()=>!!t.meta.image);return()=>r()?(()=>{var d=Ba();return k(l=>{var g=t.meta.image,f=e().seoPreviewImage;return g!==l.e&&W(d,"src",l.e=g),f!==l.t&&u(d,l.t=f),l},{e:void 0,t:void 0}),d})():(()=>{var d=Pa();return k(()=>u(d,e().seoPreviewImage)),d})()})(),s),h(s,()=>t.meta.title||"No Title"),h(a,()=>t.meta.description||"No Description"),h(n,()=>t.meta.url||window.location.href),k(r=>{var d=e().seoPreviewCard,l=t.color,g=e().seoPreviewHeader,f=t.color,w=e().seoPreviewTitle,m=e().seoPreviewDesc,y=e().seoPreviewUrl;return d!==r.e&&u(i,r.e=d),l!==r.t&&Be(i,"border-color",r.t=l),g!==r.a&&u(o,r.a=g),f!==r.o&&Be(o,"color",r.o=f),w!==r.i&&u(s,r.i=w),m!==r.n&&u(a,r.n=m),y!==r.s&&u(n,r.s=y),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),i})()}function Ha(){const[t,e]=F(o()),i=R();function o(){const c=Array.from(document.head.querySelectorAll("meta")),s=[];for(const a of St){const n={},r=[];for(const d of a.tags){const l=c.find(g=>(d.key.includes("twitter:")?!1:g.getAttribute("property")===d.key)||g.getAttribute("name")===d.key);l&&l.getAttribute("content")?n[d.prop]=l.getAttribute("content")||void 0:r.push(d.key)}s.push({network:a.network,found:n,missing:r})}return s}return Yt(()=>{e(o())}),p(ve,{get children(){return[p(me,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(()=>{var c=Ct();return h(c,p(J,{get each(){return t()},children:(s,a)=>{const n=St[a()];return(()=>{var r=Ct();return h(r,p(Da,{get meta(){return s.found},get color(){return n.color},get network(){return n.network}}),null),h(r,(()=>{var d=L(()=>s.missing.length>0);return()=>d()?(()=>{var l=Ia(),g=l.firstChild,f=g.firstChild.nextSibling;f.nextSibling;var w=g.nextSibling;return h(g,()=>n?.network,f),h(w,p(J,{get each(){return s.missing},children:m=>(()=>{var y=La();return h(y,m),k(()=>u(y,i().seoMissingTag)),y})()})),k(m=>{var y=i().seoMissingTagsSection,x=i().seoMissingTagsList;return y!==m.e&&u(l,m.e=y),x!==m.t&&u(w,m.t=x),m},{e:void 0,t:void 0}),l})():null})(),null),r})()}})),k(()=>u(c,i().seoPreviewSection)),c})()]}})}var Na=b("<div><div></div><div><div><div><span></span><span></span></div></div><div>"),Oa=b('<img alt="favicon icon">'),Qe=b("<div>"),Ra=b("<div><strong>Issues for <!>:</strong><ul>"),Ua=b("<li>"),Mt=60,$t=158,Qa=120,Fe="...",qa=[{message:"No favicon or icon set on the page.",hasIssue:t=>!t.favicon},{message:"No title tag set on the page.",hasIssue:t=>!t.title.trim()},{message:"No meta description set on the page.",hasIssue:t=>!t.description.trim()},{message:"The title is wider than 600px and it may not be displayed in full length.",hasIssue:(t,e)=>e.titleOverflow}],ja=[{label:"Desktop preview",isMobile:!1,extraChecks:[{message:"The meta description may get trimmed at ~960 pixels on desktop and at ~680px on mobile. Keep it below ~158 characters.",hasIssue:(t,e)=>e.descriptionOverflow}]},{label:"Mobile preview",isMobile:!0,extraChecks:[{message:"Description exceeds the 3-line limit for mobile view. Please shorten your text to fit within 3 lines.",hasIssue:(t,e)=>e.descriptionOverflowMobile}]}];function zt(t,e){return t.length<=e?t:e<=Fe.length?Fe:t.slice(0,e-Fe.length)+Fe}function Et(){const t=document.title||"",e=typeof window<"u"?window.location.href:"",i=Array.from(document.head.querySelectorAll("meta")),o=i.find(a=>a.getAttribute("name")?.toLowerCase()==="description")?.getAttribute("content")?.trim()||"",c=i.find(a=>a.getAttribute("property")==="og:site_name")?.getAttribute("content")?.trim()||(typeof window<"u"?window.location.hostname.replace(/^www\./,""):"");let s=Array.from(document.head.querySelectorAll("link")).find(a=>a.getAttribute("rel")?.toLowerCase().split(/\s+/).includes("icon"))?.getAttribute("href")||null;if(s&&typeof window<"u")try{s=new URL(s,e).href}catch{s=null}return{title:t,description:o,siteName:c,favicon:s,url:e}}function Va(t,e,i){return i.filter(o=>o.hasIssue(t,e)).map(o=>o.message)}function Wa(t){const e=R();return(()=>{var i=Na(),o=i.firstChild,c=o.nextSibling,s=c.firstChild,a=s.firstChild,n=a.firstChild,r=n.nextSibling,d=s.nextSibling;return h(o,()=>t.label),h(s,(()=>{var l=L(()=>!!t.data.favicon);return()=>l()?(()=>{var g=Oa();return k(f=>{var w=t.data.favicon,m=e().serpSnippetFavicon;return w!==f.e&&W(g,"src",f.e=w),m!==f.t&&u(g,f.t=m),f},{e:void 0,t:void 0}),g})():(()=>{var g=Qe();return k(()=>u(g,e().serpSnippetDefaultFavicon)),g})()})(),a),h(n,()=>t.data.siteName||t.data.url),h(r,()=>t.data.url),h(d,()=>t.displayTitle||t.data.title||"No title"),h(c,(()=>{var l=L(()=>!t.isMobile);return()=>l()&&(()=>{var g=Qe();return h(g,()=>t.displayDescription||t.data.description||"No meta description."),k(()=>u(g,e().serpSnippetDesc)),g})()})(),null),h(c,(()=>{var l=L(()=>!!t.isMobile);return()=>l()&&(()=>{var g=Qe();return h(g,()=>t.displayDescription||t.data.description||"No meta description."),k(()=>u(g,e().serpSnippetDescMobile)),g})()})(),null),h(i,(()=>{var l=L(()=>t.issues.length>0);return()=>l()?(()=>{var g=Ra(),f=g.firstChild,w=f.firstChild.nextSibling;w.nextSibling;var m=f.nextSibling;return h(f,()=>t.label,w),h(m,p(J,{get each(){return t.issues},children:y=>(()=>{var x=Ua();return h(x,y),k(()=>u(x,e().serpReportItem)),x})()})),k(y=>{var x=e().seoMissingTagsSection,S=e().serpErrorList;return x!==y.e&&u(g,y.e=x),S!==y.t&&u(m,y.t=S),y},{e:void 0,t:void 0}),g})():null})(),null),k(l=>{var g=e().serpPreviewBlock,f=e().serpPreviewLabel,w=t.isMobile?e().serpSnippetMobile:e().serpSnippet,m=e().serpSnippetTopRow,y=e().serpSnippetSiteColumn,x=e().serpSnippetSiteName,S=e().serpSnippetSiteUrl,E=e().serpSnippetTitle;return g!==l.e&&u(i,l.e=g),f!==l.t&&u(o,l.t=f),w!==l.a&&u(c,l.a=w),m!==l.o&&u(s,l.o=m),y!==l.i&&u(a,l.i=y),x!==l.n&&u(n,l.n=x),S!==l.s&&u(r,l.s=S),E!==l.h&&u(d,l.h=E),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),i})()}function Ya(){const[t,e]=F(Et());Yt(()=>{e(Et())});const i=O(()=>{const o=t(),c=o.title||"No title",s=o.description||"No meta description.";return{displayTitle:zt(c,Mt),displayDescription:zt(s,$t),overflow:{titleOverflow:c.length>Mt,descriptionOverflow:s.length>$t,descriptionOverflowMobile:s.length>Qa}}});return p(ve,{get children(){return[p(me,{children:"See how your title tag and meta description may look in Google search results. Data is read from the current page."}),p(J,{each:ja,children:o=>{const c=O(()=>Va(t(),i().overflow,[...qa,...o.extraChecks]));return p(Wa,{get data(){return t()},get displayTitle(){return i().displayTitle},get displayDescription(){return i().displayDescription},get isMobile(){return o.isMobile},get label(){return o.label},get issues(){return c()}})}})]}})}var Ga=b('<nav aria-label="SEO sections"><button type=button>Social previews</button><button type=button>SERP Preview'),Ka=()=>{const[t,e]=F("social-previews"),i=R();return p(Ot,{withPadding:!0,get children(){return[(()=>{var o=Ga(),c=o.firstChild,s=c.nextSibling;return c.$$click=()=>e("social-previews"),s.$$click=()=>e("serp-preview"),k(a=>{var n=i().seoSubNav,r=`${i().seoSubNavLabel} ${t()==="social-previews"?i().seoSubNavLabelActive:""}`,d=`${i().seoSubNavLabel} ${t()==="serp-preview"?i().seoSubNavLabelActive:""}`;return n!==a.e&&u(o,a.e=n),r!==a.t&&u(c,a.t=r),d!==a.a&&u(s,a.a=d),a},{e:void 0,t:void 0,a:void 0}),o})(),p(P,{get when(){return t()==="social-previews"},get children(){return p(Ha,{})}}),p(P,{get when(){return t()==="serp-preview"},get children(){return p(Ya,{})}})]}})};Y(["click"]);var Gt=[{name:"Plugins",id:"plugins",component:t=>p(Fa,t),icon:()=>p(Wr,{})},{name:"SEO",id:"seo",component:()=>p(Ka,{}),icon:()=>p(Yr,{})},{name:"Settings",id:"settings",component:()=>p(qn,{}),icon:()=>p(Gr,{})}],Za=b("<div>"),Ja=b("<button type=button>"),Xa=b("<div style=margin-top:auto;width:100%><button type=button></button><button type=button>"),_a=t=>{const e=R(),{state:i,setState:o}=De(),c=We(),s=()=>{c().requestPipWindow(`width=${window.innerWidth},height=${i().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:a}=Ge();return(()=>{var n=Za();return h(n,p(J,{each:Gt,children:r=>(()=>{var d=Ja();return d.addEventListener("mouseleave",()=>{r.id==="plugins"&&a.leave()}),d.addEventListener("mouseenter",()=>{r.id==="plugins"&&a.enter()}),d.$$click=()=>o({activeTab:r.id}),h(d,()=>r.icon()),k(()=>u(d,q(e().tab,{active:i().activeTab===r.id}))),d})()}),null),h(n,(()=>{var r=L(()=>c().pipWindow!==null);return()=>r()?null:(()=>{var d=Xa(),l=d.firstChild,g=l.nextSibling;return l.$$click=s,h(l,p(cn,{})),g.$$click=()=>t.toggleOpen(),h(g,p(_r,{})),k(f=>{var w=q(e().tab,"detach"),m=q(e().tab,"close");return w!==f.e&&u(l,f.e=w),m!==f.t&&u(g,f.t=m),f},{e:void 0,t:void 0}),d})()})(),null),k(()=>u(n,e().tabContainer)),n})()};Y(["click"]);var ei=b("<div>"),ti=t=>{const{state:e}=De(),i=R(),o=O(()=>Gt.find(c=>c.id===e().activeTab)?.component||null);return(()=>{var c=ei();return h(c,()=>o()?.({isOpen:t.isOpen})),k(()=>u(c,i().tabContent)),c})()},At=b("<div style=pointer-events:none>"),ri=()=>{const{settings:t}=ue(),e=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:""}),[i,o]=_e(e()),c=()=>{o(e())},[s,a]=F(null),n=yn(()=>s()),[r,d]=_e({x:0,y:0});at(document,"mousemove",m=>{d({x:m.clientX,y:m.clientY})});const l=It(),g=O(()=>Mn(l(),t().inspectHotkey));N(()=>{if(!g()){c();return}const m=document.elementFromPoint(r.x,r.y);if(!(m instanceof HTMLElement)){c();return}if(m===i.element)return;const y=m.getAttribute("data-tsd-source");if(!y){c();return}const x=m.getBoundingClientRect();o({element:m,bounding:{width:x.width,height:x.height,left:x.left,top:x.top},dataSource:y})}),at(document,"click",m=>{if(!i.element)return;window.getSelection()?.removeAllRanges(),m.preventDefault(),m.stopPropagation();const y=new URL("/",location.origin),x=new URL(`__tsd/open-source?source=${encodeURIComponent(i.dataSource)}`,y);fetch(x).catch(()=>{})});const f=O(()=>i.element?{display:"block",width:`${i.bounding.width}px`,height:`${i.bounding.height}px`,left:`${i.bounding.left}px`,top:`${i.bounding.top}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.25)",transition:"all 0.05s linear",position:"fixed","z-index":9999}:{display:"none"}),w=O(()=>{if(i.element&&s()){const m=window.innerWidth,y=n.height||26,x=n.width||0;let S=i.bounding.left,E=i.bounding.top-y-4;return E<0&&(E=i.bounding.top+i.bounding.height+4),S+x>m&&(S=m-x-4),S<0&&(S=4),{position:"fixed",left:`${S}px`,top:`${E}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.80)",color:"white",padding:"2px 4px",fontSize:"12px","border-radius":"2px","z-index":1e4,visibility:"visible",transition:"all 0.05s linear"}}return{display:"none"}});return[(()=>{var m=At();return be(a,m),h(m,()=>i.dataSource),k(y=>Xe(m,{...w()},y)),m})(),(()=>{var m=At();return k(y=>Xe(m,{...f()},y)),m})()]},ni=b("<div>");function si(){const{settings:t}=ue(),{setHeight:e}=qt(),{persistOpen:i,setPersistOpen:o}=xn(),[c,s]=F(),[a,n]=F(t().defaultOpen||i()),r=We();let d;const[l,g]=F(!1),f=()=>{if(r().pipWindow)return;const y=!a();n(y),o(y),te.emit("trigger-toggled",{isOpen:y})};N(()=>{re(te.on("trigger-toggled",y=>{if(r().pipWindow)return;const x=y.payload.isOpen;x!==a()&&(n(x),o(x))}))});const w=(y,x)=>{if(x.button!==0||!y)return;g(!0);const S={originalHeight:y.getBoundingClientRect().height,pageY:x.pageY},E=X=>{const _=S.pageY-X.pageY,T=t().panelLocation==="bottom"?S.originalHeight+_:S.originalHeight-_;e(T),T<70?n(!1):n(!0)},j=()=>{g(!1),document.removeEventListener("mousemove",E),document.removeEventListener("mouseUp",j)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",j)};N(()=>{if(a()){const y=c()?.parentElement?.style.paddingBottom,x=()=>{d&&c()?.parentElement&&s(S=>(S?.parentElement,S))};if(x(),typeof window<"u")return(r().pipWindow??window).addEventListener("resize",x),()=>{(r().pipWindow??window).removeEventListener("resize",x),c()?.parentElement&&typeof y=="string"&&s(S=>S)}}else c()?.parentElement&&s(y=>(y?.parentElement&&y.parentElement.removeAttribute("style"),y))}),N(()=>{window.addEventListener("keydown",y=>{y.key==="Escape"&&a()&&f()})}),Cn(a),N(()=>{if(c()){const y=c(),x=getComputedStyle(y).fontSize;y?.style.setProperty("--tsrd-font-size",x)}}),N(()=>{const y=S=>{if(!S||!(S instanceof HTMLElement))return!1;if(S.isContentEditable)return!0;const E=S.tagName;return E==="INPUT"||E==="TEXTAREA"||E==="SELECT"?!0:S.getAttribute("role")==="textbox"},x=Vt(t().openHotkey);for(const S of x)gr(S,()=>{y(document.activeElement)||f()})});const{theme:m}=Ze();return N(()=>{typeof document>"u"||(document.documentElement.dataset.tanstackDevtoolsTheme=m())}),p(ur,{get theme(){return m()},get children(){return p(ar,{get mount(){return(r().pipWindow??window).document.body},get children(){var y=ni();return be(s,y),W(y,"data-testid",Ve),h(y,p(P,{get when(){return L(()=>r().pipWindow!==null)()?!0:L(()=>!!t().requireUrlFlag)()?window.location.search.includes(t().urlFlag):!0},get children(){return[p(Dn,{isOpen:a,setIsOpen:f}),p(Nn,{isResizing:l,isOpen:a,get children(){return p(On,{ref:x=>d=x,handleDragStart:x=>w(d,x),get children(){return[p(_a,{toggleOpen:f}),p(ti,{get isOpen(){return a()}})]}})}})]}}),null),h(y,p(ri,{}),null),y}})}})}export{si as default};
