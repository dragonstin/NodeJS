# Inicialização e Configuração do Docker

**Note:** Todos os comandos à seguir devem ser executados no terminal do Docker ("Docker Quickstart Terminal")

## Postgres 

-  Configurando a imagem do postgres

        docker run \
            --name postgres \
            -e POSTGRES_USER=erickwendel \
            -e POSTGRES_PASSWORD=minhasenhasecreta \
            -e POSTGRES_DB=heroes \
            -p 5432:5432 \
            -d \
            postgres


- Ver as imagens instaladas na máquina
    
        docker ps -a


- Entrar no container postgres
    
       docker exec -it postgres /bin/bash

-  Após entrar no container postgres, roda o comando abaixo para iniciar a interface
   
        docker run \
            --name adminer \
            -p 8080:8080 \
            --link postgres:postgres \
            -d \
            adminer

## MongoDB

-  Configurando a imagem do MongoDB

        docker run \
            --name mongodb \
            -p 27017:27017 \
            -e MONGO_INITDB_ROOT_USERNAME=admin \
            -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
            -d \
            mongo:4


- Configurando um Client para o MongoDB
  
        docker run \
            --name mongoclient \
            -p 3000:3000 \
            --link mongodb:mongodb \
            -d \
            mongoclient/mongoclient

- Cria um usuário (admin) para acessar o mongo, também criar um banco de dados (herois) e realiza o login no mesmo
    
        docker exec -it mongodb \
            mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
            --eval "db.getSiblingDB('herois').createUser({user: 'erickwendel', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"

---

## Outros comandos necessários do docker

- Para Ver todas as imagens que estão na máquina:

       docker ps -a

- Para Iniciar uma imagem que está instalada na máquina:

        docker start id_ou_nome_da_imagem 

- Para Parar uma imagem que está instalada na máquina:
        
        docker stop id_ou_nome_da_imagem

- Para Remover uma imagem da máquina:

     docker rm id_ou_nome_da_imagem

**Note**: Esses são alguns dos comandos que eu utilizei, se quiser saber outros dos comandos mais utilizados no docker, segue o link que usei como fonte de consulta: <https://woliveiras.com.br/posts/comandos-mais-utilizados-no-docker/#Comoeuseiquaisasimagensdisponveisnomeurepositriolocal>