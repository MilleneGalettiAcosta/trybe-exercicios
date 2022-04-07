const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/:name', async (req,res) => {
    try {
      const { name } = req.params;
      const books = await Book.findAll({where: { author: name }});

      return res.status(200).json(books);
    } catch (err) {
      console.log(err);

      res.status(500).json({ message: 'Algo deu errado!'});
    }
})

module.export = router;