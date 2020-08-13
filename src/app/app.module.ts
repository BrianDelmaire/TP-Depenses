import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MessagesComponent } from './messages.component';
import {MessagesService} from './messages.service';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {InMemoryDataService} from './in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import { EditDepenseComponent } from './edit-depense/edit-depense.component';
import { FormDepenseComponent } from './form-depense/form-depense.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { CreateDepenseComponent } from './create-depense/create-depense.component';
import { DialogDepenseComponent } from './dialog-depense/dialog-depense.component';


// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    ListePersonnesComponent,
    DetailsPersonneComponent,
    PageNotFoundComponent,
    EditDepenseComponent,
    FormDepenseComponent,
    CreateDepenseComponent,
    DialogDepenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
  ],
  providers: [MessagesService,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
