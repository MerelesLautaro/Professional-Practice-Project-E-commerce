import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException';
import { AccessDeniedException } from 'domain/exceptions/AccessDeniedException';

dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    roles: string[];
  };
}

export function authenticateJWT(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AccessDeniedException()); 
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthenticatedRequest['user'];
    req.user = decoded;
    next();
  } catch (err) {
    return next(new UnauthorizedAccess());
  }
}
