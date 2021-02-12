function getName(){ 
    return document.getElementById('namebox').value
}

function creatgreeting(greeting){ 

   function greet(name){ 
       console.log(greeting,name());
   }

   return greet;
   //return greet('x ')

}
let g1=creatgreeting('good morning');
let g2 =creatgreeting('good evening');
