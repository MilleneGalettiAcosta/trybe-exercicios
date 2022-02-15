# Dockerfile - Comandos - Instruções

> 1-Comando para criar Imagem baseada em uma imagem:

```console
FROM <base image>
```

> 2-Comando para definir diretório de trabalho, que será a base para a execução dos Comandos:

```console
WORKDIR /<nome-do-diretório>
```

> 3-Comando para copiar arquivos e diretórios para dentro da imagem:

```console
COPY ["<Arquivo_1>", "<Arquivo_2>",..."Arquivo_N", "<PASTA-DESTINO>]

COPY ["source", "Dest"]
```

> 4-Comando que executa uam lista de comandos durante a criação da imagem:

```console
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARÂMETROS>"...]
```

> 5- Comando que disponibiliza qual porta de acesso externo utilizar:

```console
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
```

## Observação

Precisamos atribuir uma porta do nosso sistema hospedeiro(host) que direcionara para a porta do sistema do convidado(guest).

> 6- Comando prompty - Apenas o último terá efeito e ele é sobrescrito pelo RUN - executa um comando e/ou mostra parâmetro:

```console
CMD ["<argumento-executável>", "<parâmetro>"]
```

> 7- Comando que não é subscrito pelo RUN - roda um argumento executável - ele altera o comportamento do CMD:

```console
ENTRYPOINT ["<Argumento-executável>"]

CMD ["<PARÂMETROS>"]
```

## Comandos Adicionais

> 8- Criar Labels - mecanismos para atribuir "metadatas" - Recomendado o uso de labels para organizar nossas imagens - Informações que são registradas.

```console
LABEL <KEY>=<VALUE>
```

> 9- Resgatar valor de labels:

```console
docker inspect <CONTAINER ID || NAMES>
```

> 10 - Criar manteiner para retirar possiveis dúvidas (nome e email de contato):

```console
LABEL maintener="Nome e SObrenome <email@email.com.br>"
```

> 11 - Criar variáveis de ambientes (são valores definidos dentro do escopo do sistema operacional):

```console
ENV <ENV NAME><ENV VALUE>
```

> 12- Podemos passar as variáveis para o container:

```console
docker container run\
-- env ENV-NAME=ENV-VALUE\
<IMAGE NAME>
```

> 13- Definir nome do usuário que irá iniciar o container ao invés do padrão ROOT:

```console
USER NAME-USER
```

## Layers e Cache

Cache - armazenamento rápido e temporário.
Nesse contexto é armazenado os comandos de uma imagem após seu processo de build.

Layers - camadas ou passo a passo da montagem de uma imagem:

```console
Sending build context to Docker daemon  2.048kB

Step 1/3 : FROM chuanwen/cowsay:latest
 ---> d9ca6614554a

Step 2/3 : ENTRYPOINT [ "/usr/games/cowsay" ]
 ---> Running in cbfd01da53de
Removing intermediate container cbfd01da53de
 ---> a74e59a06799

Step 3/3 : CMD [ "#VQV Trybe" ]
 ---> Running in 081a3e832737
Removing intermediate container 081a3e832737
 ---> ac2ac67d38c5

Successfully built ac2ac67d38c5

Successfully tagged cowsay:latest
```
