/* 
  Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibs(number) {
	// check if number is less than 1
	let fibonacciArray = [];
	if (number <= 0) return "Please enter a valid fibonacci number.";
	if (number === 1) return [0];

	// if not, generate fibonacci array
	let n1 = 0;
	let n2 = 1;
	let res = 0;
	for (let i = 0; i < number; i++) {
		fibonacciArray.push(n1);
		res = n1 + n2;
		n1 = n2;
		n2 = res;
	}

	return fibonacciArray;
}

console.log(fibs(0));
