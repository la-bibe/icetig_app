import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {LoaderComponent} from './components/loader/loader.component';
import {DynamicBackgroundComponent} from './components/dynamic-background/dynamic-background.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {AdminComponent} from './components/pages/admin/admin.component';
import {QuickAccessBarComponent} from './components/menus/quick-access-bar/quick-access-bar.component';
import {NavigationComponent} from './components/menus/navigation/navigation.component';
import {TigComponent} from './components/pages/tig/tig.component';
import {ShiftComponent} from './components/pages/shift/shift.component';
import {ApiService} from './services/api.service';
import {routes} from './app-routing.module';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {LoginGuard} from './guards/login.guard';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SessionGuard} from './guards/session.guard';

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
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    InlineSVGModule.forRoot({baseUrl: './assets/'}),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    LoginGuard,
    SessionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
