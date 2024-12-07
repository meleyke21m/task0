
let form = document.getElementById("form");
let inp = document.getElementById("inp");
let ul = document.getElementById("ul");
// let onesection=document.getElementById("onesection")

form.addEventListener("submit", getform);
function getform(e) {
    e.preventDefault()
    let li = document.createElement("li");
    li.classList.add("win")
    li.innerHTML = ` <input  value= "${inp.value}" type="text" readonly>
                     <button class="complete"><i class="fa-solid fa-pencil"></i></button>
                    <button  class="delete"><i class="fa-solid fa-arrow-rotate-right"></i></button>
                    <button class="edit"><i class="fa-solid fa-trash-can"></i></button>`

    ul.appendChild(li);
    form.reset()
}
// onesection.addEventListener("click",(e)=>{
//     let li=e.target.clsest("li");
//     if(li){
    vat 
}
    
//     if(e.target.clasest(".complate")){
//         console.log("oldu");
        
//     }
// })