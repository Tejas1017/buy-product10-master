import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CartRoutingModule } from "./cart-routing.module";

import { CartComponent } from "./cart.component";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CartRoutingModule
        

    ],
    exports: [
        CartComponent,
    ]

})
export class CartModule {

}