# Resolução dos exercícios - Query e Sakila (db)

## No workbench

> 1- Escreva uma query que selecione todas as colunas da tabela city ;

```console
SELECT * FROM sakila.city;
```

> 2- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;

```console
SELECT first_name, last_name FROM sakila.customer;
```

> 3- Escreva uma query que exiba todas as colunas da tabela rental ;

```console
SELECT * FROM sakila.rental;
```

> 4- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;

```console
SELECT title, description, release_year FROM sakila.film;
```

> 5- Utilize o SELECT para explorar todas as tabelas do banco de dados.

```console
SELECT * FROM sakila.nome_da_tabela;
```

## Utilizando CONCAT

> 1- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .

```console
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
```

> 2- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

```console
SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;
```

> 3- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .

```console
SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;
```
