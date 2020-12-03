import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestTableComponent } from './material-request-table.component';

describe('MaterialRequestTableComponent', () => {
  let component: MaterialRequestTableComponent;
  let fixture: ComponentFixture<MaterialRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
