import cors from 'cors';
import express from 'express';
import jsonServer from 'json-server';

const server = express();

const PORT = 5000;

server.use(cors());
server.use('/', jsonServer.router('./server/db.json'));

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
});
