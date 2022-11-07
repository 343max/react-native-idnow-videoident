"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>v,default:()=>T,frontMatter:()=>h,metadata:()=>b,toc:()=>y});var a=n(7462),r=n(7294),i=n(3905),o=n(6010),l=n(2389),s=n(7392),d=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:l,defaultValue:m,values:k,groupId:f,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,d.U)(),[T,O]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(I(t),O(a),null!=f&&w(f,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:_,onClick:E},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function k(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function g(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,a),hidden:n},t)}const h={sidebar_position:0},v="Getting started",b={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Requirements",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/react-native-idnow-videoident/docs/getting-started",draft:!1,editUrl:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/react-native-idnow-videoident/docs/api/modules"}},N={},y=[{value:"Requirements",id:"requirements",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Installation",id:"installation",level:2},{value:"Bare Workflow",id:"bare-workflow",level:3},{value:"iOS",id:"ios-1",level:4},{value:"Android",id:"android-1",level:4},{value:"Expo",id:"expo",level:3},{value:"Usage",id:"usage",level:2}],w={toc:y};function T(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployment Target"),": iOS 12.4 or later")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minSdkVersion"),": 21 (Android 5.0 Lollipop)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targetSdkVersion"),": 31 (Android 12.0 Snow Cone)")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"bare-workflow"},"Bare Workflow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @tokenstreet/react-native-idnow-videoident --tilde\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @tokenstreet/react-native-idnow-videoident --save-exact\n")),(0,i.kt)("admonition",{parentName:"li",title:"versioning",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We do not follow ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0")," until ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," is landed. Breaking changes in minor updates are possible.\nTherefore, it is recommended to install this package with a locked minor version.")))),(0,i.kt)("h4",{id:"ios-1"},"iOS"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Make sure you use the build type ",(0,i.kt)("inlineCode",{parentName:"li"},"static_framework"),". This can be implemented for the individual pods, or for all pods with the ",(0,i.kt)("inlineCode",{parentName:"li"},"use_frameworks!")," directive.")),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(g,{value:"only_necessary_pods",label:"Only necessary pods",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'$static_library = %w[IDnowSDK Masonry SocketRocket libPhoneNumber-iOS FLAnimatedImage AFNetworking]\n\npre_install do |installer|\n    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n    installer.pod_targets.each do |pod|\n        bt = pod.send(:build_type)\n        if $static_library.include?(pod.name)\n            puts "Overriding the build_type to static_framework from static_library for #{pod.name}"\n            def pod.build_type\n                Pod::BuildType.static_framework\n            end\n        end\n    end\n    installer.pod_targets.each do |pod|\n        bt = pod.send(:build_type)\n        puts "#{pod.name} (#{bt})"\n        puts "  linkage: #{bt.send(:linkage)} packaging: #{bt.send(:packaging)}"\n    end\nend\n'))),(0,i.kt)(g,{value:"all_pods",label:"All pods",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"use_frameworks! linkage: :static\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is strongly discouraged to use ",(0,i.kt)("inlineCode",{parentName:"p"},"use_frameworks! linkage: :static")," to override the build type for all pods,\nbecause it makes Flipper stop working and often creates problems with other packages,\nsuch as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-skia/issues/652"},(0,i.kt)("inlineCode",{parentName:"a"},"@shopify/react-native-skia"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getsentry/sentry-react-native/issues/2353"},(0,i.kt)("inlineCode",{parentName:"a"},"sentry-react-native")),"."),(0,i.kt)("p",{parentName:"admonition"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.ios/issues/119"},"issue")," has already been created in their repository,\nand the issue has also been passed on to the IDnow support team.")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the iOS dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pod install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following properties to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Allow microphone access for video identification</string>\n<key>NSCameraUsageDescription</key>\n<string>Allow camera access for video identification</string>\n")))),(0,i.kt)("h4",{id:"android-1"},"Android"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the IDnow maven url to your top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'allprojects {\n    repositories {\n        ...\n        jcenter() {\n            // JCenter is now read-only. Therefore, no new versions are published there any more.\n            // We only fetch the necessary dependencies for IDnow from JCenter to avoid loading old dependencies.\n            content {\n                includeModule("me.relex", "circleindicator")\n                includeModule("com.github.barteksc", "android-pdf-viewer")\n            }\n        }\n        maven() {\n            url "https://raw.githubusercontent.com/idnow/de.idnow.android/master"\n            content {\n                includeModule("de.idnow.sdk", "idnow-android-sdk")\n                includeModule("de.idnow.insights", "idnow-android-insights-sdk")\n            }\n        }\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following permissions to your ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," (click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#androidmanifest"},"here")," for more details):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>\n<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.FLASHLIGHT" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.BLUETOOTH"/>\n<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unfortunately, it is not yet possible to customise the colours for Android via JavaScript. To edit them, please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#colors"},"official guide"),"."))),(0,i.kt)("h3",{id:"expo"},"Expo"),(0,i.kt)("admonition",{title:"experimental",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please be aware that Expo support is experimental and not officially supported.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install @tokenstreet/react-native-idnow-videoident\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," and update your plugins section (",(0,i.kt)("inlineCode",{parentName:"p"},"expo install")," would not do it for you, due to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/17918"},"expo install skips scoped packages #17918"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": ["@tokenstreet/react-native-idnow-videoident"]\n}\n')))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"startVideoIdent")," is asynchronous. For a successful identification the ",(0,i.kt)("inlineCode",{parentName:"p"},"resultCode")," is returned directly. If the identification failed, an error is thrown with a ",(0,i.kt)("inlineCode",{parentName:"p"},"resultCode"),". Also, an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"errorMessage")," can be included."),(0,i.kt)("p",null,"You have the possibility to integrate it with a ",(0,i.kt)("code",null,"try...catch")," block, with ",(0,i.kt)("code",null,"Promises")," or with callbacks:"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(g,{value:"try_catch",label:(0,i.kt)("code",null,"try...catch"),default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\ntry {\n    const { resultCode } = await IdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' });\n    console.log(resultCode);\n} catch (error) {\n    if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n        const identificationError = error as IIdentificationErrorResult;\n        console.log(identificationError.resultCode);\n        console.log(identificationError.errorMessage);\n    }\n}\n"))),(0,i.kt)(g,{value:"promises",label:(0,i.kt)("code",null,"Promises"),mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nIdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' })\n    .then(({ resultCode }) => console.log(resultCode))\n    .catch((error) => {\n        if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n            const identificationError = error as IIdentificationErrorResult;\n            console.log(identificationError.resultCode);\n            console.log(identificationError.errorMessage);\n        }\n    });\n"))),(0,i.kt)(g,{value:"callbacks",label:"Callbacks",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nvoid IdnowManager.startVideoIdent(\n    { transactionToken: 'YOUR_TRANSACTION_TOKEN' },\n    {\n        onSuccess: ({ resultCode }) => console.log(resultCode),\n        onError: ({ resultCode, errorMessage }) => console.log(`${resultCode}\\n${errorMessage}`),\n    }\n);\n")))),(0,i.kt)("p",null,"All configuration options are documented in the ",(0,i.kt)("a",{parentName:"p",href:"api/interfaces/ISettings"},"TypeScript interfaces")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/main/example/src/createFullSettings.ts"},"an example")," is also available."))}T.isMDXComponent=!0}}]);