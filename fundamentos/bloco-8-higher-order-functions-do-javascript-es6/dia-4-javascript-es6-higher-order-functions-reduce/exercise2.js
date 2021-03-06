const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // 2 - Crie uma string com os nomes de todas as pessoas autoras.
  const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    const authors = books.reduce((acc, book) => `${acc} ${book.author.name},`, '');
    return authors;
}
// testando função
const reduceNames1 = (books) => {
    const authors = books.reduce((acc, book) => `${acc} ${book.author.name},`, '');
    return authors;
}

console.log(reduceNames1(books));

// refatorando
const reduceNames2 = (books) => {
    const names = books.reduce((acc, book, index, array) => {
      if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`;
    }, '');
    return names.trim();
    // trim utilizado para tirar o '' inicial 
  }

  console.log(reduceNames2(books));

//   a diferença é o término da string com virgula ou ponto.
