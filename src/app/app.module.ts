import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { LoaderComponent } from './components/loader/loader.component';
import { DynamicBackgroundComponent } from './components/dynamic-background/dynamic-background.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {AdminComponent} from './components/pages/admin/admin.component';
import { QuickAccessBarComponent } from './components/menus/quick-access-bar/quick-access-bar.component';
import { NavigationComponent } from './components/menus/navigation/navigation.component';
import { TigComponent } from './components/pages/tig/tig.component';
import { ShiftComponent } from './components/pages/shift/shift.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AdminComponent,
  children: [
    {path: 'shifts', component: ShiftComponent},
    {path: 'tig', component: TigComponent}
  ]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    DynamicBackgroundComponent,
    QuickAccessBarComponent,
    NavigationComponent,
    AdminComponent,
    TigComponent,
    ShiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularSvgIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    InlineSVGModule.forRoot({ baseUrl: './assets/' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
