import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeoutDirectiveComponent } from './hide-directive/hide-directive.component';
import { AutoHideDirective } from './hide-directive/auto-hide.directive';
import { HidecontentPipe } from './hide-directive/hidecontent.pipe';

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
