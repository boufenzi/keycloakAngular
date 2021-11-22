import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterdictionComponent } from './interdiction.component';

describe('InterdictionComponent', () => {
  let component: InterdictionComponent;
  let fixture: ComponentFixture<InterdictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterdictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterdictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
