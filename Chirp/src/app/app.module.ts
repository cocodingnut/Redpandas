import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideElementDirective } from './hide-element.directive';
import { ShowFirstCharactersPipe } from './show-first-characters.pipe';
import { CardComponent } from './card/card.component';
import { LikeListComponent } from './like-list/like-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HideElementDirective,
    ShowFirstCharactersPipe,
    CardComponent,
    LikeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
