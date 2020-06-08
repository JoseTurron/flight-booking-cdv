import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombardierComponent } from './bombardier.component';

describe('BombardierComponent', () => {
  let component: BombardierComponent;
  let fixture: ComponentFixture<BombardierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombardierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombardierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
