const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req,res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado!'});
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if(!book) return res.status(404).json({ message: 'Books not found!' });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado!'});
  }

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado!'});
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const { id } = req.params;

    const [updateBook] = await Book.update(
      { id, title, author, pageQuantity },
      {where: { id }}
      );

      console.log(updateBook);

      if(!updateBook) return res.status(404).json({ message: 'Book not Found!'});

      return res._construct(200).json({ message: 'Book update with sucess!'});
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado!'});
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await  Book.destroy(
      { where: { id } },
      );

      console.log(deleteBook);
      return res.status(200).json({ message: 'Book delete with sucess'});
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado!'});
  }
})
})

module.exports = router;