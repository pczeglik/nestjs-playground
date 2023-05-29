import { Controller, Get, Version } from '@nestjs/common';
import { AppServiceV1 } from './app.v1.service';
import { AppServiceV2 } from './app.v2.service';

@Controller()
export class AppController {
  constructor(
    private readonly appServiceV1: AppServiceV1,
    private readonly appServiceV2: AppServiceV2,
  ) {}

  @Version('1')
  @Get()
  getDataV1(): string[] {
    return this.appServiceV1.getData();
  }

  @Version('2')
  @Get()
  getDataV2(): string[] {
    return this.appServiceV2.getData();
  }
}
