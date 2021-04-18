import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthContainerComponent } from './auth/pages/auth-container/auth-container.component';
import { NewPostComponent } from './post/components/new-post/new-post.component';
import { PostDetailViewComponent } from './post/components/post-detail-view/post-detail-view.component';
import { PostListComponent } from './post/components/post-list/post-list.component';
import { ContainerComponent } from './post/pages/container/container.component';
import { CategoriesResolver } from './post/services/categories-resolver';
import { PostsResolver } from './post/services/posts-resolver';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthContainerComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: ContainerComponent,
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
