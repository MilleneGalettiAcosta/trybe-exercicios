beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeEach - Antes de iniciar o 1° teste
// 1 - test - resultado 1° teste
// 1 - afterEach - final do 1° teste
// 1 - beforeEach - Antes de iniciar o 2° teste
// 2 - beforeEach - before dentro do describe
// 2 - test - resultado 2° teste
// 2 - afterEach - after dentro do describe
// 1 - afterEach - final do 2° teste 