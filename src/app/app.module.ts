import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DataDbService } from './data-db.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalTabsComponent } from './vertical-tabs/vertical-tabs.component';
import { AboutMeComponent } from './vertical-tabs/about-me/about-me.component';
import { SkillsComponent } from './vertical-tabs/skills/skills.component';
import { ContactComponent } from './vertical-tabs/contact/contact.component';
import { ProfilePicComponent } from './vertical-tabs/about-me/profile-pic/profile-pic.component';
import { EmailFormComponent } from './vertical-tabs/contact/email-form/email-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    VerticalTabsComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    ProfilePicComponent,
    EmailFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ThemeService, DataDbService],
})
export class AppModule {}
