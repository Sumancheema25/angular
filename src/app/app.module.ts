import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTableComponent } from './create-table/create-table.component';
import {ArrayService} from './array.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateTableComponent
  ],
  imports: [
    BrowserModule, ArrayService
  ],
  providers: [],
  bootstrap: [AppComponent,CreateTableComponent]
})
export class AppModule { }
