import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceV1 } from './app.v1.service';
import { AppServiceV2 } from './app.v2.service';
import { Module1Module } from './modules/module-1/module-1.module';
import { Module2Module } from './modules/module-2/module-2.module';
import { ApiMiddleware } from './common/middleware/api.middleware';

@Module({
  imports: [Module1Module, Module2Module],
  controllers: [AppController],
  providers: [AppServiceV1, AppServiceV2],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiMiddleware).forRoutes('module-1', 'module-2');
  }
}
