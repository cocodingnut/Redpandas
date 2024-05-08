import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../features/chirrup/pipes/reverse.pipe';
import { Truncate1Pipe } from './pipes/truncate1.pipe';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';


@NgModule({
  declarations: [
    ChirrupCardComponent,
    Truncate1Pipe
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],

  exports: [
    ChirrupCardComponent,
    Truncate1Pipe,
  ]


})
export class SharedModule { }
