const add = document["add"]
const sub = document['sub'];
const mul = document['mul'];

add.addEventListener("submit", function(e){
    e.preventDefault()
    const add1 = add.add1.value
    const add2 = add.add2.value
    console.log(add1, add2)
    const addRes = parseInt(add1) + parseInt(add2)
    console.log(addRes)
    let h1 = document.createElement('h1')
    h1.setAttribute("class", "add")
    h1.textContent = add1+ " + " +add2+ " = " +addRes
    document.getElementsByTagName("body")[0].append(h1)
    add.add1.value = ''
    add.add2.value = ''
})


sub.addEventListener("submit", function(e){
    e.preventDefault()
    const sub1 = sub.sub1.value
    const sub2 = sub.sub2.value
    console.log(sub1, sub2)
    const subRes = parseInt(sub1) - parseInt(sub2)
    console.log(subRes)
    let h1 = document.createElement('h1')
    h1.setAttribute("class", "sub")
    h1.textContent = sub1+ " - " +sub2+ " = " +subRes
    document.getElementsByTagName("body")[0].append(h1)
    sub.sub1.value = ''
    sub.sub2.value = ''
})
   

mul.addEventListener("submit", function(e){
    e.preventDefault()
    const mul1 = mul.mul1.value
    const mul2 = mul.mul2.value
    console.log(mul1, mul2)
    const mulRes = parseInt(mul1) * parseInt(mul2)
    let h1 = document.createElement('h1')
    h1.setAttribute("class", "mul")
    h1.textContent = mul1+ " * " +mul2+ " = " +mulRes
    document.getElementsByTagName("body")[0].append(h1)
    mul.mul1.value = ''
    mul.mul2.value = ''
})

