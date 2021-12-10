//write a function that takes an array of numbers and returns the largest (without using Math.max)
        
        
function largestNum(arr){
    var largest = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNum([3, 5, 2, 8, 1]));

//write a function that takes an array of words and characters and returns each word that has that character present
    
function lettersWithStrings(arr, char){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].indexOf(char) !== -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]

//write a function that takes a num1 and num2 and returns whether num1 is divisible by num2
    
function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        return true;
    }
    return false;
}

console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false