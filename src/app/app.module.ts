import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';
import { HeaderComponent } from './layout/header/header.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { FormRegisterComponent } from './pages/search-product/form-register/form-register.component';
import { DashboardComponent } from './pages/product/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserProfileComponent } from './pages/profile/user-profile/user-profile.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HeaderComponent,
    CreateProductComponent,
    SearchProductComponent,
    FormRegisterComponent,
    DashboardComponent,
    ProfileComponent,
    UserProfileComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
