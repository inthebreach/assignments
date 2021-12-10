const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    dropDown.setAttribute("class", "dropDown")
    for(let i = 0; i < colors.length; i++){
        const option = document.createElement("option")
        option.setAttribute("value", colors[i])
        option.innerText = colors[i]
        dropDown.appendChild(option)
    }
    
    dropDown.addEventListener("change", function(){
        const selectedColor = dropDown.value
        if(selectedColor === "red"){
            this.parentElement.style.backgroundColor = "red"
        }   else if(selectedColor === "blue"){
            this.parentElement.style.backgroundColor = "blue"
        }   else if(selectedColor === "green"){
            this.parentElement.style.backgroundColor = "green"
        }
    })
    return dropDown     //returns the dropdown
}

function createSubItem(e){
    e.preventDefault()
    const subItem = document.createElement("div")   
    var subItemValue = document.getElementById("input")     
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()       
    subItem.append(dropDown)       
    subItem.setAttribute("class", "subItem")        
    return subItem  
}


