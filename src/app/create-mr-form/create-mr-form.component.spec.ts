import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMrFormComponent } from './create-mr-form.component';

describe('CreateMrFormComponent', () => {
  let component: CreateMrFormComponent;
  let fixture: ComponentFixture<CreateMrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
