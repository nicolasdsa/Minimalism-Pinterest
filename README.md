# Minimalism-Pinterest
Repositorio que tem como objetivo de clonar algumas funções do pinterest com o intuito de praticar mongoose, express, upload de arquivos e MongoDB. 

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
  "message": "Invalid Email or Password"
}
```

### Images
```
POST /images/
```

**Body**

```form-data
  key: "image"
  value: file
```

**Response**

Success (200)

```json
{
    "imageUrl": "assets/0884f28ac0733bec5aa14c8f58c03c230.7454959658448645.webp"
}
```

Bad Request (400)

```json
{
    "message": "No Image"
}
```

Bad Request (400)

```json
{
    "message": "Not a image"
}
```

Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

### Create Pin
Authenticated
```
POST /pins/
```

**Body**

```json
{
   "imageUrl": "assets/0884f28ac0733bec5aa14c8f58c03c230.033300908091943304.webp",
   "texts": {
       "title": "title example",
       "description": "description example"
   }
}
```

**Response**

Success (200)

```json
{
    "success": true
}
```

Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

### List Pins
Authenticated
```
GET /pins/
```
**Response**

Success (200)

```json
{
    "list": [
        {
            "texts": {
                "title": "Titulo bundz",
                "description": "Descrição bundz"
            },
            "_id": "62ba5a46922247659194b07a",
            "imageUrl": "assets/0884f28ac0733bec5aa14c8f58c03c230.033300908091943304.webp",
            "userId": "62ba56ea922247659194b074",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:32:54.204Z",
            "updatedAt": "2022-06-28T01:32:54.204Z",
            "__v": 0
        },
        {
            "texts": {
                "title": "Titulo bundz"
            },
            "_id": "62ba5b22922247659194b07d",
            "imageUrl": "assets/0884f28ac0733bec5aa14c8f58c03c230.033300908091943304.webp",
            "userId": "62ba56ea922247659194b074",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:36:34.388Z",
            "updatedAt": "2022-06-28T01:36:34.388Z",
            "__v": 0
        },
        {
            "texts": {
                "title": "Titulo Muras",
                "description": "Descrição Muras"
            },
            "_id": "62ba5c3d922247659194b081",
            "imageUrl": "assets/1c7b02135fb6db16d0b129ecb7b76f1b0.28205153966750607.webp",
            "userId": "62b17d0eedcd33f7797ca379",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:41:17.069Z",
            "updatedAt": "2022-06-28T01:41:17.069Z",
            "__v": 0
        },
        {
            "texts": {
                "title": "Titulo Nicolas",
                "description": "Descrição Nicolas"
            },
            "_id": "62ba5d86922247659194b088",
            "imageUrl": "assets/1c7b02135fb6db16d0b129ecb7b76f1b0.9639909734290844.webp",
            "userId": "62b17cdeedcd33f7797ca375",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:46:46.405Z",
            "updatedAt": "2022-06-28T01:46:46.405Z",
            "__v": 0
        },
        {
            "texts": {
                "title": "Titulo Jone",
                "description": "Descrição Jone"
            },
            "_id": "62ba5dd3922247659194b08c",
            "imageUrl": "assets/1c7b02135fb6db16d0b129ecb7b76f1b0.10712013052227554.webp",
            "userId": "62b17d1cedcd33f7797ca37c",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:48:03.773Z",
            "updatedAt": "2022-06-28T01:48:03.773Z",
            "__v": 0
        }
    ]
}
```
Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

### List Me Pins
Authenticated
```
GET /pins/me/
```
**Response**

Success (200)

```json
{
    "listMe": [
        {
            "texts": {
                "title": "Titulo Nicolas",
                "description": "Descrição Nicolas"
            },
            "_id": "62ba5d86922247659194b088",
            "imageUrl": "assets/1c7b02135fb6db16d0b129ecb7b76f1b0.9639909734290844.webp",
            "userId": "62b17cdeedcd33f7797ca375",
            "comments": [],
            "likes": [],
            "createdAt": "2022-06-28T01:46:46.405Z",
            "updatedAt": "2022-06-28T01:46:46.405Z",
            "__v": 0
        }
    ]
}
```
Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

### Comment Pin
Authenticated
```
POST /pins/:id/comment
```

**Body**

```json
{
   "comment": "your comment"
}
```

**Response**

Success (200)
```json
{
    "success": true
}
```

Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

Not Found  (404)

```json
{
    "message": "Invalid Id pin"
}
```

### React Pin
Authenticated
```
POST /pins/:id/react
```

**Body**

```json
{
   "react": "like|deslike"
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
    "message": "This comment is not liked"
}
```
Bad Request (400)
```json
{
    "message": "This comment is already liked"
}
```
Unauthorized (401)
```json
{
    "message": "Unauthorized"
}
```

Not Found (404)
```json
{
    "message": "Invalid Id pin"
}
```
