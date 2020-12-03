import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleFileDialogComponent } from './handle-file-dialog.component';

describe('HandleFileDialogComponent', () => {
  let component: HandleFileDialogComponent;
  let fixture: ComponentFixture<HandleFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleFileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
