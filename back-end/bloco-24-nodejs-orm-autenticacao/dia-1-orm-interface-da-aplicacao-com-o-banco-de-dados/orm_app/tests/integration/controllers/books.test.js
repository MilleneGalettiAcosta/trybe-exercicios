const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../index');
const { Book } = require('../../../models');

describe('Busca todos os livros', () => {
  describe('quando não existe livro cadastrado', async () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });
    after(() => {
      findAllStub.restore();
    })

    it('Called Book.findAll', async () => {
      await chai.request(app).get('/books');

      expect(Book.findAll.calledOnce).to.Arguments.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app).get('/books');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.empty;
    });
  });
  

  describe('Busca um livro pelo ID', () => {
    describe('retorna um registro de livro', () => {
      const findByPkStub = stub(Book, 'findByPk');
      const mochaBook = {
      id: 1,
      title: "Livro #01",
      author: "author #01",
      pageQuantity: 200,
      createdAt: "2001-09-28 01:00:00",
      updatedAt: "2001-09-28 01:00:00",
      };
      let result;

      before(async () => {
        findByPkStub.resolves(mochaBook);

        result = await chai.request(app)
        .get('/books/1');
      });
      after(() => {
        findByPkStub.restore();
      });

      it('Called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('o status é 200', async () => {
        expect(result.status).to.be.equals(200);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(result.body).to.contain(mochaBook);
      });
    })
  });

  describe('Cria um novo livro', () => {
    describe('retorna registro do livro criado', () => {
      const createStub = stub(Book, 'create');
    const mochaBook = {
      title: "Livro #02",
      author: "author #02",
      pageQuantity: 300,
    };
    let result;

    before( async () => {
      createStub.resolves({
        id: 2,
        ...mochaBook,
        updatedAt: "2022-01-28T15:45:28.398Z",
        createdAt: "2022-01-28T15:45:28.398Z"
      });

      result = await chai.request(app)
        .post('/books')
        .send(mochaBook);
    });
    after(() => {
      createStub.restore();
    });
    it('called Book.create', async () => {
      expect(Book.create.calledOnce).to.be.equals(true);
    });

    it('o status é 201', async () => {
      expect(result.status).to.be.equals(201);
    });

    it('a resposta é um objeto contendo os dados do livro', async () => {
      expect(result.body).to.contain(testBook);
      });
    });
  });

  
});

