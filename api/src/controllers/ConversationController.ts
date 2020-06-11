import {Request, Response} from 'express';
import knex from '../database/connection';

class ConversationController {
    async index(request: Request, response: Response) {
        const {user_id} = request.query;
        const conversations_ids = await knex('messages').where('from_user_id', String(user_id)).select('to_user_id').distinct();

        const ids = conversations_ids.map(id => id.to_user_id);

        const users = await knex('users')
            .whereIn('id', ids)
            .select('*');
            
        response.json(users);
        
    }
}

export default ConversationController;