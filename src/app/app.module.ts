import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, //registers critical app Service Providers & imports+exports CommonModule (which declares and exports ngIf & ngFor)
    HttpModule, //registers Angular Http Client Service Provider
    RouterModule.forRoot([ //here we configure our default route & any wild card routes
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule // Feature Module
  ],
  bootstrap: [AppComponent] //StartUp Component(s) -this array identifies the root component as the bootstrap component
})
export class AppModule { }
