import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class Module1Service {
  private readonly logger = new Logger(Module1Service.name);

  getData(): string[] {
    this.logger.log('Hello world');
    return ['data1', 'data2'];
  }
}
