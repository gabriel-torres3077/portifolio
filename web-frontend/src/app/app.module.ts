import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { WarningLabelComponent } from './components/molecules/warning-label/warning-label.component';
import { ProjectsComponent } from './components/organisms/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailFormComponent } from './components/molecules/contact/email-form/email-form.component';
import { ContactPageComponent } from './components/organisms/contact-page/contact-page.component';
import { PhoneComponent } from './components/molecules/contact/phone/phone.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WarningLabelComponent,
    ProjectsComponent,
    EmailFormComponent,
    ContactPageComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
