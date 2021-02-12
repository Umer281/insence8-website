//function polymorpism i.e thisn function is polymorphic.here we have dynamic type taking arguments
function area(height,width){ 
    if(!width){ 
        return Math.PI=height*height;
    }
    return height*width;
}

function area2(){ 
    console.log(arguments[0],arguments[1]);
}

console.log(area(10));
console.log(area(4,5));
console.log(area2(3,4));

function getName(){ 
    return document.getElementById('namebox').value
}

function creatgreeting(greeting){ 

   function greet(name){ 
       console.log(greeting,name);
   }

   return greet;
   //return greet('x ')

}
let g1=creatgreeting('good morning');
let g2 =creatgreeting('good evening');
console.log(g1('umer'));
console.log(g2('farooq'))