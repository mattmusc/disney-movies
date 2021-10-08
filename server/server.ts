import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jsonServer from 'json-server';
import {insertRandomDelayInResponse} from './utils/insert-random-delay-in-response';

dotenv.config();
const server = express();

const PORT = process.env.SERVER_PORT || 5000;
const CLIENT_HOST = process.env.CLIENT_HOST;
const CLIENT_PORT = process.env.CLIENT_PORT;
const SERVER_HOST = process.env.SERVER_HOST;

server.use(cors({
  origin: `${CLIENT_HOST}:${CLIENT_PORT}`,
}));

server.use(insertRandomDelayInResponse);

server.use('/', jsonServer.router('./server/db.json'));

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
  console.log(`server host: ${SERVER_HOST}`)
  console.log(`client host: ${CLIENT_HOST}:${CLIENT_PORT}`)
});
