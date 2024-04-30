import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoHideDirective } from './Apr-22/auto-hide.directive';
import { AutoSubPipe } from './Apr-22/auto-sub.pipe';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './Apr-22/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AutoHideDirective,
    AutoSubPipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
