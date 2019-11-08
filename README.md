# About

Studying Node.js through the NodeBR course.

Versão em Português-BR <README_pt-br.md>

---

## A little bit of concept

### Node.js

- Created by Ryan Dahl in 2009. Node.js is a platform for building backend applications using JavaScript.

### NPM

- NPM (stands for Node Package Manager) is responsible for managing the dependencies(package.json) of the project.

---
## Installation

- Install Node.js in your computer <https://nodejs.org/en/>.
- Run the command <code>node --version</code>, to check the version of the node that is installed on your computer.

### Starting a project

- To start a node.js project, run the command <code>npm init</code> (or <code>npm init -y</code> to run as the default settings).

---
## Using NPM to write a line commands

NPM also can be used to write line commands.

In the package.json file:

<code>"scripts": {
&ensp;&ensp;&ensp;&ensp;"dev": "node index.js"
},</code>

In this code snippet, it is showed the function "dev".

To execute line commands with NPM it is used the command <code>npm run "name-of-your-function"</code>, with base of the code above, it would be <code>npm run dev</code>.

---
## Life cicle of JavaScript

- Functions that need external resources (access to database or files) will be running in the background.
- The code does not run sequentially.
- Remember to keep the sequence of your program to avoid problems.

---
