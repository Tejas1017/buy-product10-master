import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { DesignutilityService } from '../appServices/designutility.service';
import { ProductsService } from '../appServices/products.service';
import { Auth } from '../auth.service';
import {Cartservice} from '../appServices/quantityitem.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  

  constructor(
    private router: Router,
    private authService: Auth,private _products :ProductsService
    ,private _cartService:Cartservice) {
   
    this.products = this._products.products
    
  }

  abc: {Name:string,quantity:number}[];
  products : {Id : number, Name : string, img: string, quantity:number}[];

  ngOnInit(): void {
  }
  productSelected:boolean = false
  selectedProduct = ''
  select = ''
  name: boolean = false
  addedProduct: any
  checkout() {
    this.router.navigate(['cart'])
    this.authService.login()
  }
  inputnumber = 0;

  addItemToCart(item: any): void {
    this._cartService.addItem(item)
  }
  removeItemFromCart(item:any):void{
    this._cartService.removeItem(item)
  }
}
