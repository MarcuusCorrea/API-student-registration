# API Fullstack Node.js - Cadastro de Estudantes

Este é um projeto de API Fullstack desenvolvido com Node.js no backend e React no frontend. O objetivo é criar uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar cadastros de estudantes.

## Estrutura do Projeto

A estrutura do projeto está organizada em duas pastas principais: `backend` e `frontend`.

### Backend

A pasta `backend` contém a API desenvolvida com Node.js e Express. A estrutura é a seguinte:

- **controllers**: Contém a lógica das operações CRUD em `user.js`.
- **routes**: Define as rotas da API em `index.js`.
- **db.js**: Configuração da conexão com o banco de dados MySQL.
- **index.js**: Configuração do servidor Express e integração das rotas.
- **package.json**: Lista de dependências e scripts para o backend.

### Frontend

A pasta `frontend` contém a aplicação React que consome a API do backend. A estrutura é a seguinte:

- **public**: Arquivos públicos, incluindo `index.html`.
- **src**: Código fonte do frontend.
  - **components**: Componentes React utilizados na aplicação (`Form.js` e `Grid.js`).
  - **styles**: Estilos globais da aplicação (`global.js`).
  - **App.js**: Componente principal da aplicação.
  - **index.js**: Ponto de entrada da aplicação React.
- **package.json**: Lista de dependências e scripts para o frontend.

## Banco de Dados

O banco de dados utilizado é o MySQL. A estrutura da tabela `usuarios` é a seguinte:

- **id**: Chave primária, auto-incrementada.
- **nome**: Nome do estudante.
- **email**: E-mail do estudante.
- **curso**: Curso do estudante.
- **data_nascimento**: Data de nascimento do estudante.

A conexão com o banco de dados é configurada no arquivo `db.js` no backend, onde são especificados o host, usuário, senha e nome do banco de dados.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- MySQL instalado e configurado

### Configuração do Banco de Dados

1. Crie um banco de dados no MySQL com o nome `crud_estudantes`.
2. Crie a tabela `usuarios` com a seguinte estrutura:

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  curso VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL
);
Rodando o Backend
Navegue até a pasta backend.
Instale as dependências com o comando yarn ou npm install.
Inicie o servidor com o comando yarn start ou npm start.
O servidor backend estará rodando em http://localhost:8800.

Rodando o Frontend
Navegue até a pasta frontend.
Instale as dependências com o comando yarn ou npm install.
Inicie o servidor com o comando yarn start ou npm start.
O servidor frontend estará rodando em http://localhost:3000.

Consumindo a API
A aplicação frontend consumirá a API para realizar operações de criação, leitura, atualização e exclusão de estudantes. As operações são realizadas por meio das seguintes rotas:

GET /: Retorna a lista de todos os estudantes.
POST /: Cria um novo estudante.
PUT /:id: Atualiza os dados de um estudante existente.
DELETE /:id: Exclui um estudante.
Conclusão
Este projeto demonstra como criar uma aplicação Fullstack com Node.js e React, utilizando um banco de dados MySQL para gerenciar cadastros de estudantes. A estrutura modular do projeto facilita a manutenção e a escalabilidade, permitindo futuras expansões e melhorias
