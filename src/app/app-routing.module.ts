import { NgModule } from '@angular/core';

import {WomenComponent} from './women/women.component'
import {MaidenComponent} from './maiden/maiden.component'
import {GirlComponent} from './girl/girl.component'
import {UploadDressComponent} from './upload-dress/upload-dress.component'
import {AboutComponent} from './about/about.component'
import {DressComponent} from './dress/dress.component'
import {MyUploadsComponent} from './my-uploads/my-uploads.component'
import {LoveComponent} from './love/love.component'
import {CartComponent} from './cart/cart.component'
import {EditDressComponent} from './edit-dress/edit-dress.component'
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'women', component: WomenComponent },
  { path: 'maiden', component: MaidenComponent },
  { path: 'girl', component: GirlComponent },
  { path: 'upload', component: UploadDressComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dress', component: DressComponent },
  { path: 'my-uploads', component: MyUploadsComponent },
  { path: 'love', component: LoveComponent },
  { path: 'cart', component: CartComponent },
  { path: 'edit', component: EditDressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/women', pathMatch: 'full' }, // redirect to `first-component`

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
