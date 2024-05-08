import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminUserInfoComponent } from './components/admin-user-info/admin-user-info.component';



@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminUserInfoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class AdminModule { }
