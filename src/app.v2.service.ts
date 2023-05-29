import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceV2 {
  getData(): string[] {
    return ['data11', 'data22'];
  }
}
