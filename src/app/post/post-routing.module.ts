import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailViewComponent } from './components/post-detail-view/post-detail-view.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ContainerComponent } from './pages/container/container.component';

const routes: Routes = [
    // {
    //   path: '**',
    //   component: PostListComponent,
    //   outlet: 'sub'
    // },
    // {
    //   path: 'post',
    //   component: PostDetailViewComponent,
    //   outlet: 'sub'
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
