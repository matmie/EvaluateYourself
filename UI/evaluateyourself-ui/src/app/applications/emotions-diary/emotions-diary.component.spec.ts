import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsDiaryComponent } from './emotions-diary.component';

describe('EmotionsDiaryComponent', () => {
  let component: EmotionsDiaryComponent;
  let fixture: ComponentFixture<EmotionsDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
