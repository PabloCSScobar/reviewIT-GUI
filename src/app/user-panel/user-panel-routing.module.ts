import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { userResolver } from './services/user.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full',
    resolve: {
      user: userResolver,
    },
  },
  {
    path: 'details',
    component: UserDetailsComponent,
    pathMatch: 'prefix',
    resolve: {
      user: userResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'profile/details',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPanelRoutingModule {}
