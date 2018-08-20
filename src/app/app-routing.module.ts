import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DetailComponent} from "./detail/detail.component";
import {LoginComponent} from "./login/login.component";
import {CreateComponent} from "./create/create.component";
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent  },
  {path: 'login', component: LoginComponent  },
  {path: 'create', component: CreateComponent  },
  {path: 'admin', component: AdminComponent  },
  {path: 'detail', component: DetailComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
