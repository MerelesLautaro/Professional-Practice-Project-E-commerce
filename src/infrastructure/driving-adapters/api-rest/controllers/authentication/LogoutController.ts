import type { Request, Response, NextFunction } from 'express';
import type { TokenBlacklistRepository } from 'domain/repositories/AuthenticationRepository';
import { BadRequestException } from 'domain/exceptions/BadRequestException';

export class LogoutController {
  
  constructor(private readonly tokenBlacklistRepo: TokenBlacklistRepository) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new BadRequestException('Token no valid'));
      }

      const token = authHeader.split(' ')[1];

      await this.tokenBlacklistRepo.addTokenToBlacklist(token);

      res.status(204).send(); // No Content
    } catch (err) {
      next(err);
    }
  }
}
