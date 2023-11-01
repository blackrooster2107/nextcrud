"use strict";(()=>{var e={};e.id=802,e.ids=[802],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6768:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>l,originalPathname:()=>w,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>m,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>g});var n={};a.r(n),a.d(n,{DELETE:()=>DELETE,GET:()=>GET,POST:()=>POST});var o=a(884),r=a(6132),s=a(4357),i=a(2413),c=a(5798);async function POST(e){let{title:t,description:a}=await e.json();return await (0,s.Z)(),await i.Z.create({title:t,description:a}),c.Z.json({message:"Item created"},{status:201})}async function GET(){await (0,s.Z)();let e=await i.Z.find();return c.Z.json({items:e})}async function DELETE(e){let t=e.nextUrl.searchParams.get("id");return await (0,s.Z)(),await i.Z.findByIdAndDelete(t),c.Z.json({message:"Item deleted"},{status:200})}let u=new o.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/items/route",pathname:"/api/items",filename:"route",bundlePath:"app/api/items/route"},resolvedPagePath:"/home/ian/Projects/NextJs/crudapp/app/api/items/route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:d,staticGenerationAsyncStorage:p,serverHooks:m,headerHooks:l,staticGenerationBailout:g}=u,w="/api/items/route"},4357:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1185),o=a.n(n);let connectMongoDb=async()=>{try{await o().connect(process.env.MONGODB_URI),console.log("connected to mongoDB")}catch(e){console.log(e)}},r=connectMongoDb},2413:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1185),o=a.n(n);let r=new n.Schema({title:String,description:String},{timestamps:!0}),s=o().models.Item||o().model("Item",r),i=s}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[126,107],()=>__webpack_exec__(6768));module.exports=a})();