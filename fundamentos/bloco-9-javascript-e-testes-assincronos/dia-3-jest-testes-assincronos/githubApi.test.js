// githubApi.test.js

const fetch = require('node-fetch');

describe('Ao acessar a API github', () => {
// expect.assertions(2);

  const getRepos = (url) => (
    fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
  );

  test('verificar na lista de respositório', async () => {
    const urlGitHub = 'https://api.github.com/orgs/tryber/repos';

    const repositorio = await getRepos(urlGitHub);

  expect(repositorio).toContain('sd-01-week4-5-project-todo-list');

  expect(repositorio).toContain('sd-01-week4-5-project-todo-list');
    });
});

