import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeoutDirectiveComponent } from './timeout-directive/timeout-directive.component';
import { AutoHideDirective } from './timeout-directive/auto-hide.directive';
import { HidecontentPipe } from './timeout-directive/hidecontent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeoutDirectiveComponent,
    AutoHideDirective,
    HidecontentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
