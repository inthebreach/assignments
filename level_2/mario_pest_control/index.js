const form = document.pests 

form .addEventListener('submit', (e) => {
    e.preventDefault()
    const Goomba = form.Goomba.value
    const BobOmb = form.Bobomb.value
    const CheepCheep = form.Cheepcheep.value
    const total = (Goomba * 5) + (BobOmb * 7) + (CheepCheep * 11)
    document.getElementById('res').innerHTML = total
})
