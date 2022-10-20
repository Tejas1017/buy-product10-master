import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { ProductsService } from '../appServices/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _cart:DesignutilityService, private _products: ProductsService) {
    this.abc = this._cart.cart;
    this.products = this._products.products
   }
  
  array = []
  products: { Id: number; Name: string; img: string; quantity: number; }[];
  abc = [] 
  element = []
  serverElements = []

  ngOnInit(): void {
  }
  
  remove(index:number)
  {
    this.products.splice(index,1)  
  }

}
