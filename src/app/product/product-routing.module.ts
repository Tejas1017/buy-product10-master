import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth-guard.service";
import { ProductComponent } from "./product.component";
const productChild : Routes =[
    {path:'' ,canActivate:[AuthGuard] ,component: ProductComponent},
]
@NgModule({
    imports: [RouterModule.forChild(productChild)],
    exports: [RouterModule]
})
export class ProductRoutingModule {

}