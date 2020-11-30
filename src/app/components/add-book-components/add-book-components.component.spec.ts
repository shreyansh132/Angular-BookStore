import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponentsComponent } from './add-book-components.component';

describe('AddBookComponentsComponent', () => {
  let component: AddBookComponentsComponent;
  let fixture: ComponentFixture<AddBookComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
