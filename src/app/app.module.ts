import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { AppRoutingModule } from './/app-routing.module';
import { GlobalComponent } from './global/global.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './global/aboutus/aboutus.component';
import { ContactusComponent } from './global/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,

    ReactiveFormsModule
  ],
  exports: [],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
