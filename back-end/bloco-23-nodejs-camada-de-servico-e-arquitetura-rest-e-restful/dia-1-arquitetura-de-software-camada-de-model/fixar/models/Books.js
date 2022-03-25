const connection = require('./connection');


const getAll = async () => {
  const [ books ] = await connection.execute('SELECT * FROM model_example.books;');
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getAuthorById= async (author_id) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [ author_id ]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

module.exports = { getAll , getAuthorById, getBookById };