import { Router, request, response, Request, Response } from 'express';

import { getUsuarios, saveUsuarios } from './controller/UserController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Rota raiz funcionando!' });
});

routes.get('/usuarios', getUsuarios);

routes.post('/usuarios', saveUsuarios);

export default routes
