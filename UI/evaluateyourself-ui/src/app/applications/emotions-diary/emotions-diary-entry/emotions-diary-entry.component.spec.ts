import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsDiaryEntryComponent } from './emotions-diary-entry.component';

describe('EmotionsDiaryEntryComponent', () => {
  let component: EmotionsDiaryEntryComponent;
  let fixture: ComponentFixture<EmotionsDiaryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsDiaryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsDiaryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
