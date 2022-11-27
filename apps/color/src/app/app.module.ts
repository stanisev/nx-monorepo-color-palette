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
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    SavedComponent,
    GeneratorComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDaDpLVMw3AEuW2rzPaH_RGtVpgszh34yM',
      authDomain: 'color-palette-4da4e.firebaseapp.com',
      projectId: 'color-palette-4da4e',
      storageBucket: 'color-palette-4da4e.appspot.com',
      messagingSenderId: '1000849227069',
      appId: '1:1000849227069:web:37365d772ca08d29999954',
      measurementId: 'G-F78RD16S7Q',
      databaseURL: 'https://color-palette-4da4e-default-rtdb.europe-west1.firebasedatabase.app'
    }),
  ],
  providers: [ColorService, HttpClient, FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
