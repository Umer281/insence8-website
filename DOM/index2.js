// window.onload=function(){ 
//     let num=document.getElementById('num');
//     let print=document.getElementById('print');
//     let list=document.getElementById('list');
   
//     print.onclick=function(){ 

//      let n=parseInt(num.value);
//     // let listHTML='';
//      let start_time=new Date();
//   //    for(let i=1;i<=n;i++){ 
//   //      listHTML +='<li>'+ val +'</li>';
//   //   }
//   //   list.innerHTML =listHTML;
//   //   let endtime=new Date();
//   //   let totaltime=endtime-start_time;
//   //   console.log(totaltime);
//   // }
//   for(let i=1;i<=n;i++){ 
//     let item=document.createElement('li');
//     item.innerText=i;
//     list.appendChild(item);
//    }
//     let endtime=new Date();
//      let totaltime=endtime-start_time;
//      console.log(totaltime);
  

//   }

// } 

window.onload=function(){ 
let num=document.getElementById('num');
let print=document.getElementById('print');
let list=document.getElementById('list');

print.onclick=function(){ 
    
  let n=parseInt(num.value);
  let starttime=new Date();
  for(let i=0;i<n;i++){ 
   
   
  }
  let endtime=new Date();
  tt=endtime-starttime;
  console.log(tt);




}




}