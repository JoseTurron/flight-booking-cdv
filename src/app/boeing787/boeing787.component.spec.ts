import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boeing787Component } from './boeing787.component';

describe('Boeing787Component', () => {
  let component: Boeing787Component;
  let fixture: ComponentFixture<Boeing787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boeing787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boeing787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
