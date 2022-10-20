import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';




const routes: Routes = [
 

 {path : '',component: HomeComponent},
 {path:'', component:Headers},
//  {path: 'Not-found',component:ErrorComponent, data: {message:'page not found!!'}},
//  {path: '**',redirectTo:'/Not-found'},
  
  {path: 'cart',
  loadChildren:()=>
  import('./cart/cart.module')
  .then(x=>x.CartModule)},
  
  {path: 'product',
  loadChildren:()=>
  import('./product/product.module')
  .then(x=>x.ProductModule)},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
