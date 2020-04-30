import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { DeleteQuestionsComponent } from './delete-questions/delete-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { UpdateQuestionsComponent } from './update-questions/update-questions.component';


const routes: Routes = [
  {path:'app-add-questions',component:AddQuestionsComponent},
  {path:'app-update-questions',component:UpdateQuestionsComponent},
  {path:'app-delete-questions',component:DeleteQuestionsComponent},
  {path:'app-list-questions',component:ListQuestionsComponent},
  {path:'app-get-questions',component:GetQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
