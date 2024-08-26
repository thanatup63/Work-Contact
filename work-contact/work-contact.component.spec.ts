import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkContactComponent } from './work-contact.component';

describe('WorkContactComponent', () => {
  let component: WorkContactComponent;
  let fixture: ComponentFixture<WorkContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
