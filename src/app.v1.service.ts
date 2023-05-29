import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceV1 {
  getData(): string[] {
    return ['data1', 'data2'];
  }
}
