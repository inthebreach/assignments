function capitalize(str) {
  return str.toUpperCase() + str.toLowerCase();
}
console.log(capitalize("Hello"));

function halfLength(str) {
    return Math.floor(str.length / 2);
}

            

function roundednumber(str) {
    return Math.floor(str.length / 2);
}
console.log(roundednumber("Hello"));

function firstHalf(str) {
    return str.slice(0, Math.floor(str.length / 2));
}
console.log(firstHalf("Hello"));


function capitalizeLower(str) {
    return str.slice(0, Math.floor(str.length / 2)).toUpperCase() + str.slice(Math.floor(str.length / 2)).toLowerCase();
}
console.log(capitalizeLower("Hello"));
