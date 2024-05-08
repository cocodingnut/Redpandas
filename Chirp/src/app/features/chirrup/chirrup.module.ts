import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChirrupComponent } from './components/new-chirrup/new-chirrup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    ReactiveFormsModule,

  ],
  exports: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent,
  ],

})
export class ChirrupModule { }