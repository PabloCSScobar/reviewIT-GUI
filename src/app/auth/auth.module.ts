import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthContainerComponent } from './pages/auth-container/auth-container.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthContainerComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [AuthContainerComponent],
  providers: [],
})
export class AuthModule {}
