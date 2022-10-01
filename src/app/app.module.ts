import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './componets/presentation/presentation.component';
import { NavarComponent } from './componets/navar/navar.component';
import { FrontPageComponent } from './componets/front-page/front-page.component';
import { AnimationsRelaxDirective } from './directives/animations-relax.directive';
import { AnimationsNavarDirective } from './directives/animations-navar.directive';
import { HabilityComponent } from './componets/hability/hability.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    NavarComponent,
    FrontPageComponent,
    AnimationsRelaxDirective,
    AnimationsNavarDirective,
    HabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
