import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  constructor(private _products :ProductsService) {
    this.products = this._products.products
  }
  abc: { Name: string; quantity: number }[];
  selectedProduct = '';
  productSelected:boolean = false
  // selectedProduct = ''
  products: { Id: number; Name: string; img: string; quantity: number }[];
  // private cartItems: any[] = [];
  addItem(val: any) {
    this.selectedProduct = this.products[val - 1].Name;
    console.log('heheheh', this.abc);
    this.products[val - 1].quantity = this.products[val - 1].quantity + 1;
  }
  
  removeItem(val:any) {
    if (this.products[val-1].quantity!==0) {
        this.products[val-1].quantity = this.products[val-1].quantity-1
    }
    else
    {
      this.productSelected= false
    }
  }


  getItems(): any[] {
    return this.products;
  }
}
