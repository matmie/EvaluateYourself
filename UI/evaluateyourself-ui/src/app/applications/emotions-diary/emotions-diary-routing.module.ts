import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmotionsDiaryComponent } from './emotions-diary.component';

const routes: Routes = [
    {path:'', pathMatch: 'full', component: EmotionsDiaryComponent},
    {path : '**' , redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmotionsDiaryRoutingModule { }
