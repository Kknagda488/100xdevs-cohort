"use strict";(self.webpackChunktms_frontend=self.webpackChunktms_frontend||[]).push([[9284],{9284:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var l=a(72426),n=a.n(l),r=a(72791),i=a(39126),d=a(78820),m=a(16871),c=a(58241),t=a(80184);const o=function(){const{tenantKey:e}=(0,m.UO)(),[s,a]=(0,r.useState)([]),{userData:l}=(0,c.aC)(),[o,x]=(0,r.useState)({}),[h,p]=(0,r.useState)([]),[j,f]=(0,r.useState)(""),[u,g]=(0,r.useState)(null);return(0,r.useEffect)((()=>{}),[e]),(0,t.jsxs)("div",{className:"flex  relative flex-col w-full min-h-screen  bg-white",children:[(0,t.jsxs)("div",{className:"block sm:flex justify-between items-center mt-8 mx-3",children:[(0,t.jsx)("img",{src:"/LSS Logo.png",className:"sm:mx-0 mx-auto",style:{height:"5.5rem"}}),(0,t.jsx)("img",{src:"/IDFC-logo-website.jpg",className:"sm:mx-0 mx-auto",style:{height:"80px"}})]}),(0,t.jsx)("div",{className:"flex justify-center py-5 mb-5",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium mb-1",children:"Select program"}),(0,t.jsxs)("select",{className:"bg-gray-50 border py-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-80 p-2",onChange:e=>{const s=e.target.value;a(o[s])},onClick:async()=>{try{const a=await fetch("".concat("http://localhost:8000","/api/programs/listByCompany/").concat(e)),l=await a.json();var s={};l.data.map((e=>{s[e.programId]?s[e.programId].push(e):(s[e.programId]=[e],p((s=>[...s,{label:e.programName,value:e.programId}])))})),x(s)}catch(a){console.log(a)}},children:[(0,t.jsx)("option",{value:"",children:"Select program"}),h.map((e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value)))]})]})}),(0,t.jsxs)("div",{className:"shadow-lg mx-3",children:[(0,t.jsxs)("div",{className:"hidden md:flex bg-[#9d1d27] text-white py-2 px-5 ",children:[(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{})," ID"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{})," Name"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{})," Outline"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{}),"Start Date"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{})," End Date"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Training ",(0,t.jsx)("br",{})," Type"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Program ",(0,t.jsx)("br",{})," Location"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Nomination ",(0,t.jsx)("br",{})," due date"]})}),(0,t.jsx)("div",{className:"flex-1 p-2",children:(0,t.jsxs)("span",{children:["Registration ",(0,t.jsx)("br",{})," Link"]})})]}),s.length>0?(0,t.jsx)(t.Fragment,{children:s.map(((e,s)=>(0,t.jsxs)("div",{className:"block md:flex bg-white text-black py-2 px-5 rounded-sm md:rounded-none",children:[(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program Id:"}),(0,t.jsx)("p",{children:e.id})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program Name:"}),(0,t.jsx)("p",{children:e.programName})]}),null!==e&&void 0!==e&&e.programOutline?(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program Outline:"}),(0,t.jsx)("a",{href:e.programOutlineUrl,download:!0,children:(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("div",{className:"flex flex-col rounded  cursor-pointer",children:(0,t.jsx)("div",{className:"mb-2 ml-1",children:(0,t.jsx)(i.DWq,{size:30,color:"#9d1d27"})})})})})]}):null,(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program Start Date:"}),(0,t.jsxs)("p",{children:[n()(e.programStartDate).format("Do MMM YYYY"),(0,t.jsx)("br",{}),n()(e.programStartTime,"HH:mm:ss").format("hh:mm a")]})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program End Date:"}),(0,t.jsxs)("p",{children:[n()(e.programEndDate).format("Do MMM YYYY"),(0,t.jsx)("br",{}),n()(e.programEndTime,"HH:mm:ss").format("hh:mm a")]})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Training type:"}),(0,t.jsxs)("p",{children:[1==e.trainingType?"Class room training":null,2==e.trainingType?"Virtual Training":null]})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Program Location:"}),(0,t.jsx)("p",{children:e.location?e.location:"-"})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Nomination due date"}),(0,t.jsxs)("p",{children:[n()(e.nominationDate).format("Do MMM YYYY"),(0,t.jsx)("br",{}),n()(e.nominationTime,"HH:mm:ss").format("hh:mm a")]})]}),(0,t.jsxs)("div",{className:"flex-1 p-2",children:[(0,t.jsx)("span",{className:"font-medium mb-1 block md:hidden",children:"Registration Link:"}),(0,t.jsx)("a",{href:"/nominee-form/".concat(e.id),className:"bg-[#9d1d27] hover:bg-[#9d1d27] text-white font-bold py-2 px-4 rounded inline-block",target:"_blank",rel:"noreferrer",children:"Click here"})]})]},s)))}):null]}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{className:"p-2 mt-[120px]",children:(0,t.jsxs)("div",{className:"flex items-center justify-start space-x-1 mb-3",children:[(0,t.jsx)(d.SR5,{size:25,color:"#9d1d27"}),(0,t.jsx)("h2",{className:"italic font-medium",children:"No Intercity travel allowed"})]})})]})}}}]);
//# sourceMappingURL=9284.69041a5d.chunk.js.map