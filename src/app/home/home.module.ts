import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports:[
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserModule
        
   
    ]

})
export class HomeModule {

}