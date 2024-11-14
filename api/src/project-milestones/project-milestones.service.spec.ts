import { Test, TestingModule } from '@nestjs/testing';
import { ProjectMilestonesService } from './project-milestones.service';

describe('ProjectMilestonesService', () => {
  let service: ProjectMilestonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectMilestonesService],
    }).compile();

    service = module.get<ProjectMilestonesService>(ProjectMilestonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
