var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//remove last item from vegetabe array
    console.log(vegetables.pop());  //returns "lettuce"
 //remove first item from fruit array
console.log(fruit.slice(1, 4));
//find index of orange in fruit array
console.log(fruit.indexOf("orange"));
//add index number to fruit array
fruit.push(fruit.indexOf("orange"));
console.log(fruit);
//use length property to find length of vegetable array
console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(vegetables);
//combine fruit and vegetables arrays into one array
var food = fruit.concat(vegetables);
console.log(food);
//remove 2 elements from food array starting at index 4
food.splice(4, 2);
console.log(food);
//reverse the order of the elements in food array
food.reverse();
console.log(food);
//turn array into a string
console.log(food.toString());



