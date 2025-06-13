import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from 'domain/entities/enum/Role';

dotenv.config();

interface JwtPayload {
  id: number;
  email: string;
  roles: Role[];
}

export class TokenService {
  private readonly _secret: string;
  private readonly _expiration: string;

  constructor() {
    this._secret = process.env.JWT_SECRET as string;
    this._expiration = process.env.JWT_EXPIRATION || '86400000';
  }

  generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, this._secret, {
      expiresIn: `${Math.floor(Number(this._expiration) / 1000)}s`
    });
  }
}
