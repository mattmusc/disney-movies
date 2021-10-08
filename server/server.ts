import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jsonServer from 'json-server';

dotenv.config();
const server = express();

const PORT = process.env.SERVER_PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL;
const CLIENT_PORT = process.env.CLIENT_PORT;
const SERVER_URL = process.env.SERVER_URL;

server.use(cors({
  origin: `${CLIENT_URL}:${CLIENT_PORT}`,
}));

server.use('/', jsonServer.router('./server/db.json'));

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
  console.log(`server url: ${SERVER_URL}`)
  console.log(`client url: ${CLIENT_URL}:${CLIENT_PORT}`)
});
