import { Module } from '@nestjs/common';
import { Module2Controller } from './module-2.controller';
import { Module2Service } from './module-2.service';

@Module({
  controllers: [Module2Controller],
  providers: [Module2Service],
})
export class Module2Module {}
