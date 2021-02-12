$(function(){   
let addbtn=$('#btnadd');
let resetbtn=$('#btnreset');
let newtask=$('#inpnewtask');
let todolist=$('#listTask');
let sortbtn=$('#btnsort');
let cleanupbtn=$('#btncleanup');

//functionality to add button first method
// addbtn.click(function(){ 
//   let item=$('<li>',{
//   'class':'list-group-item',
//   text:newtask.val()
//   });
//   todolist.append(item);
//   item.click(function(event) {
//     $(event.target).toggleClass('done');
//   })

 
// })
//function to add items
function additem(){ 
    let item=$('<li>',{
        'class':'list-group-item',
         text:newtask.val()
    });
    todolist.append(item);

    item.click(function(event){ 
        $(event.target).toggleClass('done');
    })
}
 
 //function to handle enter button
 newtask.keypress(function(event){ 
      if(event.which==13){ 
         additem();
      }
  })
  
  //function to clear the done tasks
  function cleantasks(){ 
    $('#listTask .done').remove();
  }

  //function to sort the elements
  function sort(){ 
   let items=$('#listTask .done').appendTo('#listTask');
  } 

//  .....function for disable......

//  function togglereset(enabled){ 
//   if(enabled)  resetbtn.prop('disabled',false)
//   else resetbtn.prop('disabled',true);
//  }

//....fuction call for disable.........

//  newtask.on('input',function(){
//     togglereset(newtask.val()!='');
// })


function toggleinput(valisempty){
  if(valisempty){ 
      addbtn.prop('disabled',true);
      resetbtn.prop('disabled',true);
  }else{ 
      addbtn.prop('disabled',false);
      resetbtn.prop('disabled',false);
  }

}


newtask.on('input',function(){ 
    
        toggleinput(newtask.val()=='');
    
})

//  function call to add items

addbtn.click(additem);

 //functiona call to reset button

resetbtn.click(function(){
    newtask.val('');
})
//function call to clear the done tasks
cleanupbtn.click(cleantasks);

//function call to sort items
sortbtn.click(sort)








})

