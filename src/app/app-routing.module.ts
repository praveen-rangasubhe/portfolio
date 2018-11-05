import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalComponent} from './global/global.component';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {CircularComponent} from './circular/circular.component';
import {ActRuleComponent} from './act-rule/act-rule.component';
import {PhotogalleryComponent} from './photogallery/photogallery.component';
import {ContactComponent} from './contact/contact.component';
import {AbnapComponent} from './abnap/abnap.component';


const routes: Routes = [
  { path: 'global', component: GlobalComponent },
  {path : '', component : HomeComponent },
  {path : 'aboutus', component : AboutusComponent },
  {path : 'cicular', component : CircularComponent },
  {path : 'actrule', component : ActRuleComponent },
  {path : 'photogallery', component : PhotogalleryComponent },
  {path : 'contact', component : ContactComponent },
  {path : 'abnap', component : AbnapComponent },
  ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule {}
