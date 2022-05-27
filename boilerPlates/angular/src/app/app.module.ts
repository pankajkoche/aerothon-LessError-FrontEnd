import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment.prod';
import { HttpModule } from '../shared';
import { NgbdCarouselBasicModule } from './components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule.forRoot({ environment }),
    NgbdCarouselBasicModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
