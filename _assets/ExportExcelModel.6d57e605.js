import{a as e,u as s,i as t,o,j as i,w as r,k as a,v as l}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import{s as n}from"./index.a5bb273d.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import{u as m}from"./useForm.ba76dbfd.js";import{B as c,a as p}from"./index.611d4577.js";const{t:d}=s(),u=[{field:"filename",component:"Input",label:d("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:d("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}];var x=e({components:{BasicModal:c,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const[t,{validateFields:o}]=m(),[i,{closeModal:r}]=p();return{schemas:u,handleOk:async function(){const e=await o(),{filename:t,bookType:i}=e;s("success",{filename:`${t.split(".").shift()}.${i}`,bookType:i}),r()},registerForm:t,registerModal:i,t:d}}});x.render=function(e,s,n,m,c,p){const d=t("BasicForm"),u=t("BasicModal");return o(),i(u,l(e.$attrs,{title:e.t("component.excel.exportModalTitle"),onOk:e.handleOk,onRegister:e.registerModal}),{default:r((()=>[a(d,{labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,onRegister:e.registerForm},null,8,["schemas","onRegister"])])),_:1},16,["title","onOk","onRegister"])};export default x;