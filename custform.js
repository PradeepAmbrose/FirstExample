function greetme(){
    //    onclick="document.getElementById('results).innerHTML = Date()">

    console.log('Hello Ambrose')
    const nameinput = document.getElementById("name");
    console.log(nameinput.value);

    const yearinput = document.getElementById("year");
    console.log(yearinput.value);

    const resultDiv = document.getElementById("results");

    const CurrentYear = new Date().getFullYear();

    const age = CurrentYear - yearinput.value;
    
    resultDiv.innerHTML= `Hello ${nameinput.value} you are prabably ${age}`;
    console.log(resultDiv.value);

//object

const pizza = { 
    base : "thin",
    topping :["olives", "pineapple"]};
    console.log(pizza);

const pizza1 = {...pizza, extrahot : "true"};
console.log(pizza1);

}