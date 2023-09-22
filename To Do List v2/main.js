let body=document.body
let input=document.querySelector(".input")
let addButton=document.querySelector(".add-button")
let holdToDo=document.querySelector(".holdToDo")
let container=document.querySelector(".container")


// let spany2=document.querySelector("span")



addButton.addEventListener("click", addToList)



function addToList(){
    let newItems=document.createElement("li")
    

    
    let needs=input.value 
    let cancelBtn = document.createElement("button");
        cancelBtn.textContent ="❌";
    newItems.textContent=needs
    holdToDo.classList.add("design")
    // cancelBtn.classList.add("design")
    holdToDo.appendChild(newItems) 
    newItems.appendChild(cancelBtn);
    
    input.value = ""; 
    function removeItems(){
        holdToDo.removeChild(newItems);
    }
    
    cancelBtn.addEventListener("click", removeItems)
        
console.log(newItems)
    
}





