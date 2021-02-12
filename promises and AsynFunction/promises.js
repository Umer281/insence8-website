//WORKING OF AYNCHRONOUS FUNCTION  

// function AsynFunction(callback){ 
  
//     setTimeout(function(){ 
//     console.log("start task");
//     callback();
//     },3000)
// }

// AsynFunction(setTimeout(function(){ 
//     console.log("after task has completed");
// },6000))

//******WORKING OF PROMISES*********
// function somePromesis(){ 
   
//     return new Promise(function(resolve,reject){ 
//       setTimeout(function(){ 
//           console.log("start promesis")
//       },6000)
//       resolve();
//     })
// }

// somePromesis().then(setTimeout(function(){ 
//     console.log("after promesis has ended ")
// },9000));

//promises ans asynchronous

// function someAyntask(callback){ 
//    console.log("start task");
//    setTimeout(function(){ 
//        console.log("task is comlpletd");
//        callback();
//    },3000)

// }
// let somepromises=function (){
//     return new Promise(function(resolve,reject){ 
//         someAyntask(resolve)
//     }) 

// }
// somepromises().then(setTimeout(() => {
//     console.log("after the task");
//  },9000))


function download(url){ 
  return new Promise(function(resolve,reject){ 
    console.log("start downlaod"+ url)
    if(!url.startsWith("https")){ 
        reject(new Error("error url does't start with http"))
    }else{ 
        
        setTimeout(() => {  //fake download task for 3 sec
           let filename=url.split("/").pop();
           resolve(filename);
        }, 3000);
    }

  })

}

function resize(filename){ 

    return new Promise(function(resolve,rejects){ 
      if(!filename.endsWith(".png")){ 
      reject(new Error("filename doestnot end with png"));

      }else{ 
          setTimeout(() => {   //fake 5 sec resize
              let resizefile=filename.split(".")[0] +"resized"+".png";
              resolve(resizefile);
          }, 5000);
      }

    })

}

function uploadfile(resizefile){ 
    return new Promise(function(resolve,reject){ 
        console.log("start upload"+resizefile)
        setTimeout(() => {   //fake upload of file
            let uploadedfile=resizefile.split(".")[0] +"uploded file"
            resolve(uploadedfile);
        }, 3000);
    })

}

// download("https//:www.myfilename.png").then(function(filename){ 
//     console.log(filename);
//     resize(filename).then(function(resizefile){ 
//         console.log("resized file is "+ resizefile);
//     })
    
// })    //***********      OR   ******* */

// download("https//:www.myfilename.png")
//         .then(resize)
//         .then(uploadfile)
//         .then(function(uploadedfile){ 
//             console.log("file is uploaded "+ uploadedfile);
//         }).catch(function(err){ 
//             console.log(err);
//         })
  

//*******************      another way */

Promise.all([
    download("https://www.codingblocks.png"),
    download("https://www.yahoo.png"),
    download("https://www.filename.png")

]).then(function(values){ 
    console.log(values);
})