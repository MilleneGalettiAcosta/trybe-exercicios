const express = require('express');

const Author = require('./models/Author');

const Book = require('./models/Books');

const app = express();


app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:author_id', async (req, res) => {
  const { author_id } = req.params;
  const book = await Book.getAuthorById(author_id);
  res.status(200).json(book);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na ${PORT} com sucesso!`);
});