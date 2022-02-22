# Resolução dos exercícios - Query e Select

## Acessar no terminal

```console
mysql -u <usuário> -p
```

> 1- Monte uma query que exiba seu nome na tela;

```console
SELECT '<nome completo>';
```

> 2- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

```console
SELECT '<nome>', '<sobrenome>', '<cidade natal>', '<idade>';
```

> 3- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);

```console
SELECT '<Nome>' AS nome, ',<Sobrenome>' AS sobrenome, '<Cidade>' AS 'cidade natal', <Idade> AS idade;
```

> 4- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;

```console
SELECT 13*8;
```

> 5- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

```console
SELECT now() AS 'Data Atual';
```
