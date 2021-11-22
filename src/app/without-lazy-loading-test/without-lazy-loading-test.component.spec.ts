import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLazyLoadingTestComponent } from './without-lazy-loading-test.component';

describe('WithoutLazyLoadingTestComponent', () => {
  let component: WithoutLazyLoadingTestComponent;
  let fixture: ComponentFixture<WithoutLazyLoadingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutLazyLoadingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutLazyLoadingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
