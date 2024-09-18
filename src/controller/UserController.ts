import { AppDataSource } from '../data-source';
import { NextFunction, Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';

export const getUsuarios = async (request: Request, response: Response) => {
  const usuarios = await AppDataSource.getRepository(Usuario).find();
  return response.json(usuarios);
};

export const saveUsuarios = async (request: Request, response: Response) => {
  const usuarios = await AppDataSource.getRepository(Usuario).save(request.body);
  return response.json(usuarios);
};

