import Router from 'express';
import { messages } from '../app.js';

const newRouter = Router();

newRouter.post('/', (req, res) => {
  const user = req.body.user;
  const message = req.body.message;
  messages.push({ user: user, message: message, createdAt: new Date() });
  res.redirect('/');
});

export default newRouter;
