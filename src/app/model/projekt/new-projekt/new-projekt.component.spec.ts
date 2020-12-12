import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjektComponent } from './new-projekt.component';

describe('NewProjektComponent', () => {
  let component: NewProjektComponent;
  let fixture: ComponentFixture<NewProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
