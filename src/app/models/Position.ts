export class Position {
  constructor(
    public name: string,
    public code: string,
    public hierarchy: number,
    public isValid: boolean=true,
    public canCreate: boolean,
    public canEnd: boolean
  ) {}
}
