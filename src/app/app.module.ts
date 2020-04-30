import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './update-questions/update-questions.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { DeleteQuestionsComponent } from './delete-questions/delete-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { QuestionsServiceService } from './questions-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    GetQuestionsComponent,
    DeleteQuestionsComponent,
    ListQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,QuestionsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
