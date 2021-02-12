// $(function(){ 
//    let list=$("#person");
//    let page=1;
//     $('#fetch').click(function(){ 
//        $.get(`https://reqres.in/api/users?page=${page}`,(data) => {  
//           page++;
//         for(let person of data.data){
        
//             list.append($(`<li> 
//              <img src="${person.avatar}">
//             ${person.first_name} ${person.last_name}</li>`));





//         /*  let names=$(`<li> ${person.first_name} ${person.last_name}</li>`);
//           list.append(names);*/
            
//         }
//        })




//     })

//})
$(function(){ 
let page=1;
$('#fetch').click(function(){ 
   $.get(`https://reqres.in/api/users?page=${page}`,(data) =>{ 
    page++;
   for(let person of data.data){
     $('#person').append($(`<li> <img src="${person.avatar}"> ${person.first_name} ${person.last_name}</li>`));
   

   }


   })


})







})




