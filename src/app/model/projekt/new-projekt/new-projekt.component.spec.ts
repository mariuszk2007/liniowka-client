import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewProjektComponent } from './new-projekt.component';

describe('NewProjektComponent', () => {
  let component: NewProjektComponent;
  let fixture: ComponentFixture<NewProjektComponent>;

  beforeEach(waitForAsync(() => {
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
