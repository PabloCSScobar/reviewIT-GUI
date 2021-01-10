import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { ContainerComponent } from './pages/container/container.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { RightbarComponent } from './pages/rightbar/rightbar.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserRankComponent } from './components/user-rank/user-rank.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListHeaderComponent } from './components/post-list-header/post-list-header.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { PostDetailViewComponent } from './components/post-detail-view/post-detail-view.component';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { AnswerComponent } from './components/answer/answer.component';
import { PostUserComponent } from './components/post-user/post-user.component';


@NgModule({
  declarations: [HeaderComponent, ContainerComponent, FooterComponent, MainComponent, RightbarComponent, FilterListComponent, SearchComponent, CategoriesComponent, UserRankComponent, PostListComponent, PostListHeaderComponent, PostComponent, PostDetailViewComponent, AnswerListComponent, AnswerComponent, PostUserComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class PostModule { }
