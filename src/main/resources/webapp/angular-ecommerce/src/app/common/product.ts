// https://stackoverflow.com/questions/35998629/typescript-constructor-overload-with-empty-constructor
export class Product {
/*
  constructor()

  constructor(public id?: string, public sku?: string, public name?: string,
              public description?: string, public unitPrice?: number,
              public imageUrl?: string, public active?: boolean, public unitsInStock?: number,
              public dateCreated?: Date, public lastUpdate?: Date) {}

 */
  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdate: Date;

  constructor(id: string, sku: string, name: string, description: string,
              unitPrice: number, imageUrl: string, active: boolean,
              unitsInStock: number, dateCreated: Date, lastUpdate: Date) {
    this.id = id;
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
