import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class ProjectMilestoneCreateDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  requiredSkills: string;

  @IsInt()
  @IsPositive()
  budget: number;

  @IsInt()
  deadline: number;
}
