# Comandos Docker

> 1 - Checar a versão do docker:

```console
docker --version
```

```console
docker -v
```

> 2 - Listar todos containers que estão ativos no meu motor docker:

```console
 docker ps
 ```

> 3 - Listar todos containers que estão no meu motor docker inclusive os inativos

```console
 docker ps -a
 ```

> 4 - Como rodar um container e usar/buscar imagem:

```console
 docker container run <nome-da-imagem>:<tag>
```

> 5 - Como rodar uma imagem no container de forma interativa e que abra um terminal:

```console
 docker  run -it <nome-da-imagem>
```

> 5 - Como visualizar as informações de ambiente dentro do meu sistema operacional;

```console
* cat /etc/os-release
```

> 6 -Criar um container sem iniciá-lo:

```console
docker container create -it <nome-da-imagem>
```

> 7 - Iniciar um container docker não ativo/parado :

```console
docker start id-do-container || name-do-container
```

> 8 - Acoplando um container docker startado ao meu terminal:

```console
docker container attach id-do-container || name-do-container
```

> 9 - Comando para pausar um container que esta rodando na maquina:

```console
docker container pause id-do-container || name-do-container
```

> 10 - Comando para despausar um container que esta rodando na maquina:

```console
docker container unpause id-do-container || name-do-container
```

> 11 - Comando para restartar um container que esta parado na maquina:

```console
docker container restart id-do-container || name-do-container
```

> 12 - Comando para parar um container que esta rodando na maquina:

```console
docker container stop id-do-container || name-do-container
```

> 13 - Comando para parar deletar um container inativo na maquina:

```console
docker container rm id-do-container || name-do-container
```

> 14 - Comando para deletar todos os container inativos na minha maquina:

```console
docker container prune
```

>15 - Comando para forçar a exclusão de um container ativo para:

```console
docker container rm -f id-do-container || name-do-container
```

>16 - Comando que retorna id completo do container:

```console
docker container -it -d <nome-da-imagem>
```

>17 - Comando para criar nome único no container:

```console
docker container run --name nome-único <nome-da-imagem>
```
