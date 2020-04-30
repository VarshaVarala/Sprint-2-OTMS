import { Component, OnInit } from '@angular/core';
import { QuestionsServiceService, Questions } from '../questions-service.service';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
  question:Questions;

  question_Id:number;



  constructor(private quesService:QuestionsServiceService) { }

  ngOnInit(): void {
  }

  fetchQuestion() {
    //adding questions or getting data of employees
 
    this.quesService.findQuestionWithId(this.question_Id).subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }
 
 handleSuccessfulResponse(response)
 {
    this.question=response;
 }


  }

