import { Test, TestingModule } from '@nestjs/testing';
import { LineConfigService } from './line-config.service';

describe('LineConfigService', () => {
  let service: LineConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineConfigService],
    }).compile();

    service = module.get<LineConfigService>(LineConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
