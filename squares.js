const numArray = [7, 6, 1, 8, 23, 19, 24, 30];
let squares, sum = 0;
for (let i in numArray) {
    squares = numArray[i]*numArray[i];
    sum += squares;
}
console.log("The sum of squares of the elements in the array is "+sum);
