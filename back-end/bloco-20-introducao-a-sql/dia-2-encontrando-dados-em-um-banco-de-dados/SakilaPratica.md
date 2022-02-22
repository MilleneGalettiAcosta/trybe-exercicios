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
