"use strict";(self.webpackChunktms_frontend=self.webpackChunktms_frontend||[]).push([[9018],{38487:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(64802),o=a(34045);class l{static exportToXlsx(e,t){const a={Sheets:{data:o.P6.json_to_sheet(e)},SheetNames:["data"]},l=o.cW(a,{bookType:"xlsx",type:"array"}),s=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});n.saveAs(s,t+".xlsx")}static exportAoaToXlsx(e,t){const a=o.P6.aoa_to_sheet(e),l=o.P6.book_new();o.P6.book_append_sheet(l,a,"Sheet1");const s=o.cW(l,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});n.saveAs(r,t+".xlsx")}}},66468:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(72791),o=a(18622),l=a(29655),s=(a(64802),a(72426),a(5462),a(42978),a(666),a(34045)),r=(a(7161),a(58241)),i=a(38487),c=a(80184);const d=()=>{const[e,t]=(0,n.useState)([]),{userData:a,signOut:d}=(0,r.aC)(),[m,u]=(0,n.useState)([]),[x,p]=(0,n.useState)([]),[h,f]=(0,n.useState)(null),[g,v]=(0,n.useState)([]),[y,w]=(0,n.useState)([]),[C,N]=(0,n.useState)([]),[b,L]=(0,n.useState)(null),[j,S]=(0,n.useState)([]),[T,P]=(0,n.useState)([]),[k,A]=(0,n.useState)([]),[D,Z]=(0,n.useState)(null);(0,n.useEffect)((()=>{_(),h&&B()}),[e]);const _=()=>{fetch("".concat("http://localhost:8000","/api/clients/listofclient?filter=%7B%22search%22%3A%22%22%7D&access_token=").concat(null===a||void 0===a?void 0:a.accessToken)).then((async e=>{const t=await e.json();if(!e.ok){const a=t&&t.message||e.statusText;return Promise.reject(a)}u(t.data)})).catch((e=>{u([]),console.error("There was an error!",e),"Token Expired"===e&&d()}))},M=null===m||void 0===m?void 0:m.map((e=>({data:null===e||void 0===e?void 0:e.client_id,label:null===e||void 0===e?void 0:e.client_name}))),O=null===x||void 0===x?void 0:x.map((e=>({data:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.programName}))),B=()=>{fetch("".concat("http://localhost:8000","/api/programs/listofProgramName?id=").concat(h,"&filter=%7B%22search%22%3A%22%22%7D&access_token=").concat(null===a||void 0===a?void 0:a.accessToken)).then((async e=>{const t=await e.json();if(!e.ok){const a=t&&t.message||e.statusText;return Promise.reject(a)}p(t.data)})).catch((e=>{p([]),console.error("There was an error!",e)}))},E={container:e=>({...e,flex:1}),control:e=>({...e,border:"1px solid rgb(209 213 219)",boxShadow:"none","&:hover":{border:"1px solid rgb(17 24 39)"}}),input:e=>({...e,color:"rgb(75 85 99)",paddingLeft:"6px",paddingBottom:"3px",fontSize:"1rem",lineHeight:"1.25rem"}),placeholder:e=>({...e,color:"#a1a9bb",paddingLeft:"6px",fontSize:"0.870rem",lineHeight:"1.25rem"})};function R(e){let t=[["Sr.No","Email","Name","Attendance Date","Training Name","Training Start Date","Training Start Time","Training End Date","Training End Time","Trainer Name","Venue Name"]];console.log("allExportAttendenceData",e),e.forEach(((e,a)=>{let n=[a+1,(null===e||void 0===e?void 0:e.email)||"",(null===e||void 0===e?void 0:e.name)||"",(null===e||void 0===e?void 0:e.attendanceDate)||"",(null===e||void 0===e?void 0:e.trainingName)||"",(null===e||void 0===e?void 0:e.trainingStartDate)||"",(null===e||void 0===e?void 0:e.trainingStartTime)||"",(null===e||void 0===e?void 0:e.trainingEndDate)||"",(null===e||void 0===e?void 0:e.trainingEndTime)||"",(null===e||void 0===e?void 0:e.trainerName)||"-",(null===e||void 0===e?void 0:e.venueName)||"-"];t.push(n)})),console.log(t),i.Z.exportAoaToXlsx(t,"Attendance-Report-".concat(Date.now()))}async function V(e){const t=e.map((e=>({"Program Name":e.programName,Batch:e.batch,"Batch Type":e.BatchType,Time:e.Time,"Total Nomination/List":e.totalNomination,"No.of Participants- Day-1":e.noOfParticipantsDay1,"No.of Participants Day-2":e.noOfParticipantsDay2,"Trainer Name":e.trainerName,Date:e.date,Day:e.day,"Average Score(Out of 20)-Pre-Assessment":e.averagePreAssessmentScore,"Average Score(Out of 20)-Post Assessment":e.averagePostAssessmentScore," Overall Program Rating  ":e.overallProgramRating,"":""})));console.log("click",e,t);var a=function(e,t){console.log(e,"getsheetData");var a=e.map((e=>Object.keys(e).length)),n=a.indexOf(Math.max.apply(null,a));console.log(e[n]);var o=Object.keys(e[n]),l=e.map((function(e){return o.map((function(t){return e[t]?e[t]:""}))}));return l.unshift(t),l}(t,["Program Name","Batch","Batch Type","Time","Total Nomination/List","No.of Participants- Day-1","No.of Participants Day-2","Trainer Name","Date","Day","Average Score(Out of 20)-Pre-Assessment","Average Score(Out of 20)-Post Assessment","Overall Program Rating"]),n=s.P6.aoa_to_sheet(a),o=s.P6.book_new();s.P6.book_append_sheet(o,n,"Sheet1");var l=s.NC(o,"".concat(l,".xlsx"))}console.log(null===g||void 0===g?void 0:g.data,"S");const[F,G]=(0,n.useState)([]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"flex flex-col w-full min-h-screen ",children:(0,c.jsxs)("div",{className:"flex flex-col shadow-md rounded-md bg-white w-full h-fit mt-12  px-12",children:[(0,c.jsx)("label",{className:"leading-loose items-center justify-center flex w-full font-medium text-xl my-3 text-gray-700 text-center",children:"Generate Attendance report"}),(0,c.jsxs)("div",{className:"flex items-center  w-full ",children:[(0,c.jsx)("label",{className:"text-gray-700 font-medium text-md w-44",children:"Client Name*"}),(0,c.jsx)("div",{className:"relative focus-within:text-gray-600 w-full text-gray-400",children:(0,c.jsx)(o.ZP,{options:M,onChange:e=>{t(e),f(e.data),v([]),L(null)},value:e,styles:E,getOptionValue:e=>e.data,placeholder:"Select Client"})}),(0,c.jsx)("input",{type:"text",name:"clientName",className:"hidden px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600",placeholder:"Client Name",required:!0,defaultValue:null===e||void 0===e?void 0:e.label})]}),(0,c.jsxs)("div",{className:"flex items-center  w-full mt-3",children:[(0,c.jsx)("label",{className:"text-gray-700 font-medium text-md w-44",children:"Program Name*"}),(0,c.jsx)("div",{className:"relative focus-within:text-gray-600 w-full text-gray-400",children:(0,c.jsx)(o.ZP,{options:O,onChange:e=>{v(e),L(e.data)},value:g,styles:E,getOptionValue:e=>e.data,placeholder:"Select Program"})}),(0,c.jsx)("input",{type:"text",name:"programName",className:"hidden px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600",placeholder:"Program Name",required:!0,defaultValue:g.label})]}),(0,c.jsx)("div",{className:"flex items-start py-4 ",children:(0,c.jsxs)("div",{className:"flex flex-col items-left ml-4 w-1/2",children:[(0,c.jsx)("div",{className:"flex items-center w-full",children:(0,c.jsx)("input",{type:"text",name:"clientName",className:"hidden px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600",placeholder:"Client Name",required:!0,defaultValue:null===e||void 0===e?void 0:e.label})}),(0,c.jsx)("button",{onClick:()=>(async()=>{if(0==e.length)return l.Am.warn("No Client Name Selected");if(0==g.length)return l.Am.warn("No Program Name Selected");var t=document.getElementById("generate");t.disabled=!0,t.className="h-8 mt-4 w-fit px-6 ml-8 text-white rounded-md bg-gray-500 cursor-not-allowed ",t.innerText="Please Wait...",console.log("selectedProgram.data++++++++++++++++++",g.data);const n={clientName:e.label,programName:g.label,programId:g.data};var o;let s=new URLSearchParams(Object.entries(n)).toString();o=await fetch("".concat("http://localhost:8000","/api/reports/attendanceReport?access_token=").concat(null===a||void 0===a?void 0:a.accessToken),{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:s});const r=await o.json();o.ok?404===r.code?console.error(r.msg):null!==r&&void 0!==r&&r.data?(l.Am.success(null===r||void 0===r?void 0:r.message),R(r.data)):l.Am.warn("No Reports Available!"):console.log("er"),t.disabled=!1,t.className="h-8 mt-4 w-fit px-6 ml-8 text-white rounded-md bg-green-500 cursor-pointer",t.innerText="Generate Report"})(),id:"generate",className:"h-8 mt-4 w-fit px-6 ml-8 text-white rounded-md bg-green-500 cursor-pointer",children:"Generate Report"}),D?(0,c.jsxs)("div",{className:"ml-8 break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[27rem] p-4 my-4 bg-[#5E17F4] text-white",children:[(0,c.jsx)("span",{id:"reportfor",children:D.report}),(0,c.jsxs)("div",{className:"flex flex-row items-center space-x-3",children:[(0,c.jsxs)("svg",{width:"58",height:"56",viewBox:"0 0 52 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M32.6458 38.4379C33.9918 37.1198 33.2655 34.0922 31.0668 30.5948C31.8658 30.4707 32.6129 30.281 33.178 29.9905C35.2112 28.9466 36.584 27.044 37.6232 25.0759C38.7403 22.9647 39.49 20.644 40.9477 18.7215C41.1939 18.3966 41.44 18.1052 41.6853 17.831C44.8304 18.206 47.3412 18.8784 47.3412 18.8784L48.3006 16.4534C47.0896 16.0212 45.848 15.6791 44.586 15.4302C45.3591 14.9931 45.8635 14.8569 45.8635 14.8569L44.9543 12.4121C43.4966 13.025 42.3136 13.9293 41.323 15.0121C37.6206 14.806 33.8921 15.5397 30.9506 17.8086C28.7389 19.5155 27.2447 21.8819 25.839 24.2491C24.5935 23.0333 23.2671 21.9023 21.8688 20.8638C22.134 20.4302 22.4182 20.0405 22.7242 19.7397C24.5728 17.9293 27.0116 16.7716 28.6115 14.7C31.9742 10.35 29.5146 3.53103 26.7481 0C26.2524 0.475 25.4325 1.16724 24.8155 1.71379C27.7561 4.70948 29.8127 9.95431 27.5082 13.8733C26.2203 16.0638 23.8404 17.4379 22.1764 19.3198C21.8887 19.6466 21.6313 20.0603 21.3982 20.5172C17.0466 17.4129 13.053 16.1638 11.4704 17.7138C11.3133 17.8737 11.1838 18.0584 11.0874 18.2603L11.0813 18.2543L11.0388 18.3776C10.9799 18.5112 10.9261 18.65 10.8897 18.8017L0 50L31.774 38.95L31.7653 38.9414C32.1068 38.8319 32.4075 38.6707 32.6458 38.4379ZM6.32065 45.9759L3.66863 44.7465L5.45831 39.6172L13.6666 43.4207L6.32065 45.9759ZM21.0116 40.8664L7.24972 34.4879L9.0394 29.3595L19.3233 34.494C13.1847 30.5198 10.8291 24.2293 10.8291 24.2293L11.441 22.4767C12.5286 25.2138 14.9215 28.6224 18.2097 31.8397C21.5256 35.0862 25.0399 37.4379 27.8488 38.4888L21.0116 40.8664ZM26.2975 24.7112C27.7344 22.6621 29.2156 20.594 31.2748 19.1224C33.2352 17.7207 36.4176 17.4647 39.4345 17.6328C38.4153 19.4034 37.6622 21.3681 36.9861 23.2552C36.1689 25.5397 35.0734 27.9086 32.9847 29.3095C32.4214 29.6871 31.6318 29.9629 30.7886 30.1672C29.6298 28.4009 28.1097 26.5336 26.2975 24.7112Z",fill:"white"}),(0,c.jsx)("path",{d:"M18.2287 16.3793C19.0971 16.3793 16.4937 13.7931 16.9287 11.525C18.5962 11.3974 22.4078 12.1448 20.1892 9.11379C22.699 9.55345 23.9991 7.68966 21.6296 5.92328C22.4182 5.97845 23.6437 4.49914 22.764 4.31207C19.9456 3.7181 18.8423 5.23448 20.6312 7.42155C18.7505 7.07328 17.2173 7.9431 18.63 9.89655C13.1994 9.22328 16.2891 16.3793 18.2287 16.3793ZM36.8726 14.081C37.6864 13.7155 36.3058 11.3009 35.8569 10.6836C39.2915 10.3181 39.1615 9.3 37.0078 7.11897C42.8631 7.31466 37.1889 4.00431 37.9846 2.69397C38.6736 1.55776 40.7874 2.74914 40.5915 2.11638C39.9311 0 33.6668 1.43103 37.631 5.38276C34.1712 5.45 33.8393 6.575 36.4176 8.9069C31.9265 8.95603 35.5908 14.6552 36.8726 14.081ZM51.7378 22.6078C50.3667 22.9897 50.1553 22.8466 50.3381 24.2043C47.1713 22.7543 43.8207 20.7379 45.854 26.0802C42.2573 23.95 42.4367 25.8155 41.7641 28.8853C40.8888 28.2069 39.6451 26.419 39.6451 26.419L38.3278 27.5319C38.3278 27.5319 40.7414 30.9181 41.9331 30.7259C42.9809 30.5578 43.5512 28.5879 43.6093 26.8517C46.946 28.2526 48.5432 28.4397 47.017 24.3431C49.6846 25.8336 52.9555 27.1483 51.7378 22.6078ZM3.50916 7.27328L5.96011 9.71207L3.50916 12.15L1.05734 9.71207L3.50916 7.27328ZM24.1005 26.5181L21.6478 28.956L19.1959 26.5164L21.6486 24.0776L24.1005 26.5181ZM13.1908 3.44828L15.6417 5.88621L13.1899 8.32586L10.7389 5.88621L13.1908 3.44828ZM39.8765 37.4862L37.4238 35.0474L39.8748 32.6078L42.3275 35.0466L39.8765 37.4862ZM34.4113 45.85L31.9603 43.4121L34.4113 40.9733L36.8631 43.4121L34.4113 45.85ZM45.1649 47.7759L42.7123 45.3371L45.1623 42.8974L47.615 45.3362L45.1649 47.7759ZM47.6159 36.669L45.1649 34.2302L47.6159 31.7922L50.0668 34.2302L47.6159 36.669ZM43.5243 6.03448L45.9753 8.47241L43.5235 10.9112L41.0725 8.47241L43.5243 6.03448Z",fill:"white"})]}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("span",{className:"text-base font-medium",children:"Reports Generated Successfully!"}),(0,c.jsx)("span",{id:"filename",className:" text-xs text-gray-300",children:null===D||void 0===D?void 0:D.filename})]})]}),(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("span",{id:"timerange",children:D.timerange}),(0,c.jsxs)("button",{onClick:()=>V(),className:"flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black",children:[(0,c.jsx)("span",{children:"Download"}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,c.jsx)("path",{d:"M5 12h13M12 5l7 7-7 7"})})]})]})]}):null]})})]})})})}}}]);
//# sourceMappingURL=9018.3480ee6a.chunk.js.map