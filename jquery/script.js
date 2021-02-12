$(function(){ 

  $('#prepend').click(function(){ 
   let text=$('#item').val();
   $('#list').prepend($('<li>').text(text));
  

 })
   
 $('#append').click(function(){ 
     let text=$('#item').val();
     $('#list').append($('<li>').text(text));
    
  
   })
     



 })


   /*2nd method  *?
// $(function(){ 


// let list=$('#list');
// $('#append').click(() => {
//     let text = $('#item').val();
//     list.append($('<li>').text(text));
//   })




// })

