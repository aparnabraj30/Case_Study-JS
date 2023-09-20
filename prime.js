const numArray = [7, 6, 1, 8, 23, 19, 24, 30];

function first() {
  let firstElement = numArray[0];
  console.log("The first element of the array is: " + firstElement);
  return firstElement;
}

function prime_checker(num) {
  var flag = true;
  if (num <= 1) {
    console.log("It's not a prime number.");
    return;
  }
  for (let i = 2; i*i <= num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log("It's a prime number.");
  } else {
    console.log("It's not a prime number.");
  }
}

const firstElement = first();
prime_checker(firstElement);
