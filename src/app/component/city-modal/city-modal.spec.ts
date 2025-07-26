import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityModal } from './city-modal';

describe('CityModal', () => {
  let component: CityModal;
  let fixture: ComponentFixture<CityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
