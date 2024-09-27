let adder = document.querySelector("#adder")
let popup = document.querySelector("#popup")
let deleteU = document.querySelector("#deleteU")
let addUserName = document.querySelector("#userName")
 
let addSubmit = document.querySelector("#addSubmit")
let addCancel = document.querySelector("#addCancel")
let delCancel = document.querySelector("#delCancel")
let delConfirm = document.querySelector("#delConfirm")
let users = document.querySelector("#users")

let crosIcon = document.querySelector("#icon")



adder.addEventListener("click", function(){
   popup.style.display="block";
})
addCancel.addEventListener("click",function(){
popup.style.display="none";
})
addSubmit.addEventListener("click",function(e){
 e.preventDefault()
     if(addUserName.value=="" && typeof(addUserName.value)!=String){
        alert("Plese Enter Name")
        return
     } 

      let para =document.createElement("p")
      let delbtn =document.createElement("button")
           delbtn.classList="deletepara"
           delbtn.innerHTML="x"
           para.append(delbtn) 

      para.innerHTML=addUserName.value[0] 
      para.style.textTransform="capitalize"
      users.append(para) 
      users.style.display="block";
     popup.style.display="none";

     delbtn.addEventListener("click",function(){
      users.removeChild(para) 
     })
})

crosIcon.addEventListener("click",function(){
    popup.style.display="none";
    deleteU.style.display="none";
    
})
