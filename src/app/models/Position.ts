export class Position {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public hierarchy: number,
    public isValid: boolean=true,
    public canCreate: boolean,
    public canEnd: boolean
  ) {}
}
