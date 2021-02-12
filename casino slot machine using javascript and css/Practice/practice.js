$(function(){ 
let val1=$('#value1');
let val2=$('#value2');
let val3=$('#value3');
let input=$('#inpS');


//let imgvalues=['download0.png','download1.png','download2.png','download3.png','download4.png','download5.png','download7.png','download8.png','download9.png'];
  let imgvalues=['🎅','😁','😎 ','🥰','🤑','👩‍🦰','👳‍♀️','🕵️‍♂️','👮‍♀️'];

function getRandomValue(){ 
     return imgvalues[Math.floor(Math.random()*9)];
  
}


  
//  setInterval(() => {
//     value1.innerText=getRandomValue();
//     value2.innerText=getRandomValue();
//     value3.innerText=getRandomValue();


    
// },1000)
let animationId;
function updateAnimation(newspeed){ 
if(animationId) clearInterval(animationId);
 
setInterval(() => {
     val1.val(getRandomValue());
     val2.val(getRandomValue());
     val3.val(getRandomValue());
   
},1000/newspeed);

}

$('#inpS').change(function(){ 

    document.documentElement.style.setProperty('--speed',event.target.value);
    updateAnimation(event.target.value);
})



})