import{a as e,r as i,i as s,o,j as t,w as r,k as a,v as d}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import{s as n}from"./index.a5bb273d.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import{u as m}from"./useForm.ba76dbfd.js";import{B as p,a as l}from"./index.611d4577.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicModal:p,BasicForm:n},setup(){const e=i({}),[s,{}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[o]=l((i=>{e.value={field2:i.data,field1:i.info}}));return{register:o,schemas:c,registerForm:s,model:e}}});j.render=function(e,i,n,m,p,l){const c=s("BasicForm"),j=s("BasicModal");return o(),t(j,d(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[a(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;