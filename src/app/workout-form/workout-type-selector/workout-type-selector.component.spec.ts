import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTypeSelectorComponent } from './workout-type-selector.component';

describe('WorkoutTypeSelectorComponent', () => {
  let component: WorkoutTypeSelectorComponent;
  let fixture: ComponentFixture<WorkoutTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
