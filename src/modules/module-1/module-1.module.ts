import { Module } from '@nestjs/common';
import { Module1Controller } from './module-1.controller';
import { Module1Service } from './module-1.service';

@Module({
  controllers: [Module1Controller],
  providers: [Module1Service],
})
export class Module1Module {}
