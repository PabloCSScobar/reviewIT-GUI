import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-panel/components/user-details/user-details.component';
import { userResolver } from '../user-panel/services/user.resolver';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostDetailViewComponent } from './components/post-detail-view/post-detail-view.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ContainerComponent } from './pages/container/container.component';
import { CategoriesResolver } from './services/categories-resolver';
import { PostsResolver } from './services/posts-resolver';

const routes: Routes = [
  {
    path: 'profile',
    component: UserDetailsComponent,
    loadChildren: () =>
      import('../user-panel/user-panel.module').then((m) => m.UserPanelModule),
  },
  {
    path: 'list',
    component: PostListComponent,
    pathMatch: 'full',
    resolve: {
      posts: PostsResolver,
      user: userResolver,
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
