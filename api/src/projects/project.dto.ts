export class CreateProjectDTO {
  id?: number;
  title: string;
  description: string;
  requiredSkills: string;
  budget: number;
  deadline: number;
  clientId: number;
}
