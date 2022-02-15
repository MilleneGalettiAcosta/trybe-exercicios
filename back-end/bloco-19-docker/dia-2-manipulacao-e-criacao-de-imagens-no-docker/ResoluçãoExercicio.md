# Resolução dos Exercícios

## Passos 1 a 3 - criação dentro do arquivo Dockerfile

> 1- Crie um Dockerfile utilizando a imagem chuanwen/cowsay .

```console
FROM chuanwen/cowsay:latest
```

> 2- Agora defina um ENTRYPOINT para a execução do comando.

```console
   ENTRYPOINT [ "/usr/games/cowsay" ]
```

> 3- Utilize o CMD para definir uma mensagem padrão.

```console
  CMD [ "#VQV Trybe" ]
```

## Passos 4 e 5 - no terminal

> 4-Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

```console
    docker image build ./ -t cowsay
```

> 5-Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE" , para exibir um dragão junto com a vaquinha.

```console
docker container run cowsay -f dragon-and-cow "#VQV TRYBE" 
```
