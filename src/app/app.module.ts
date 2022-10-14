import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageOneComponent } from './components/page-one/page-one.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageFourComponent } from './components/page-four/page-four.component';
import { PageFiveComponent } from './components/page-five/page-five.component';
import { PageSixComponent } from './components/page-six/page-six.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageSevenComponent } from './components/page-seven/page-seven.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    NavbarComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    FooterComponent,
    PageSevenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
