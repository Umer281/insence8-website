// window.onload=function(){ 
//     let newtask=document.getElementById('newtask');
//     let addtask=document.getElementById('addtask');
//     let todolist=document.getElementById('todolist');

//    addtask.onclick=function(){ 
   
//     let li=document.createElement('li');
//     li.innerText=newtask.value;
//     let btn=document.createElement('button');
//     btn.innerText='*';
//     li.appendChild(btn);
//     todolist.appendChild(li);
//     btn.onclick=function(event){ 
//      console.log(event.target.parentElement.remove());

//     }

//    }

// }
window.onload=function(){ 
let newtask=document.getElementById('newtask');
let addtask=document.getElementById('addtask');
let todolist=document.getElementById('todolist');


 addtask.onclick=function(){ 
   let li=document.createElement('li');
   /*add cross button */
   let btn=document.createElement('button');
   btn.innerText='✖';
   btn.onclick=function(event){ 
     event.target.parentElement.remove(); 
   }
    /*add text*/
   let taskspan=document.createElement('span');
   taskspan.innerText=newtask.value;
  
    /*add up button*/
   let upbtn=document.createElement('button');
   upbtn.innerText='⇮';
   upbtn.onclick=function(event){ 
    event.target.parentElement.parentElement.insertBefore(
      event.target.parentElement,
      event.target.parentElement.previousElementSibling
    )
   }
  
   /*DOWN BUTTON*/
    let dwn_btn=document.createElement('button');
    dwn_btn.innerText='🔰';
    dwn_btn.onclick=function(event){ 
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement.nextElementSibling,event.target.parentElement
      )
    }

   li.appendChild(btn);
   li.appendChild(upbtn);
   li.appendChild(taskspan);
   li.appendChild(dwn_btn);


   todolist.appendChild(li);
   


 }






}