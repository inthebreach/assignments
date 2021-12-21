const form = document.travel

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let location = form.country.value
    let dietInputs = [];
    
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietInputs.push(form.diet[i].value)
        }
    }

    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + dietInputs + "\nThanks")
 
})

