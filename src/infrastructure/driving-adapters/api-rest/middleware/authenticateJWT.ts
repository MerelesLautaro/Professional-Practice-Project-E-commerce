import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException';
import { AccessDeniedException } from 'domain/exceptions/AccessDeniedException';
import { TokenExpiredException } from 'domain/exceptions/TokenExpiredException';
import { TokenBlacklistRepository } from 'domain/repositories/AuthenticationRepository';

dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    roles: string[];
  };
}

export function authenticateJWT(blacklistRepo: TokenBlacklistRepository) {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new AccessDeniedException());
    }

    const token = authHeader.split(' ')[1];

    // Verificar si el token está en la blacklist
    const isBlacklisted = await blacklistRepo.isTokenBlacklisted(token);
    if (isBlacklisted) {
      return next(new UnauthorizedAccess());
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthenticatedRequest['user'];
      req.user = decoded;
      next();
    } catch (err: any) {
      if (err.name === 'TokenExpiredError') {
        return next(new TokenExpiredException());
      }
      return next(new UnauthorizedAccess());
    }
  };
}
