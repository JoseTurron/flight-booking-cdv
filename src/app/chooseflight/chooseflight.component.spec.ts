import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseflightComponent } from './chooseflight.component';

describe('ChooseflightComponent', () => {
  let component: ChooseflightComponent;
  let fixture: ComponentFixture<ChooseflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
