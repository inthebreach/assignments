var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArray = forception(people, alphabet)

function forception(people, alphabet) {
    var newArray = []
    for (var i = 0; i < people.length; i++) {
        newArray.push(people[i])
        for (var j = 0; j < alphabet.length; j++) {
            newArray.push(alphabet[j])
        }
    }   
    return newArray
}
newArray.forEach(function(element) {
    console.log(element)
})
