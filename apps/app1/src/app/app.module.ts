import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BuildableLibModule } from '@my-org/buildable-lib';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, BuildableLibModule],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
