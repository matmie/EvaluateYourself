import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmotionsDiaryRoutingModule } from './emotions-diary-routing.module';


import { EmotionsDiaryComponent } from './emotions-diary.component';
import { EmotionsDiaryEntryComponent } from './emotions-diary-entry/emotions-diary-entry.component';

@NgModule({
  imports: [
    CommonModule,
    EmotionsDiaryRoutingModule
  ],
  declarations: [
      EmotionsDiaryComponent,
      EmotionsDiaryEntryComponent
  ]
})
export class EmotionsDiaryModule { }
