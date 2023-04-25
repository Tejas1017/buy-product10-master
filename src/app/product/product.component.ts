import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { DesignutilityService } from '../appServices/designutility.service';
import { ProductsService } from '../appServices/products.service';
import { Auth } from '../auth.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  

  constructor(private _cart: DesignutilityService,
    private router: Router,
    private authService: Auth,private _products :ProductsService) {
    this.abc = this._cart.cart;
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

  plus(val: any) {
    this.productSelected = true
    this.selectedProduct = this.products[val-1].Name
    
    console.log('heheheh',this.abc)
    
    // console.log(val)
    //console.log(this.products[val-1]);
    this.products[val-1].quantity= this.products[val-1].quantity+1;
    //console.log(this.products[val-1].quantity);
  }
  minus(val:any) {
    if (this.products[val-1].quantity!==0) {
        this.products[val-1].quantity = this.products[val-1].quantity-1
    }
    else
    {
      this.productSelected= false
    }
  }
}
