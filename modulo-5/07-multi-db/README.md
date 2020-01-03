**- Those Commands need to be run on the Docker terminal - EN**
**- Esses comandos precisam ser executados no terminal do Docker - PT-BR** 

docker run \
    --name postgres \
    -e POSTGRES_USER=erickwendel \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

**To check the process that are running on the docker**
**- Rode o comando abaixo, para checar os processos em execução no docker PT_BR**
docker ps 

**- To get inside of the container to be able to run commnads on the docker**
**- Roda o comando abaixo para entrar no container, e assim poder executar os comandos no docker PT_BR**
docker exec -it postgres /bin/bash

**- run this command to start the interface**
**- roda o comando abaixo para iniciar a interface PT_BR**
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

**- run the command bellow to start the client side**
**- Roda o comando abaixo para iniciar o client do mongodb PT_BR**
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

**The command bellow will login, create a database, and a user**
**- O comando abaixo, vai logar, criar o banco de dados e o usuário PT_BR**
docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'erickwendel', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"