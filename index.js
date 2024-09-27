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
let crosIcon2 = document.querySelector("#icon2")



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

      para.innerHTML=addUserName.value[0] 
      para.style.textTransform="capitalize"
      users.append(para) 

      let delbtn =document.createElement("span")
      let delIcon =document.createElement("i")
      console.log(delIcon)
           delIcon.classList="fa-solid fa-xmark"
           delIcon.id="cross"
           
           delbtn.append(delIcon) 
           para.append(delbtn) 
        //    console.log(span)
        addUserName.value=""
      users.style.display="block";
     popup.style.display="none";


     delbtn.addEventListener("click",function(){
        deleteU.style.display="block"

        delCancel.addEventListener("click",function(){
        deleteU.style.display="none"
        })
       
        delConfirm.addEventListener("click",function(){  
            users.removeChild(para)
        deleteU.style.display="none"
    })
    })
})

crosIcon.addEventListener("click",function(){
    popup.style.display="none";
    
})
crosIcon2.addEventListener("click",function(){
    deleteU.style.display="none";
})

