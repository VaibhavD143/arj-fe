export class GlobalConstants {
  public static baseUrl : String = "http://localhost:8010";

  public static loginUrl = GlobalConstants.baseUrl+"/login";
  public static findAllUOMsUrl = GlobalConstants.baseUrl+"/admin/uom";

  public static findAllPositionsUrl= GlobalConstants.baseUrl+ "/admin/position";//get request
  public static addPositionUrl= GlobalConstants.baseUrl+ "/admin/position";     //post request
  public static deletePositionUrl= GlobalConstants.baseUrl+ "/admin/deletePosition";  //delete request
  public static updatePositionUrl= GlobalConstants.baseUrl+ "/admin/updatePosition";
}
