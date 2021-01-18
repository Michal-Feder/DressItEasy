
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md';
import { CheckboxModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { InputsModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';
import { ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WomenComponent } from './women/women.component';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'angular-bootstrap-md'
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { GirlComponent } from './girl/girl.component';
import { MaidenComponent } from './maiden/maiden.component';
import { AboutComponent } from './about/about.component';
import { UploadDressComponent } from './upload-dress/upload-dress.component';
import { DressComponent } from './dress/dress.component';
import { EditDressComponent } from './edit-dress/edit-dress.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { LoveComponent } from './love/love.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WomenComponent,
    GirlComponent,
    MaidenComponent,
    AboutComponent,
    UploadDressComponent,
    DressComponent,
    EditDressComponent,
    LoginComponent,
    SignupComponent,
    MyUploadsComponent,
    LoveComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    StickyHeaderModule,
    NavbarModule,
    WavesModule,
    CheckboxModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    NgSelectModule ,
    NgbAlertModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    CardsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
