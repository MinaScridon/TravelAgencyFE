import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss']
})
export class AddTourComponent implements OnInit {

  tourForm!: FormGroup;

  constructor(private tourService:TourService, private router: Router) { }

  ngOnInit(): void {
    this.tourForm = new FormGroup({

      tourName: new FormControl('', [Validators.required]),
   
      departureDate: new FormControl('', [Validators.required]),

      returnDate: new FormControl('', [Validators.required]),

      priceForAnAdult: new FormControl('', [Validators.required]),

      priceForAChild: new FormControl('', [Validators.required]),

      promoted: new FormControl('', [Validators.required]),

      numberOfDays: new FormControl('', [Validators.required]),

      numberOfAdultSeats: new FormControl('', [Validators.required]),

      numberOfChildSeats: new FormControl('', [Validators.required]),

      availability: new FormControl('', [Validators.required]),

      // airportsList: new FormControl('', [Validators.required]),

      // citiesList: new FormControl('', [Validators.required]),

      // hotelsList: new FormControl('', [Validators.required]),

      
    });
  }
  submitForm(){
    console.log("Input value: " + JSON.stringify(this.tourForm.value));
    
    this.tourService.addTour(this.tourForm.value).subscribe(data=>{
      console.log("Tour created successufully.");
      this.router.navigateByUrl("/admin")
    })
  }
  

}
