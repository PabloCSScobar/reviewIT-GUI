import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from '../user-panel/components/header-container/header-container.component';
import { AvatarComponent } from '../user-panel/components/avatar/avatar.component';
import { UserMenuComponent } from '../user-panel/components/user-menu/user-menu.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../user-panel/components/user-details/user-details.component';
import { UserPanelRoutingModule } from './user-panel-routing.module';

@NgModule({
  declarations: [
    HeaderContainerComponent,
    AvatarComponent,
    UserMenuComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, UserPanelRoutingModule],
  exports: [HeaderContainerComponent, UserDetailsComponent],
})
export class UserPanelModule {}
