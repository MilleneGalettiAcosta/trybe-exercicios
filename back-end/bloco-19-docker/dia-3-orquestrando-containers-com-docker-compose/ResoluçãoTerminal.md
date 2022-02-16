# Exercício 1

## **Requisito 2**

```console
docker run -d --name site-trybe2 -p 4545:80 -v "<CAMINHO DO DIRETÓRIO ONDE ESTÁ SEU HTML>:/usr/local/apache2/htdocs" httpd:2.4
```
<!-- docker container run -d --name site-trybe2 -p 4545:80 -v "/home/milene/docker/meu-site:/usr/local/apache2/htdocs" httpd:2.4 -->

## **Requisito 3**

> <http://localhost:4545/missao_trybe.html>

## **Requisito 5**

```console
docker ps
```

## **Requisito 6**

```console
docker inspect site-trybe2
```

> "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/milene/docker/meu-site",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ]
