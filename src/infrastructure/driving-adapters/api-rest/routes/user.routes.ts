import { Router } from 'express';
import { buildAuthControllers } from '../../../config/authControllerFactory';

const { registerController, logoutController, loginController } = buildAuthControllers();

const authRouter = Router();

authRouter.post('/register', registerController.handle.bind(registerController));
authRouter.post('/logout', logoutController.handle.bind(logoutController));
authRouter.post('/login', loginController.handle.bind(loginController));

export default authRouter;
