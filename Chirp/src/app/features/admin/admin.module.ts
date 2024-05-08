import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserInfoComponent } from './components/admin-user-info/admin-user-info.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';



@NgModule({
  declarations: [
    AdminUserInfoComponent,
    AdminPanelComponent,
  ],
  
  imports: [
    CommonModule
  ],

  exports: [
  ],

  providers: [
  ]
})
export class AdminModule { }
