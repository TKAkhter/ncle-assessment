import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscribe } from './subscribe.page';

describe('HomePage', () => {
  let component: Subscribe;
  let fixture: ComponentFixture<Subscribe>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Subscribe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
