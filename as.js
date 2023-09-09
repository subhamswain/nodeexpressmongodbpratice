let a=10;
let b=0;

let waitP=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        resolve(20);
    },2000)
})
waitP.then((b)=>{
    console.log(a+b)
})
