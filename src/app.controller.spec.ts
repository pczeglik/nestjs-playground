import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppServiceV1 } from './app.v1.service';
import { AppServiceV2 } from './app.v2.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppServiceV1, AppServiceV2],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return data', () => {
      expect(appController.getDataV1()).toEqual(['data1', 'data2']);
    });
  });
});
