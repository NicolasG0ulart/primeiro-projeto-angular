import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { MenuComponent } from './app/components/menu.component';
import { Button } from './app/components/button.component';
import { EntryDataComponent } from './app/components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent, Button, EntryDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
