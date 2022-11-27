import { ColorService } from './services/color.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { SavedComponent } from './saved/saved.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [AppComponent, SavedComponent, GeneratorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ColorService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
