import { Request, Response } from 'express';
import knex from '../database/connection';

class MessageController {
    async index(request: Request, response: Response) {
        const {from_user_id, to_user_id} = request.query;
        const messages = await knex('messages').where('from_user_id', String(from_user_id)).where('to_user_id', String(to_user_id)).select('*');
        return response.json(messages);
    }

    async show(request: Request, response: Response) {
        const {from_user_id, to_user_id} = request.params;
        const message = await knex('messages').where('from_user_id', 1).where('to_user_id', 2).select('*');
        return response.json(message);
    }

    async store(request: Request, response: Response) {
        const {_id, text, createdAt, from_user_id, to_user_id, video, image} = request.body;
        const message = {
            _id, text, createdAt, from_user_id, to_user_id, video, image
        };
        const id = await knex('messages').insert(message);
        return response.send({msg: 'Mensagem criada. Id: '+ id});
    }
}

export default MessageController;