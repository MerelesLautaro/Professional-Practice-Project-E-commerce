import type { Request, Response, NextFunction } from 'express'
import { UserIdNotGeneratedException } from 'domain/exceptions/UserIdNotGeneratedException'
import { EmailAlreadyExistEception } from 'domain/exceptions/EmailAlreadyExistException'
import { AccessDeniedException } from 'domain/exceptions/AccessDeniedException'
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException'
import { BadRequestException } from 'domain/exceptions/BadRequestException'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof UserIdNotGeneratedException) {
    res.status(404).json({ message: err.message })
  } else if (err instanceof EmailAlreadyExistEception || err instanceof AccessDeniedException) {
    res.status(401).json({ message: err.message })
  } else if (err instanceof UnauthorizedAccess) {
    res.status(403).json({ message: err.message })
  } else if (err  instanceof BadRequestException) {
    res.status(400).json({ message: err.message })
  } else {
    res.status(500).json({
      message: 'Internal Server Error',
      error: err.message
    })
  }
}