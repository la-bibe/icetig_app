import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {AdminComponent} from "./components/pages/admin/admin.component";
import {ShiftComponent} from "./components/pages/shift/shift.component";
import {TigComponent} from "./components/pages/tig/tig.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";
import {SessionGuard} from "./guards/session.guard";
import {TrombinoscopeComponent} from "./components/trombinoscope/trombinoscope.component";

@NgModule({
	exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routes: Routes = [
	{path: 'login', component: LoginComponent, canActivate: [SessionGuard, LoginGuard]},
	{
		path: '', component: AdminComponent, canActivate: [SessionGuard, AuthGuard],
		children: [
			{path: 'shifts', component: ShiftComponent, canActivate: [SessionGuard, AuthGuard]},
			{path: 'tig', component: TigComponent, canActivate: [SessionGuard, AuthGuard]},
			{path: 'trombinoscope', component: TrombinoscopeComponent, canActivate: [SessionGuard, AuthGuard]},
		]
	},
	{path: 'admin', component: AdminComponent, canActivate: [SessionGuard, AuthGuard]}
];
