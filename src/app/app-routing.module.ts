import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IdeaComponent} from "./idea/idea.component";
import {LoginComponent} from "./login/login.component";
import {CreateComponent} from "./create/create.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent  },
  {path: 'login', component: LoginComponent  },
  {path: 'create', component: CreateComponent  },
  {path: 'product', component: IdeaComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
