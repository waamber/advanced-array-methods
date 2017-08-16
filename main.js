console.log("new js, who dis?");

var fruits = ["apple", "banana", "cherry", "peach"];


// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld(array) {
	for(var i = 0; i < array.length; i++) {
		console.log("Output for 1A, list of fruits:", array[i]);
	}
};

outputFruitOld(fruits); //parameter is "placeholder' for ANY array. When calling function, pass in fruits array.



// 1B: Rewrite using forEach array method
// using callback function

fruits.forEach(listFruits); //forEach--go through array execute function in parameter.

function listFruits(fruit, index, array) {
	console.log("Fruit from 1B:", fruit);
	console.log("index", index); //prints out fruit index
	console.log("array", array); //prints out full array
	if (index == 2) { 					//prints out fruit in index[2]
		console.log(fruit);
	}
}; 


// using anonymous function

fruits.forEach(function(item) {
	console.log(item); //console logs items in fruits array-- "item" is placeholder
})


// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(array) { //reverse LETTERS of fruit in array and put in newArray
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		newArray.push(array[i].split("").reverse().join("")); //splits letters into elements in array, reversing the letters, then joining them back to string
	//above pushes reversed array into newArray
	}
	return newArray; //return to use later
	
};

console.log(backwardFruitsOld(fruits));


// 2B: Rewrite using map array method

var secondNewArray = fruits.map(function(fruit) { //returns new array
	return fruit.split("").reverse().join("");
});

console.log(secondNewArray);
console.log(fruits);


// with a callback function

function splitter(item) {
	return item.split("").reverse().join("");
};

console.log("splitter", fruits.map(splitter));

// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld(array) {
	var newArray = [];
	for(var i =0; i < array.length; i++) {
		if(array[i].length === 5) {  //checking to see if index[i] has 5 letters
			newArray.push(array[i]); //pushes 5 letter words into new array
		}
	}
	return newArray; //returns the words
};

console.log(fiveLettersOnlyOld(fruits)); //pass in the fruits array


// 3B: Rewrite using filter array method

var fruitFilter = fruits.filter(function(fruit) {
	if(fruit.length === 5) {
		return true;
	}
});

console.log("fruit filter", fruitFilter);




var numbers = [0, 1, 2, 3, 4];

// 4A: Write a function called addzOld that returns the sum of an array.

function addzOld(array) {
	var sum = 0; //if variable is a string sum =""-- sum += array[i] will concat the array into a string
	for(var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
};

console.log("adding them up:", addzOld(numbers));

// 4B: Rewrite using reduce array method

var summation = numbers.reduce(function(accumulation, currentValue) {
	return accumulation + currentValue;
});

console.log(summation);














