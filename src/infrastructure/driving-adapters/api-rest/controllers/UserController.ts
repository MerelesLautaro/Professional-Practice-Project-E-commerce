import type { Request, Response, Router, NextFunction } from 'express'
import { Router as ExpressRouter } from 'express'
import type { UserRepository } from 'domain/repositories/UserRepository'
import { UserCreatorUseCase } from 'application/useCases/UserCreator'
import type { Token } from 'application/DTO/response/authentication/Token'
import type { UserRegisterRequest } from 'application/DTO/request/authentication/UserRegisterRequest'
import  { userRegisterSchema } from 'application/validators/UserValidator'
import { BadRequestException } from 'domain/exceptions/BadRequestException'

export class UserController {
  
  public readonly router: Router

  constructor (private readonly userRepository: UserRepository) {
    this.router = ExpressRouter()
    this.initializeRoutes()
  }

  private initializeRoutes (): void {
    this.router.post('/auth/register', this.registerUser.bind(this)) // public
    // this.router.get('/admin/dashboard', authenticateJWT, authorizeRoles('ADMIN'), this.adminDashboard.bind(this)); Example endpoint protected
  }

  private async registerUser (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userRegisterRequest: UserRegisterRequest = req.body
      const { error } = userRegisterSchema.validate(userRegisterRequest);
      if (error) {
        return next(new BadRequestException(error.details[0].message))
      }

      const useCase = new UserCreatorUseCase(this.userRepository)

      const token: Token = await useCase.run(userRegisterRequest)

      res.status(201).json(token)
    } catch (err) {
      next(err)
    }
  }
}