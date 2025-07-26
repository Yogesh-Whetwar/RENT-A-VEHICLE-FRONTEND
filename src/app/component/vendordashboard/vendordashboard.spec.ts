import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendordashboard } from './vendordashboard';

describe('Vendordashboard', () => {
  let component: Vendordashboard;
  let fixture: ComponentFixture<Vendordashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendordashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendordashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
