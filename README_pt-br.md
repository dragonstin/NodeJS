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
**Note:** iniciar projecto ->  npm init -y
