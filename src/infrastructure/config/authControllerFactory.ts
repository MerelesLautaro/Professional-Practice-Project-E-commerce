import prisma from './prismaClient';
import { UserPrismaRepository } from '../driven-adapters/prisma/UserPrismaRepository';
import { RegisterController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/RegisterController';
import { LogoutController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/LogoutController';
import { InMemoryTokenBlacklistRepository } from 'infrastructure/implementations/authentication/InMemoryTokenBlacklistRepository';

export const buildAuthControllers = () => {
  const userRepository = new UserPrismaRepository(prisma);
  const tokenBlacklistRepo = new InMemoryTokenBlacklistRepository();

  return {
    registerController: new RegisterController(userRepository),
    logoutController: new LogoutController(tokenBlacklistRepo),
  };
};
