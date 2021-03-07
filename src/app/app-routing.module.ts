import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailViewComponent } from './post/components/post-detail-view/post-detail-view.component';
import { PostListComponent } from './post/components/post-list/post-list.component';
import { ContainerComponent } from './post/pages/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component: PostListComponent,
        pathMatch: 'full',
      },
      {
        path: 'post',
        component: PostDetailViewComponent,
        pathMatch: 'full',
      },
      {
        path: 'post/:id',
        component: PostDetailViewComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/list',
        pathMatch: 'full',
      },
    ]
  },
  // {
  //   path: 'post',
  //   redirectTo: '/post',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'list',
  //   redirectTo: '/list',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: '/post',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
