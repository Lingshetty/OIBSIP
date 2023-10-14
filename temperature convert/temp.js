// const btn = document.querySelector("#id")
function convert(){
 console.log("clicked")
 const input = document.querySelector("#input").value
console.log(input)

const select = document.querySelector("#select")
const final = select.options[select.selectedIndex].value;

console.log(final)
//  document.querySelector("#location").innerHTML=final;
 if(final == "Fahrenheit"){
    let Fahrenheit1 =  (input*9/5) + 32  +" °F";
    document.querySelector("#location").innerHTML =Fahrenheit1;
 }
 else{
    let kelvin =  (input*1) + 273.15 + " K";
    document.querySelector("#location").innerHTML = kelvin;
 }


}