import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";


import { ProductComponent } from "./product.component";

@NgModule({
    declarations:[
        ProductComponent,
    ],
    imports:[
         FormsModule,
         CommonModule ,
         ProductRoutingModule
         
         
    ],
   
   
})
export class ProductModule {

}