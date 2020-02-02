# Sobre

Estudando Node.js por meio do Curso da NodeBR.

---

## Um pouco de conceito

### Node.js

- Criado por Ryan Dahl em 2009. Node.js é uma plataforma para desenvolvimento de aplicações backend usando JavaScript.

### NPM

- NPM (Node Package Manager) é reponsável por gerênciar as dependências(package.json) do projeto.

---

## Instalação

- Instale Node.js em seu computador <https://nodejs.org/pt-br/>.
- Execute o comando <code>node --version</code>, para verificar a versão do Node instalada em sua máquina.

### Iniciando um projeto

- Para iniciar um projeto Node.js, execute o comando <code>npm init</code> (or <code>npm init -y</code> para executar com as configurações padrão).

---

## Usando NPM para escrever linhas de comando

NPM também pode ser usando para escrever linhas de comando.

No arquivo package.json:

<code>"scripts": {
&ensp;&ensp;&ensp;&ensp;"dev": "node index.js"
},</code>

Nesse trecho de código, é demonstrada a função "dev".

Para executar linhas de comando do NPM, execute o comando <code>npm run "nome-da-seu-funcao-aqui"</code>, com base no trecho de código acima, a linha deve ser <code>npm run dev</code>.

---

## Ciclo de vida do JavaScript

- Funções que necessitam de recursos externos (acesso ao banco de dados ou arquivos) serão executados em background.
- O código não é executado sequencialmente.
- Lembre-se de manter a sequência do seu programa para evitar problemas.

---

## Ciclo de vida de Promisses

- **Pending:** Estado inicial, ainda não terminou ou ainda não foi rejeitado.
- **Fulfilled:** Quando executou todas as operações com sucesso.
- **Rejected:** Quando a operação falhou.

---

## Promises - ASYNC/AWAIT

**Async** antes de uma função, representa que a função sempre retorna uma promise.
**Await** funciona apenas dentro de funções Async, e faz o JavaScript esperar até que a promise retorne o resultado.

- Facilita a visualização do fluxo de funções.
- Não altera a performance de sua aplicação (caso seja usado de forma correta).
- Já existente no C# foi desenvolvido no JavaScript.
- Usar apenas quando necessitar tratar a resposta da chamada (Await).

---

## Event Emitter

- Usado para ações contínuas.
- **Node.js** usa para quase tudo em seu ecossistema.
- Bastante usado também nos browser (.onClick).
-Trabalha sob o Design Pattern Observer/PubSub

---

## Modulo 02 - Comandos

- <code>npm init -y</code> -> Inicia o projeto com Node.js
- <code>npm install axios</code> -> Instala a biblioteca Axios

---

## Modulo 03 - Configuração do ciclo de testes

- <code>npm init -y</code> -> Inicia o projeto com Node.js
- <code>npm install axios</code> -> Instala a biblioteca Axios
- <code>npm install -g mocha</code> -> Instala a biblioteca Mocha globalmente
- <code>npm i --save-dev mocha</code> -> Instala o Mocha como dependência de desenvolvimento
- <code>npm install nock</code> -> Instala o pacote nock, para simular requisições 

---

## Modulo 04 - Usando o Comander

- <code>npm install commander</code> -> Instala o pacote Commander para utilização de ferramentas de linha de comando.

---

## Modulo 05 - Padrão Strategy

- Padrão Strategies(GOF)- é um padrão comportamental. 
- Trabalhando com multi-databases.
- Trabalha fortemente com a orientação à objetos.

### Docker Instalation
 
 1- No Windows 10 home ou enterprise é necessário instalar o docker toolbox, nesse link tem um tutorial(está em inglês, mas dá para acompanhar pelas imagens) https://docs.docker.com/toolbox/toolbox_install_windows/

 1.a- No item "Step 3: Verify your installation" do tutorial execute o "Docker Quickstart Terminal" (imagem 1), execute o comando "docker run hello-world" e verifique o resultado conforme a imagem 4.

 2- Após instalar o docker, segue o vídeo (me confundiu o fato de ser demonstrado a imagem do Mongodb e do postgres nesse momento, porém essas imagens serão baixadas/instaladas por linha de comando ao longo do vídeo). 
 
 2.a- Os comandos demonstrado no video e outros que utilizei estão nesse link <https://github.com/fernandadagostin/NodeJS/tree/master/modulo-5/07-multi-db/README.md>

 3- Acessar o Adminer (interface): http://192.168.99.100:8080/ (no vídeo é demonstrado o link localhost:8080 porém no windows é necessário utilizar esse ip, o mesmo acontece no link do mongodb)

 4- Acessar o Mongodb: http://192.168.99.100:3000/ (no vídeo é demonstrado o link localhost:3000 porém no windows é necessário utilizar esse ip)

 5- Os comandos utilizados no vídeo, estão disponíveis nesse arquivo: https://github.com/fernandadagostin/NodeJS/tree/master/modulo-5/07-multi-db 

---
Ainda no modulo 5