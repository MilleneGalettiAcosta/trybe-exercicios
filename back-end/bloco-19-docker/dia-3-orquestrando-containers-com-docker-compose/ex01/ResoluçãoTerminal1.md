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

## **Requisito 7**

```console
docker stop site-trybe2
```

## **Requisito 8**

```console
docker rm site-trybe2
```

## **Requisito 9**

```console
cd /home/milene/docker/meu-site
ls -la
```

> -rw-rw-r-- 1 milene milene  358 fev 16 17:21 missao_trybe.html

## **Requisito 10**

```console
docker images
```

## **Requisito 11**

```console
docker rmi -f <ID IMAGE>
```
