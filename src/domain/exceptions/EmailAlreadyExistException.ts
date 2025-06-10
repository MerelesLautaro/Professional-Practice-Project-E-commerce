export class EmailAlreadyExistEception extends Error {
  constructor() {
    super("Email already exists")
  }
}