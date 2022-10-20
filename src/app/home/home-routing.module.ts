import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
const HomeChildRout: Routes =[
    // {path:'', redirectTo : "/home" , pathMatch : "full"},
    
]

@NgModule({

    imports: [RouterModule.forChild(HomeChildRout)],
    exports: [RouterModule]

})
export class HomeRoutingModule{

}