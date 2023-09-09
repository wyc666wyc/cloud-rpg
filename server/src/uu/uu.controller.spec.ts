import { Test, TestingModule } from '@nestjs/testing';
import { UuController } from './uu.controller';
import { UuService } from './uu.service';

describe('UuController', () => {
  let controller: UuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UuController],
      providers: [UuService],
    }).compile();

    controller = module.get<UuController>(UuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
