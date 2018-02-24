import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './applications/news/news.component';

const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"news"},
    {path:"emotionsdiary", loadChildren:'./applications/emotions-diary/emotions-diary.module#EmotionsDiaryModule'},
    {path:"news", component: NewsComponent},
    {path:"**" , redirectTo: "news" }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
