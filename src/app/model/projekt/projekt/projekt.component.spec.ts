import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjektComponent } from './projekt.component';

describe('ProjektComponent', () => {
  let component: ProjektComponent;
  let fixture: ComponentFixture<ProjektComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
