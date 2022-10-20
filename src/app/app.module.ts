import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule, RouterLink,  } from '@angular/router';
import { HeaderComponent } from './head/header.component';
import { DesignutilityService } from './appServices/designutility.service';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth-guard.service';
import { Auth } from './auth.service';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
     ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,  
    HomeModule,
  ],
  exports: [RouterModule],
  providers: [DesignutilityService,AuthGuard,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
