import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  states: { [key: string]: string } = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  };
  statesKeys: string[] = Object.keys(this.states);
  @Output() onSubmitAddr = new EventEmitter
  addr = new FormGroup({
    addr_one: new FormControl(''),
    addr_two:  new FormControl(''),
    addr_city: new FormControl(''),
    addr_state: new FormControl('')
  })
  constructor(private http: HttpClient){
  }
  fetchAddr(){
    let base_url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const cleanedAddrString = this.cleanAddr();
    this.http.get<any>(base_url + '?address=' + cleanedAddrString + '&key=' + environment!.googleApiKey).subscribe({
      next: (data) => {
        this.onSubmitAddr.emit(data.results[0].geometry.location);
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    });
  }
  submitAddr(){
    this.fetchAddr();
  }
  cleanAddr(): string {
    let cleanedAddrString: string = '';
    let addr_one = this.addr.getRawValue().addr_one;
    let addr_two = this.addr.getRawValue().addr_two;
    let addr_city = this.addr.getRawValue().addr_city;
    let addr_state = this.addr.getRawValue().addr_state;
    if(addr_one !== null) {
      addr_one = addr_one.split(' ').join('%20');
      cleanedAddrString += addr_one;
    }
    if(addr_two !== null) {
      addr_two = addr_two.split(' ').join('%20');
      cleanedAddrString += '%20' + addr_two;
    }
    if(addr_city !== null) {
      addr_city = addr_city.split(' ').join('%20');
      cleanedAddrString += '%20' + addr_city;
    }
    cleanedAddrString += '%20' + addr_state;
    return cleanedAddrString;
  }
}
