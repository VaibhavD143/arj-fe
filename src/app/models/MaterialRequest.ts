export class Make {
  constructor(
    private doCreation: Date,
    private doCancellation: Date,
    private doRequiredDelivery: Date,
    private doCompletion: Date,
    private status: string,
    private remark: string,
    private areaFloor: string,
    private instruction: string,
    private currentLevelOfHierarchy: number,
) {}
}
