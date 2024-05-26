

let currency = document.querySelectorAll(".currency")
let input = document.getElementById("input")
let result = document.getElementById("result")
let button = document.getElementById("btn")

fetch("https://api.frankfurter.app/currencies")

.then((res) => res.json())
.then((res1) => dropdown(res1))  

function dropdown(res1) 
{
    let curr = Object.entries(res1)          // 'Object.entries' is used to fetch the details in array form.
    for (let i = 0; i < curr.length; i++) 
    {
        let option1 = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        currency[0].innerHTML = currency[0].innerHTML + option1  // 'option' html element will consecutively form another option one by one..
        currency[1].innerHTML = currency[1].innerHTML + option1
    }
}

button.addEventListener("click", () => {
    let curr1 = currency[0].value
    let curr2 = currency[1].value
    let conv = input.value
    if(curr1 === curr2)
    {
        alert("Enter different currencies!")
    }
    else
    {
        convert(curr1,curr2,conv)
    }
})

function convert(curr1,curr2,conv)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${conv}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        let res12 = Object.values(data.rates)[0]
        //console.log(Object.values(data.rates)[0]) // "Object.values directly gives the values inside the 'data' ." // (or) console.log(Object.entries(data.rates)[0][1]).
        result.value = res12
  });
}





