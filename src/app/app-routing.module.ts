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
    children: [
      {
        path: 'list',
        component: PostListComponent,
        pathMatch: 'full',
        resolve: {
          posts: PostsResolver,
        },
      },
      {
        path: 'post',
        redirectTo: '/list',
        pathMatch: 'full',
        resolve: {
          posts: PostsResolver,
        },
      },
      {
        path: 'post/:id',
        component: PostDetailViewComponent,
        pathMatch: 'full',
      },
      {
        path: 'new-post',
        component: NewPostComponent,
        pathMatch: 'full',
        resolve: {
          categories: CategoriesResolver,
        },
      },
      {
        path: '**',
        redirectTo: '/list',
        pathMatch: 'full',
        resolve: {
          posts: PostsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
