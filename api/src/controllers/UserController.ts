import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController {
    async index(request: Request, response: Response) {
        return response.send(await knex('users').select('*'));
    }
    
    async store(request: Request, response: Response) {
        const {name, avatar, login, senha, criado_em} = request.body;
        //const criado_em = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        
        const trx = await knex.transaction();
        const user = {
            name, avatar, login, senha, criado_em
        };

        const id = await trx('users').insert(user);
        
        await trx.commit();

        return response.json({id: id});
    }

    async delete(request: Request, response: Response) {
        const id = request.params.id;
        await knex('users').where('id', id).delete();
        return response.send({msg: "Usuário deletedo com sucesso!"});
    }
}

export default UserController;