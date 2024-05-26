
var foodname=document.getElementById("recipe-name")
var chefname1=document.getElementById("chef-name")
var area=document.getElementById("abt")
var cont=document.querySelector(".container3")
var cont1=document.querySelector(".container1")

var btn1=document.querySelector(".add")
var btn2=document.getElementById("add1")
var btn3=document.getElementById("cancel")
var pop=document.querySelector(".popup")
var delrem=document.getElementById("del")

btn1.addEventListener("click",function(){
    pop.style.display="block"
    cont.style.display="block"

})

btn3.addEventListener("click",function(event){
    event.preventDefault(event)

    pop.style.display="none"
    cont.style.display="none"
})

btn2.addEventListener("click",function(event){
    event.preventDefault(event)

    var newrecipe=document.createElement("div")
    newrecipe.setAttribute("class","container2")

    newrecipe.innerHTML=`<h2>${foodname.value}</h2>
    <h4>${chefname1.value}</h4>
    <p>${area.value}</p>
    <button id="del" onclick="del(event)">Delete</button>`

    cont1.append(newrecipe)

    pop.style.display="none"
    cont.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}
