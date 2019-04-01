import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
