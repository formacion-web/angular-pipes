import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartTruncatePipe } from './shared/pipes/smart-truncate.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SmartTruncatePipe,
    FilterPipe,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
