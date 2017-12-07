import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {AdminComponent} from "./components/pages/admin/admin.component";
import {ShiftComponent} from "./components/pages/shift/shift.component";
import {TigComponent} from "./components/pages/tig/tig.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: 'shifts', component: ShiftComponent, canActivate: [AuthGuard]},
      {path: 'tig', component: TigComponent, canActivate: [AuthGuard]}
    ]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];
