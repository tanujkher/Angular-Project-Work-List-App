import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { FavouriteHoverDirective } from './favourite-hover.directive';
import { HoveredCardDirective } from './hovered-card.directive';
import { MediaItemAddFormComponent } from './components/media-item-add-form/media-item-add-form.component';
// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavouriteHoverDirective,
    HoveredCardDirective,
    MediaItemAddFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
