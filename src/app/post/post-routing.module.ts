import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostDetailViewComponent } from './components/post-detail-view/post-detail-view.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ContainerComponent } from './pages/container/container.component';
import { CategoriesResolver } from './services/categories-resolver';
import { PostsResolver } from './services/posts-resolver';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
