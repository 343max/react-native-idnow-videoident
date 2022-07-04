"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[559],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={id:"ConnectionTypeEnum",title:"Enumeration: ConnectionTypeEnum",sidebar_label:"ConnectionTypeEnum",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"api/enums/ConnectionTypeEnum",id:"api/enums/ConnectionTypeEnum",title:"Enumeration: ConnectionTypeEnum",description:"iOS header file:",source:"@site/docs/api/enums/ConnectionTypeEnum.md",sourceDirName:"api/enums",slug:"/api/enums/ConnectionTypeEnum",permalink:"/react-native-idnow-videoident/docs/api/enums/ConnectionTypeEnum",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ConnectionTypeEnum",title:"Enumeration: ConnectionTypeEnum",sidebar_label:"ConnectionTypeEnum",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AndroidLanguageEnum",permalink:"/react-native-idnow-videoident/docs/api/enums/AndroidLanguageEnum"},next:{title:"EnvironmentEnum",permalink:"/react-native-idnow-videoident/docs/api/enums/EnvironmentEnum"}},u={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"LONG_POLLING",id:"long_polling",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"WEBSOCKET",id:"websocket",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"iOS header file:\nThe type of connection used to get events from the backend"),(0,i.kt)("p",null,"iOS README:\nThe connection type to use to talk the backend. (Websocket)"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"long_polling"},"LONG","_","POLLING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"LONG","_","POLLING")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"LONG_POLLING"')),(0,i.kt)("p",null,"iOS header file:\nUse long polling"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/e35d9f1/src/model/enums/ConnectionTypeEnum.ts#L18"},"model/enums/ConnectionTypeEnum.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"websocket"},"WEBSOCKET"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"WEBSOCKET")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"WEBSOCKET"')),(0,i.kt)("p",null,"iOS header file:\nUse websockets using SocketRocket (default)"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/e35d9f1/src/model/enums/ConnectionTypeEnum.ts#L13"},"model/enums/ConnectionTypeEnum.ts:13")))}d.isMDXComponent=!0}}]);