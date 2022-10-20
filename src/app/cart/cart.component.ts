import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { ProductsService } from '../appServices/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements  DoCheck  {
  constructor(private _cart:DesignutilityService, private _products: ProductsService) { 
    this.products = this._products.products
  }
  
  quant0:boolean=false
  ngDoCheck(): void {
    for(let i =0;i<this.products.length;i++){
      if(this.products[i].quantity==0){
        console.log("yooo")
      }
    }
  }
  products: { Id: number; Name: string; img: string; quantity: number; }[];
  serverElements = []

  ngOnInit(): void {
  }
  remove(index:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].quantity!==0){
        this.products[i].quantity= this.products[i].quantity-1
      }
      else if(this.products[i].quantity===0){
          this.products.splice(index+1,0) 
      }
     }


}
}
