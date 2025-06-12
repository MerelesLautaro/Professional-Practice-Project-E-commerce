import { Router } from 'express';
import { buildAuthControllers } from '../../../config/authControllerFactory';

const { registerController, logoutController } = buildAuthControllers();

const authRouter = Router();

authRouter.post('/register', registerController.handle.bind(registerController));
authRouter.post('/logout', logoutController.handle.bind(logoutController));

export default authRouter;
