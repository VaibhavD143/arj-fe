export class Project {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public isValid: boolean=true,
  ) {}
}
