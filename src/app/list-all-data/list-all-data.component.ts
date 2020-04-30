import { Component, OnInit } from '@angular/core';
import { Questions, QuestionsServiceService } from '../questions-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-data',
  templateUrl: './list-all-data.component.html',
  styleUrls: ['./list-all-data.component.css']
})
export class ListAllDataComponent implements OnInit {

  questions:Questions;

  constructor(private quesService:QuestionsServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }
//  onDelete(deletedQuestion: Questions){
  //  this.quesService.onDelete(deletedQuestion); //deleting the question
 // }
  onUpdate(updatedQuestion: Questions){
    this.router.navigate(['/app-update-questions']); //updating the question
  }
  
  getQuestions() {
     //adding questions or getting data of employees
  
     this.quesService.fetchAllQuestions().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
   }
  
  handleSuccessfulResponse(response)
  {
     this.questions=response;
  }




  }

