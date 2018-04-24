import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { RestfulapiComponent } from './restfulapi/restfulapi.component';
import { ContactComponent } from './contact/contact.component';
import { MessagingServiceComponent } from './messaging-service/messaging-service.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'restfulapi', component: RestfulapiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'messaging-service', component: MessagingServiceComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    KnowledgeComponent,
    RestfulapiComponent,
    ContactComponent,
    MessagingServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GoTopButtonModule]
})
export class AppModule { }
