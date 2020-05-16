import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import * as BABYLON from 'babylonjs';
import * as webgl from 'webgl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
