# Projeto de Login e Registro

Este é um projeto full-stack que consiste em um aplicativo React (front-end) e um servidor Express (back-end) integrado com MongoDB para autenticação de usuário.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados na sua máquina.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/login-registration.git
Instale as dependências do cliente e do servidor:


cd login-registration/client
npm install

cd ../server
npm install
Configure as variáveis de ambiente:

No diretório server, crie um arquivo .env com as seguintes informações:

dotenv
Copy code
DATABASE_URL='mongodb+srv://alexandrebacellar:Iepf7F5OJV48zrg0@cluster0.evqus2o.mongodb.net/usuarios'

(O arquivo .env está no .gitignore por boas práticas, mas pelo propósito de testar, estou disponibilzando a url do banco de dados com a senha).

Inicie o servidor:


cd server
npm start

O servidor estará rodando em http://localhost:3001

Inicie o cliente React:


cd client
npm start

O aplicativo React será aberto em http://localhost:3000
