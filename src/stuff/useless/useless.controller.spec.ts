import { Test, TestingModule } from '@nestjs/testing';
import { UselessController } from './useless.controller';

describe('Useless Controller', () => {
  let controller: UselessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UselessController],
    }).compile();

    controller = module.get<UselessController>(UselessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
