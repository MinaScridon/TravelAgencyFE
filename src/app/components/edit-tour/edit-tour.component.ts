import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';
import { Tour } from 'src/app/interface/tour';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {

  idTour! : number;
  tour! : Tour;
  tourForm!: FormGroup;
 

  constructor(private tourService : TourService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.idTour = this.route.snapshot.params['idTour'];
      
      this.tourService.getTourDetailsByIdTour(this.idTour).subscribe((data: Tour)=>{
        
        this.tour = data;
  
      });
  
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

  updateForm(){
    console.log("Input value: " + JSON.stringify(this.tourForm.value));
    
    this.tourService.editTour(this.idTour,this.tourForm.value).subscribe(data=>{
      console.log("Product edited successufully.");
      this.router.navigateByUrl("/admin")
    })
  }


}
