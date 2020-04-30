import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {

  constructor(private http:HttpClient){}
  test:Test 
  questions:Questions
  

  public fetchAllQuestions() {
    console.log("test call");
    return this.http.get<Questions>("http://localhost:8899/Questions/fetchAllQuestions");
  }
  findQuestionWithId(question_Id: number) {
    return this.http.get("http://localhost:1122/Questions/findQuestionWithId/"+question_Id,{responseType: 'json'});
  }
  public insertData (user: Test) {
    console.log(user);
    return this.http.post<Test>("http://localhost:1110/Questions/addQuestion", user);
 }
 
 //public deleteEmpById(admin:Test,user: Questions) {
   // return this.http.delete<Questions>("http://localhost:1112/Employee/deleteQuestion/"+user.t/{question_Id}"+ user.eid);
  //}


 // public  updateEmp(user: Employee) {
   // console.log(user);
  //  return this.http.put<Employee>("http://localhost:1111/Employee/updateEmployee", user);
 // }


}
export class Questions
{
  question_Id:number;
  question_Title:string;
  question_Options:string;
  question_Answer:number;
  question_Marks:number;

  constructor(question_Id:number,question_Title:string,question_Options:string,question_Answer:number,question_Marks:number)
  {
    this.question_Id=question_Id;
    this.question_Title=question_Title;
    this.question_Options=question_Options;
    this.question_Answer=question_Answer;
    this.question_Marks=question_Marks;
  }
}
export class Test{
  test_Id:number;
  test_Name:string;
  test_Total_Marks:number;
  questions:Set<Questions>;

  constructor( test_Id:number,test_Name:string,test_Total_Marks:number,questions:Set<Questions>){
    this.test_Id=test_Id;
    this.test_Total_Marks=test_Total_Marks;
    this.test_Name=test_Name;
    this.questions=questions;
  }

}
