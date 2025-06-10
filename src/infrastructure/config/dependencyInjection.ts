import { UserPrismaRepository } from '../driven-adapters/prisma/UserPrismaRepository'
import { UserController } from 'infrastructure/driving-adapters/api-rest/controllers/UserController'
import prisma from './prismaClient'

export const buildUserController = (): UserController => {
  const userRepository = new UserPrismaRepository(prisma)
  return new UserController(userRepository)
}
