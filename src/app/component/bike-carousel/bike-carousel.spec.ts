import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCarousel } from './bike-carousel';

describe('BikeCarousel', () => {
  let component: BikeCarousel;
  let fixture: ComponentFixture<BikeCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
