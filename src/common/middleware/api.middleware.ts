import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const API_VERSIONS = ['1', '2'];

@Injectable()
export class ApiMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    console.log('Request...', request.headers);

    console.log(`X-API-Version: ${request.header('X-API-Version')}`);

    // set default version to 1
    if (
      !request.header('X-API-Version') ||
      !API_VERSIONS.includes(request.header('X-API-Version'))
    ) {
      request.headers['X-API-Version'] = '1';
    }

    // return Bed Request response
    //
    // if (!request.header('X-API-Version')) {
    //   response.status(400).json({
    //     statusCode: 400,
    //     message: 'Bad Request',
    //     error: 'X-API-Version header is missing',
    //   });
    // }

    next();
  }
}
