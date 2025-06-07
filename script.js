

// console.log("starting");

// setTimeout(()=>{

// console.log("pending");
// })



// console.log("Ending");

let btn1;
let sum = 0;
let btn = ()=>{
     btn1 = setInterval(()=>{
        console.log(sum++)
    },1000)
}
let btn2 = ()=>{
    clearInterval(btn1)
}