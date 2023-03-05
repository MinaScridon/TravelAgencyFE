import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AirportService } from 'src/app/service/airport.service';
// import { HotelService } from 'src/app/service/hotel.service';
// import { CityService } from 'src/app/service/city.service';
// import { Airport } from 'src/app/interface/airport';
import { Tour } from 'src/app/interface/tour';
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  toursList : Tour[] = [];
 
  constructor(private tourService : TourService, private router: Router) { }

  ngOnInit(): void {
    this.tourService.getAllTours().subscribe((data : Tour[])=>{

      this.toursList = data;
      console.log("Tour list: " + JSON.stringify(this.toursList));
      
    })
  }
}
