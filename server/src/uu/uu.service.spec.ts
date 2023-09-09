import { Test, TestingModule } from '@nestjs/testing';
import { UuService } from './uu.service';

describe('UuService', () => {
  let service: UuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UuService],
    }).compile();

    service = module.get<UuService>(UuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
