# Resolução perguntas

![Tabela 1](images/tabela1.png)

> 1 -Quais constraints a coluna address_id poderia ter? Por quê?

## Resposta Tabela 1

A coluna address_id possui a constraint Primary Key para que exista um número identificador único. Além disso, a Primary Key não permite que ela seja nula.

> 2- A coluna city_id é um número. Você consegue identificar que tipo de constraint foi aplicado nela?

## Resposta Tabela 2

A coluna city_id é do tipo Foreign Key , e nela foi aplicada a constraint Foreign Key.

> 3- A coluna address (endereço) possui uma constraint . Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

## Resposta Tabela 3

A restrição aplicada na coluna address é a restrição NOT NULL . Dessa maneira, é interessante que a coluna address sempre esteja preenchida em função de ser uma informação crucial para essa tabela, além de a tabela não fazer sentido sem essa informação preenchida.
