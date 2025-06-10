import Joi from 'joi';
import { UserRegisterRequest } from 'application/DTO/request/authentication/UserRegisterRequest';

export class UserValidator {
  private static readonly schema = Joi.object<UserRegisterRequest>({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string()
      .pattern(/^[0-9]{7,15}$/)
      .required()
  });

  static validate(input: UserRegisterRequest): void {
    const { error } = this.schema.validate(input);
    if (error) {
      throw new Error(`Validation failed: ${error.message}`);
    }
  }
}
