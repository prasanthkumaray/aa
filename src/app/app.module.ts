import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './app.home.component';
import {HeaderComponent} from './header.component';
import {BoyComponent} from './boy.component';
import {MenComponent} from './men.component';
import {AccessoriesComponent} from './accessories.component';
import {JacketComponent} from './jacket.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boys', component: BoyComponent },
  { path: 'men', component: MenComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'jacket', component: JacketComponent }
];

@NgModule({
  imports:      [ BrowserModule ,
    RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,HomeComponent,HeaderComponent,BoyComponent,MenComponent,
  AccessoriesComponent,JacketComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [HeaderComponent ]
})
export class AppModule { }
