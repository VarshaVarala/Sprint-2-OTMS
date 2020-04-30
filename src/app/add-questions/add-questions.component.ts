import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsServiceService, Test, Questions } from '../questions-service.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  questions:Questions=new Questions(0,"","",0,0);
  user:Test=new Test(0,"",0, new Set([this.questions]));
   // .add(0).add("").add("").add(0).add(0));

  
  constructor(private quesService:QuestionsServiceService,private router: Router) { }

  ngOnInit(): void {
  }
    insertData():void{
      
      this.quesService.insertData(this.user)
          .subscribe(data => {});
             this.router.navigate(['/app-list-questions']);
  }
}
