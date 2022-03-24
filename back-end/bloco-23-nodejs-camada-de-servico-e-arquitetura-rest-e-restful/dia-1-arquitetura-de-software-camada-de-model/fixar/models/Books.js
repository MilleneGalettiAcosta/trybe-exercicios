const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  tittle: bookData.title,
  authorID: bookData.author_id,
});

const getAll = async () => {
  const [ books ] = await connection.execute('SELECT id, title, author_id FROM model_example.books;',);
  return books.map(serialize);
}

const getAuthorById= async (author_id) => {
  const [ book ] = await connection.execute('SELECT id, title, author_id FROM model_example.books WHERE author_id = ?', [author_id]);
  return book.map(serialize);
}

module.exports = { getAll , getAuthorById, };