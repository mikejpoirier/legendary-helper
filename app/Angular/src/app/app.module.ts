import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { EditionComponent } from './edition/edition.component';
import { VillainComponent } from './villain/villain.component';

import { EditionService } from './services/edition.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    VillainComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [
    EditionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
