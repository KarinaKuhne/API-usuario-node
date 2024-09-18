import { Router, request, response, Request, Response } from 'express';

import { getUsuarios } from './controller/UserController';

const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' });
});

routes.get('/usuarios', getUsuarios);

export default routes;
