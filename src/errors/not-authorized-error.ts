import { CustomError } from './custom-error'

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor(){
    super('Not authorized')

    // because we are extending a built in class !!!
    Object.setPrototypeOf(this,NotAuthorizedError.prototype)
  }

  serializedErrors(){
    return [{
      message: 'Not authorized'
    }]
  }
}