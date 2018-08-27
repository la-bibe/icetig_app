import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {routes} from './app-routing.module';

import {AngularSvgIconModule} from 'angular-svg-icon';
import {FormsModule} from '@angular/forms';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './components/pages/admin/admin.component';
import {AppComponent} from './app.component';
import {DynamicBackgroundComponent} from './components/dynamic-background/dynamic-background.component';
import {LoaderComponent} from './components/loader/loader.component';
import {LoginComponent} from './components/pages/login/login.component';
import {NavigationComponent} from './components/menus/navigation/navigation.component';
import {QuickAccessBarComponent} from './components/menus/quick-access-bar/quick-access-bar.component';
import {ShiftComponent} from './components/pages/shift/shift.component';
import {TigComponent} from './components/pages/tig/tig.component';

import {ApiService} from './services/api.service';
import {AuthService} from './services/auth.service';
import {PermissionsService} from './services/permissions.service';
import {SessionService} from './services/session.service';

import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';
import {SessionGuard} from './guards/session.guard';
import { TrombinoscopeComponent } from './components/trombinoscope/trombinoscope.component';
import { EasyshitComponent } from './components/trombinoscope/easyshit/easyshit.component';

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
        ShiftComponent,
        TrombinoscopeComponent,
        EasyshitComponent
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
        PermissionsService,
	    SessionService,
        AuthGuard,
        LoginGuard,
        SessionGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
