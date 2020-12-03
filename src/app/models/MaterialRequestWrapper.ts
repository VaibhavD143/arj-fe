import { ItemMRMappingWrapper } from './ItermMRMappingWrapper';

export class MaterialRequestWrapper{
  constructor(
    public areaFloor: String,
    public remark: String,
    public instruction: String,

    public doRequiredDelivery: Date,

    public serviceId: number,
    public projectId: number,
    public raisedById: number,
    public employeeId: number,
    public materialRequestId: number,

    public itemMRMappingWrappers : Array<ItemMRMappingWrapper>,
  ){}
}