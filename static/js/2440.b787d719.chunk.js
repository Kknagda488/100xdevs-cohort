"use strict";(self.webpackChunktms_frontend=self.webpackChunktms_frontend||[]).push([[2440],{92440:(a,e,t)=>{t.r(e),t.d(e,{default:()=>s});var n=t(58513),r=t(70039),i=t(72791),c=t(80184);const s=()=>{const[a,e]=(0,i.useState)([{id:1,programName:"Program A",batchesName:"Batch 1",month:"Jan",noOfBatches:2,countOfAttendance:50,participantsDay1:25,participantsDay2:25},{id:2,programName:"Program B",batchesName:"Batch 2",month:"Jan",noOfBatches:3,countOfAttendance:70,participantsDay1:35,participantsDay2:35},{id:3,programName:"Program A",batchesName:"Batch 1",month:"Feb",noOfBatches:2,countOfAttendance:55,participantsDay1:30,participantsDay2:25},{id:4,programName:"Program B",batchesName:"Batch 2",month:"Feb",noOfBatches:3,countOfAttendance:75,participantsDay1:40,participantsDay2:35}]),t=a=>(a.participantsDay1+a.participantsDay2)/2,s=(a,e)=>(a-e)/e*100;a.map((a=>({...a,averageParticipantsDay1:t(a),averageParticipantsDay2:t(a),percentChangeParticipants:s(a.participantsDay2,a.participantsDay1),percentChangeBatches:s(a.noOfBatches)})));return(0,c.jsx)("div",{style:{height:400,width:"100%",marginTop:"40px"},children:(0,c.jsx)(n._$,{rows:a,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,columns:[{field:"programName",headerName:"Program Name",flex:1},{field:"batchesName",headerName:"Batches Name",flex:1},{field:"month",headerName:"Month",flex:1},{field:"noOfBatches",headerName:"No. of Batches",type:"number",flex:1},{field:"countOfAttendance",headerName:"Count of Attendance",type:"number",flex:1},{field:"participantsDay1",headerName:"Participants Day 1",type:"number",flex:1},{field:"participantsDay2",headerName:"Participants Day 2",type:"number",flex:1}],slots:{toolbar:r.n},slotProps:{toolbar:{showQuickFilter:!0}}})})}}}]);
//# sourceMappingURL=2440.b787d719.chunk.js.map