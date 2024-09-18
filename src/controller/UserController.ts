import { AppDataSource } from '../data-source';
import { NextFunction, Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';

export const getUsuarios = async (request: Request, response: Response) => {
  const usuarios = await AppDataSource.getRepository(Usuario).find();
  return response.json(usuarios);
};
