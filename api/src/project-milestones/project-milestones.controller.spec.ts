import { Test, TestingModule } from '@nestjs/testing';
import { ProjectMilestonesController } from './project-milestones.controller';

describe('ProjectMilestonesController', () => {
  let controller: ProjectMilestonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectMilestonesController],
    }).compile();

    controller = module.get<ProjectMilestonesController>(ProjectMilestonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
