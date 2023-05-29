import { Controller, Get } from '@nestjs/common';
import { Module1Service } from './module-1.service';

@Controller({
  version: '1',
})
export class Module1Controller {
  constructor(private readonly module1Service: Module1Service) {}

  @Get('module-1')
  getData(): string[] {
    return this.module1Service.getData();
  }
}
