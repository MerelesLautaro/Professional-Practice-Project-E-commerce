import { User } from "domain/entities/User";

export interface UserRepository {
  registerUser: (user: User) => Promise<User>
  getUserByEmail: (email: string) => Promise<User | null>
}