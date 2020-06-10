import express from 'express';

import UserController from './controllers/UserController';
import MessageController from './controllers/MessageController';

const userController = new UserController();
const messageController = new MessageController();

const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', userController.store);
routes.delete('/users/:id', userController.delete);
routes.get('/messages', messageController.index);
routes.post('/messages', messageController.store);

export default routes;