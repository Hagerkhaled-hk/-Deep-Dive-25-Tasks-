
let inputs=document.querySelectorAll(".data");
let select=document.querySelector("select");
let register=document.querySelector("#register");
let card=document.querySelector(".card");
let container=document.querySelector(".container");


console.log(inputs);
console.log(select);



register.addEventListener("click",(e)=>{
e.preventDefault();
container.style.display="none";
card.style.display="block";
card.innerHTML+="<h2>Welcome</h2>";


    inputs.forEach((input)=>{
        
card.innerHTML+=`<p> ${input.id} : ${input.value}</p>`

    })
    

})

