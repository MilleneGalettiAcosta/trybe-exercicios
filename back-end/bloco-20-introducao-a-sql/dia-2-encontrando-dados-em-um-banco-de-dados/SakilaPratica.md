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

## Utilizando o comando DISTINCT

> 1- Monte uma query para encontrar pares únicos de nomes e idades .

```console
SELECT DISTINCT Nome, idade FROM Escola.Alunos;
```

> 2- Quantas linhas você encontraria na query anterior?

R: 5

> 3- Monte uma query para encontrar somente os nomes únicos.

```console
SELECT DISTINCT Nome FROM Escola.Alunos;
```

> 4- Quantas linhas você encontraria na query anterior?

R: 4

> 5- Monte uma query para encontrar somente as idades únicas.

```console
SELECT DISTINCT Idade FROM Escola.Alunos;
```

> 6- Quantas linhas você encontraria na query anterior?

R: 4

## Utilizando COUNT

> 1 -Quantas senhas temos cadastradas nessa tabela?

```console
SELECT COUNT(password) FROM sakila.staff;
```

R: 1

> 2- Quantas pessoas temos no total trabalhando para nossa empresa?

```console
SELECT COUNT(*) FROM sakila.staff;
```

R: 2

> 3- Quantos emails temos cadastrados nessa tabela?

```console
SELECT COUNT(email) FROM sakila.staff;
```

R: 2

## Comando LIMIT e OFFSET - Tabela 1

![tabela 1](table1.png)

*LIMIT* - Limita números de resultados.

*OFFSET* - Pula números de linhas.

> 1- Qual query traz os 10 primeiros resultados, a partir de JOHNNY?

```console
SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;
```
