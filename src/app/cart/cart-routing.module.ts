import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth-guard.service";
import { CartComponent } from "./cart.component";

const CartChild: Routes=[
    {path:'',  canActivate:[AuthGuard],component : CartComponent},
]
@NgModule({
    imports:[
        RouterModule.forChild(CartChild)

    ],
    exports: [
       RouterModule
    ]
    
})
export class CartRoutingModule{

}