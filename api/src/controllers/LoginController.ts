import { Request, Response, request } from 'express';
import knex from '../database/connection';

class Login {
    async login(request: Request, response: Response) {
        const {login, senha} = request.body;
        const found = await knex('users').where('login', login).where('senha', senha).first();
        return response.send(found == null ? false : found);
    }
}

export default Login;