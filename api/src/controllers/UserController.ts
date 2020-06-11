import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController {
    async index(request: Request, response: Response) {
        response.statusCode = 202;
        return response.send(await knex('users').select('*'));
    }

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const user = await knex('users').where('id', id).first();
        if(user === undefined){ response.statusCode = 404; return response.json({msg: 'Nenhum usuário encontrado'}); }
        response.statusCode = 202;
        return response.send(user);
    }
    
    async store(request: Request, response: Response) {
        const {name, avatar, login, senha} = request.body;
        const criado_em = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        
        const trx = await knex.transaction();
        const user = {
            name, avatar, login, senha, criado_em
        };

        const id = await trx('users').insert(user);
        
        await trx.commit();

        response.statusCode = 201;

        return response.json({id: id});
    }

    async update(request: Request, response: Response) {
        const {id} = request.params;
        const {name, avatar, login, senha} = request.body;
        const atualizado_em = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        
        const trx = await knex.transaction();
        const user = {
            name, avatar, login, senha, atualizado_em
        };

        const find = await trx('users').where('id', id).update(user) as boolean;
        await trx.commit();

        if(!find){response.statusCode = 404;return response.json({msg: "usuário não encontrado"});}
        
        response.statusCode = 200;

        return response.json({id: id});
    }

    async delete(request: Request, response: Response) {
        const id = request.params.id;
        await knex('users').where('id', id).delete();
        return response.send({msg: "Usuário deletedo com sucesso!"});
    }
}

export default UserController;