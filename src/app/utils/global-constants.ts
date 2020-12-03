export class GlobalConstants {
  public static baseUrl : String = "http://localhost:8010";

  public static loginUrl = GlobalConstants.baseUrl+"/login";
  public static findAllUOMsUrl = GlobalConstants.baseUrl+"/admin/uom";
  public static findAssignedProjectsUrl = GlobalConstants.baseUrl+"/materialRequest/project";
  public static findAllItemsByService = GlobalConstants.baseUrl+"/materialRequest/findItemsByService";
  public static findAllServices = GlobalConstants.baseUrl+"/admin/service";
  public static findAllMakes = GlobalConstants.baseUrl+"/admin/make";
  public static findAllOrigins = GlobalConstants.baseUrl+"/admin/origin";
  public static createMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/create";
  public static findAllProcessedMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/findAllProcessedMaterialRequest";
  public static findAllPendingMaterialRequests = GlobalConstants.baseUrl+"/materialRequest/findAllPendingMaterialRequests";
  public static approveMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/approve";
  public static declineMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/decline";
  public static closeMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/close";
  public static reopenMaterialRequest = GlobalConstants.baseUrl+"/materialRequest/reopen";
  public static uploadPo = GlobalConstants.baseUrl+"/fileSystem/upload";
  public static downloadPo = GlobalConstants.baseUrl+"/fileSystem/getPo";
  public static deletePo = GlobalConstants.baseUrl+"/fileSystem/delete";
  public static getPurchaseOrders = GlobalConstants.baseUrl+"/materialRequest/getPurchaseOrders";

  public static findAllPositionsUrl= GlobalConstants.baseUrl+ "/admin/position";//get request
  public static addPositionUrl= GlobalConstants.baseUrl+ "/admin/position";     //post request
  public static deletePositionUrl= GlobalConstants.baseUrl+ "/admin/deletePosition";
  public static updatePositionUrl= GlobalConstants.baseUrl+ "/admin/updatePosition";
  
  public static findAllMakesUrl = GlobalConstants.baseUrl+ '/admin/make';
  public static addMakeUrl= GlobalConstants.baseUrl+ "/admin/make";
  public static deleteMakeUrl= GlobalConstants.baseUrl+ "/admin/deleteMake";
  public static updateMakeUrl= GlobalConstants.baseUrl+ "/admin/updateMake";

  public static findAllOriginsUrl = GlobalConstants.baseUrl+ '/admin/origin';
  public static addOriginUrl= GlobalConstants.baseUrl+ "/admin/origin";
  public static deleteOriginUrl= GlobalConstants.baseUrl+ "/admin/deleteOrigin";
  public static updateOriginUrl= GlobalConstants.baseUrl+ "/admin/updateOrigin";

  public static findAllUomsUrl = GlobalConstants.baseUrl+ '/admin/uom';
  public static addUomUrl= GlobalConstants.baseUrl+ "/admin/uom";
  public static deleteUomUrl= GlobalConstants.baseUrl+ "/admin/deleteUom";
  public static updateUomUrl= GlobalConstants.baseUrl+ "/admin/updateUom";

  public static findAllServicesUrl = GlobalConstants.baseUrl+ '/admin/service';
  public static addServiceUrl= GlobalConstants.baseUrl+ "/admin/service";
  public static deleteServiceUrl= GlobalConstants.baseUrl+ "/admin/deleteService";
  public static updateServiceUrl= GlobalConstants.baseUrl+ "/admin/updateService";

  public static config = {
    1:{
      "createMr":true,
      "processed" : true,
    },
    2:{
      "createMr":true,
      "processed":true,
      "pending":true,
    },
    3:{
      "pending" : true,
      "processed" : true,
    },
    4:{
      "pending" : true,
      "processed" : true,
    },
    5:{
      "open":true,
      "closed":true,
    }
    
  }

}
