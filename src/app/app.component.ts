import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherSectionComponent } from './weather-section/weather-section.component';
@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddressFormComponent, ReactiveFormsModule, WeatherSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  userLatAndLong: { lat: number, long: number } | null = null;
  onSubmitAddr(event: { lat: number, lng: number }){
    this.userLatAndLong = {
      lat: event.lat,
      long: event.lng
    }
  }
}
