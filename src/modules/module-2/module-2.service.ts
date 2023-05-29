import { Injectable } from '@nestjs/common';

@Injectable()
export class Module2Service {
  getData(): string[] {
    return ['data11', 'data22'];
  }
}
