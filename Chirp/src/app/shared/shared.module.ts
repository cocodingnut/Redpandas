import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { Truncate1Pipe } from './pipes/truncate1.pipe';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';


@NgModule({
  declarations: [
    ChirrupCardComponent,
    ReversePipe,
    Truncate1Pipe
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule
  ],

  exports: [
    ChirrupCardComponent,
    Truncate1Pipe,
    ReversePipe
  ]


})
export class SharedModule { }
