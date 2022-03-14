# Exercicios de fixação

> 1- Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.

```console
USE sakila;
SELECT COUNT(*) Pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';
```

> 2- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?
Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.

```console
USE sakila;
SELECT COUNT(*) Pagamentos FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
```

> 3- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .

```console
USE sakila;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;
```