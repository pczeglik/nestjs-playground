import { Controller, Get } from '@nestjs/common';
import { Module2Service } from './module-2.service';

@Controller({
  version: '2',
})
export class Module2Controller {
  constructor(private readonly module1Service: Module2Service) {}

  @Get('module-1')
  getData(): string[] {
    return this.module1Service.getData();
  }
}
