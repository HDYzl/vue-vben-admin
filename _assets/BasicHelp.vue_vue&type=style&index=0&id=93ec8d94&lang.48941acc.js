import{k as t,v as e,cs as o,a,q as r,au as s,s as n,d9 as i,f as l,dv as c,S as f,d3 as p}from"./index.54b7cc7b.js";import{T as u}from"./index.3d154f97.js";import{g as d}from"./tsxHelper.948ab144.js";var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var y=function(a,r){var s=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),a.forEach((function(e){b(t,e,o[e])}))}return t}({},a,r.attrs);return t(o,e(s,{icon:m}),null)};y.displayName="InfoCircleOutlined",y.inheritAttrs=!1;var g=a({name:"BasicHelp",components:{Tooltip:u},props:{maxWidth:r.string.def("600px"),showIndex:r.bool,color:r.string.def("#ffffff"),fontSize:r.string.def("14px"),placement:r.string.def("right"),absolute:r.bool,text:{type:[Array,String]},position:{type:[Object],default:()=>({position:"absolute",left:0,bottom:0})}},setup(t,{slots:e}){const{prefixCls:o}=s("basic-help"),a=n((()=>({maxWidth:t.maxWidth}))),r=n((()=>({color:t.color,fontSize:t.fontSize}))),m=n((()=>t.absolute?t.position:{})),b=()=>{const e=t.text;return f(e)?i("p",e):p(e)?e.map(((e,o)=>i("p",{key:e},[t.showIndex?`${o+1}. `:"",e]))):null};return()=>i(u,{title:i("div",{style:l(r)},[b()]),overlayClassName:`${o}__wrap`,autoAdjustOverflow:!0,overlayStyle:l(a),placement:t.placement,getPopupContainer:()=>c()},{default:()=>i("span",{class:o,style:l(m)},d(e)||i(y))})}});export{g as s};