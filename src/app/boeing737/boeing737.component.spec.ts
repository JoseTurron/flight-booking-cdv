import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boeing737Component } from './boeing737.component';

describe('Boeing737Component', () => {
  let component: Boeing737Component;
  let fixture: ComponentFixture<Boeing737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boeing737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boeing737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
