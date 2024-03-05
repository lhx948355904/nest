import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppService implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req,res,next)
    next();
  }

  getHello(): any {
    return { a: 'Hello World!' };
  }
}
