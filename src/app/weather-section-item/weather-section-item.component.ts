import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../types/noaaApiResponse';

@Component({
  selector: 'app-weather-section-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-section-item.component.html',
  styleUrl: './weather-section-item.component.css',
})
export class WeatherSectionItemComponent {
  @Input() forecast: ApiResponse | null = null;
}
