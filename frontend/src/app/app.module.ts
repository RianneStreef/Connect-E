import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';
import { MessageComponent } from './message/message.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { IconButtonComponent } from './icon-button/icon-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    ArticleComponent,
    MessageComponent,
    AsideComponent,
    MainComponent,
    NewsfeedComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
