let h1 = document.getElementById("demo");
h1.style.color = "red"
h1.style.backgroundColor = "yellow";

// color, background color, border, border radius, font size,
// font style - italic

let para = document.getElementById("para")
// para.style.color = "green";
// para.style.background-Color = "yellow";
// para.style.border = "yellow";
// para.style.borderRadius = "yellow";

para.style.cssText = "color : pink; background-color: blue;border:10px solid red; border-radius: 40px, font-size:40px, font-style: italic;";

// function change(){
// let input = document.getElementById("myinput")
// input.value = "delhi";
// }
function printtext(){
    let input = document.getElementById("myinput").value
    let h1 = document.getElementById("newtext");
    h1.innerHTML = input;
}


// the addEventListener() method attaches an event handler to the specified element.

let button = document.getElementById("btn");
button.addEventListener("click", function(){
    console.log("button clicked");
    h1.style.color = "blue";
})
