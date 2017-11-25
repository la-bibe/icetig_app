import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {AngularSvgIconModule} from "angular-svg-icon";
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularSvgIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
