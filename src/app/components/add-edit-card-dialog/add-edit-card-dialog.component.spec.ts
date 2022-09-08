import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCardDialogComponent } from './add-edit-card-dialog.component';

describe('AddEditCardDialogComponent', () => {
  let component: AddEditCardDialogComponent;
  let fixture: ComponentFixture<AddEditCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
