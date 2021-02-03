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

      },
      {
        path: 'post',
        component: PostDetailViewComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
