export class Product {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdate: Date;

  constructor(sku: string, name: string, description: string,
              unitPrice: number, imageUrl: string, active: boolean,
              unitsInStock: number, dateCreated: Date, lastUpdate: Date) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.unitsInStock = unitsInStock;
    this.dateCreated = dateCreated;
    this.lastUpdate = lastUpdate;
  }
}
