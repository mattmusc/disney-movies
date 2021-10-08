import express from 'express';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const insertRandomDelayInResponse = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const delay = getRandomInt(500, 1000);
  setTimeout(() => {
    next()
  }, delay);
};
