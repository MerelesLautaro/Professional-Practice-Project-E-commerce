import { TokenBlacklistRepository } from 'domain/repositories/AuthenticationRepository';

export class UserLogoutUseCase {
  constructor(private readonly blacklistRepo: TokenBlacklistRepository) {}

  async run(token: string): Promise<void> {
    await this.blacklistRepo.addTokenToBlacklist(token);
  }
}
