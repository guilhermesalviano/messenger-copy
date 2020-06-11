import { Request, Response, request } from 'express';
import knex from '../database/connection';

class Login {
    async login(request: Request, response: Response) {
        const {login, senha} = request.body;
        const found = await knex('users').where('login', login).where('senha', senha).first();
        if(found == null){response.statusCode = 406; response.send(false)}
        response.statusCode = 202;
        return response.send(found);
    }
}

export default Login;