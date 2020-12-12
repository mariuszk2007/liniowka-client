import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperatComponent } from './new-operat.component';

describe('NewOperatComponent', () => {
  let component: NewOperatComponent;
  let fixture: ComponentFixture<NewOperatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOperatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOperatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
