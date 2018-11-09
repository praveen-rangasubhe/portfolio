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
import {SliderComponent} from './global/global.component';
import {RightComponent} from './global/global.component';
import { CircularComponent } from './circular/circular.component';
import { ActRuleComponent } from './act-rule/act-rule.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AbnapComponent } from './abnap/abnap.component';
import {ApComponent} from './abnap/abnap.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    SliderComponent,
    CircularComponent,
    ActRuleComponent,
    MemberlistComponent,
    PhotogalleryComponent,
    HomeComponent,
    RightComponent,
    AboutusComponent,
    ContactComponent,
    AbnapComponent,
    ApComponent
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
