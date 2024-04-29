import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideTimerDirective } from './hide-timer.directive';
import { First20Pipe } from './first20.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HideTimerDirective,
    First20Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
