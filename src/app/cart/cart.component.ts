import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { ProductsService } from '../appServices/products.service';
import { Cartservice } from '../appServices/quantityitem.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements  DoCheck  {
  constructor(private _cart:DesignutilityService, private _products: ProductsService,private _cartService:Cartservice) { 
    //this._cart = this._cart.cart
    this.products = this._products.products.filter((item)=>{
      return item.quantity > 0;
    })
  }
  
  quant0:boolean=false
  ngDoCheck(): void {
    for(let i =0;i<this.products.length;i++){
      if(this.products[i].quantity==0){
        console.log("yooo")
        console.log(this.products)
      }
    }
  }
  products: { Id: number; Name: string; img: string; quantity: number; }[];
  serverElements = []

  ngOnInit(): void {
  }

  addItemToCart(item: any): void {
    this._cartService.addItem(item)
  }
  removeItemFromCart(item:any):void{
    this._cartService.removeItem(item)
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
