import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AdminModule } from "./admin/admin.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterService} from "./services/router.service";
import {LoadPageModule} from "./load-page/load-page.module";

export function initSettings(settings: RouterService) {
  return () => settings.loadRouts();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    LoadPageModule,
  ],
  providers: [
    RouterService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initSettings,
      'deps': [RouterService],
      'multi': true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
