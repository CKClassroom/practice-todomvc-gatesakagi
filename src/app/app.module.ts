import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FilterPipe, FooterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
