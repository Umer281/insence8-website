window.onload=function(){
let value1=document.getElementById('value1');
let value2=document.getElementById('value2');
let value3=document.getElementById('value3');

let inpS=document.getElementById('inpS');
let btn=document.getElementById('btn');

let values=['🎅','😁','😎 ','🥰','🤑','👩‍🦰','👳‍♀️'];


function getRandomValue(){ 
  console.log("hello");
  return values[Math.floor(Math.random() * 7)];

}
/*THIS updateAniamtion function changes the timeinterval by which values (emogies in this) are changing 
 here newSpeed will get an value which we are changing in box ie input(event.target.value)*/
let animationId;
function updateAnimation(newspeed){ 
  if(animationId) clearInterval(animationId);

  setInterval(function(){ 
   value1.innerText=getRandomValue();
   value2.innerText=getRandomValue();
   value3.innerText=getRandomValue();



  },1000/newspeed)

}

/*setInterval(function(){ 
 value1.innerText=getRandomValue();
 value2.innerText=getRandomValue();
 value3.innerText=getRandomValue();


},300)*/

btn.onclick=function(){ 
 let val1=getRandomValue();
 let val2=getRandomValue();
 let val3=getRandomValue();
 let win=document.getElementById('win');
 if(val1==val2 && val2==val3){
 console.log(val1,val2,val3);
 win.innerText="YOU WON";
 
 

 }else{ 
     win.innerText="";

 }
}

inpS.onchange=function(event){ 

    /*document.documentElement is root of document let root = document.documentElement
   document.documentElement wil be root in css file and the function document.documentElement.style.setProperty 
   takes two arguments first the  css variable who's value we can change and 2nd by which we want to change.
   here we are updating spped var with the value of input box which we change everytime */

    document.documentElement.style.setProperty('--speed',event.target.value);
    updateAnimation(event.target.value);

                             }
}
