import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Nome: string;

  @CreateDateColumn()
  DataNascimento: Date;

  @Column()
  Email: string;

  @Column()
  Senha: string;

  @Column()
  CidadeResidenciaID: number;

  @Column()
  Tipo: string;
}
