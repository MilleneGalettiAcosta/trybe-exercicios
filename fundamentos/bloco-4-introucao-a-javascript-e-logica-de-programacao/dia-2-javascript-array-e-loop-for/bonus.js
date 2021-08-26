// Bonus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(numbers);
// //   Bonus 2
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(numbers);
//   Bonus 3
let novaArray = [];
for (let index = 0; index < numbers.length; index += 1) {  
      if (index + 1 < numbers.length) {
       novaArray.push(numbers[index]*numbers[index +1]);
      } else  {
          novaArray.push(numbers[index]*2);
      }
  }

  console.log(novaArray);