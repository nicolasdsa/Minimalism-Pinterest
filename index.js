const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const database = require('./utils/database');
const authRouter = require("./services/auth");
const pinsRouter = require('./services/pins');
const imagesRouter = require('./services/images');
server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log('alo');
})

server.use("/auth", authRouter);
server.use('/pins', pinsRouter);
server.use('/images', imagesRouter);