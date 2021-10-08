// Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, array) => acc.concat(array), []);
  }
// usando const.
 const flatten1 = (arr) => arr.reduce((acc, array) => acc.concat(array),[]);

 console.log(flatten1(arrays));

//  concat - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat