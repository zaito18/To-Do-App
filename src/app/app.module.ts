import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemService } from './item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     HttpClientModule,FormsModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatIconModule

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
