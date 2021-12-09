export class IdGenerator {
  static itemId: number = 1;
  static customerId: number = 1;
  static orderId: number = 1;


  static getItemId(): number {
    let num = this.itemId;
    this.itemId++;
    return num;
  }

 static getCustomerId():number{
    let num = this.customerId;
    this.customerId++;
    return num;

  }
 
  static getOrderId():number{
    let num = this.orderId;
    this.orderId++;
    return num;
  }

}