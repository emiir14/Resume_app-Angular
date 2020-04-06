import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalTabsComponent } from './vertical-tabs/vertical-tabs.component';
import { AboutMeComponent } from './vertical-tabs/about-me/about-me.component';
import { SkillsComponent } from './vertical-tabs/skills/skills.component';
import { ContactComponent } from './vertical-tabs/contact/contact.component';
import { ProfilePicComponent } from './vertical-tabs/about-me/profile-pic/profile-pic.component';
import { EmailFormComponent } from './vertical-tabs/contact/email-form/email-form.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
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
})
export class AppModule {}
