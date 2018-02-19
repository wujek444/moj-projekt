import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [ //tutaj deklarujemy nowe komponenty
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [ //tutaj dodajemy nowe moduły do aplikacji
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] //tutaj ładujemy coś podczas startu aplikacji
})
export class AppModule { }
