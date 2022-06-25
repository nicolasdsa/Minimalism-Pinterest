# Minimalism-Pinterest
Repositorio para projeto de uma locadora de filmes

## Ambiente de desenvolvimento
Esse projeto foi desenvolvido utilizando windows, utilizando a porta 27017 para o mongodb e a porta 3000 para o express.

## Como iniciar o projeto

No terminal, para instalar as dependências:
```
npm install
```
Para rodar:
```
npm run start
```
## Dependências instaladas
    -Bcryptjs
    -Body-parser
    -Express
    -Joi
    -Jsonwebtoken
    -Mongodb
    -Nodemon
    -mongoose
    -express-fileupload

## Endpoints

### Signup

```
POST /auth/signup
```

**Body**

```json
{
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98",
  "username": "Your username here"
}
```

**Response**

Success (200)

```json
{
  "success": true
}
```

Bad Request (400)

```json
{
  "message": "Email is already in use."
}
```

### Sign in

```
POST /auth/signin
```

**Body**

```json
{
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98"
}
```

**Response**

Success (200)

```json
{
  "token": "oiasuhdiuhasIOUFHGAIUSDFLIUASEHGIFUAYSDFYASDF7ASD8F7YTAS8D67FCGASYDCVAUYSDVCUYASDVCUYAVD"
}
```

Bad Request (400)

```json
{
  "message": "Invalid password."
}
```

README em criação
