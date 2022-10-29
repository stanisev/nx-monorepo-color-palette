import { ColorService } from './services/color.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from "@angular/cdk/clipboard";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule, ClipboardModule, FormsModule],
  providers: [ColorService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
