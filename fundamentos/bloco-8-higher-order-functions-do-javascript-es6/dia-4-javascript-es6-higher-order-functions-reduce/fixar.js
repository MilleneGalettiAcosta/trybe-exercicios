const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = numbers.filter((number) => number % 2 === 0).reduce((acc, number) => {
    return acc +number;
});

console.log(isEven);

const evenReduce = numbers.reduce((acc, number) => {
    if(number % 2 !== 0) {
        return acc;
    } else {
        return acc + number;
    }
});

console.log(evenReduce);

// exemplo course
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (currentValue, number) => (
//     (number % 2 === 0) ? currentValue + number : currentValue
//   );
  
//   const sumNumbers = (array) => array.reduce(sumPair, 0);
  
//   console.log(sumNumbers(numbers)); // 152