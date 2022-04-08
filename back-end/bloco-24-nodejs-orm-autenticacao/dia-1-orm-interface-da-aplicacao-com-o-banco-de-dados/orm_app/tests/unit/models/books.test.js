
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../models/Books');

describe('O model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Books"', () => {
    checkModelName(Book)('Books');
  });

  describe('possui as propriedades "title", "author" e "pageQuantity"', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});