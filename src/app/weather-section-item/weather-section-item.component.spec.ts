import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSectionItemComponent } from './weather-section-item.component';

describe('WeatherSectionItemComponent', () => {
  let component: WeatherSectionItemComponent;
  let fixture: ComponentFixture<WeatherSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSectionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
