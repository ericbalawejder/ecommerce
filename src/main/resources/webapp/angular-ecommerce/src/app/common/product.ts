// https://stackoverflow.com/questions/35998629/typescript-constructor-overload-with-empty-constructor
export class Product {

  constructor()

  constructor(public id?: string, public sku?: string, public name?: string,
              public description?: string, public unitPrice?: number,
              public imageUrl?: string, public active?: boolean, public unitsInStock?: number,
              public dateCreated?: Date, public lastUpdate?: Date) {}

}
