import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from 'src/app/interface/tour'; 
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  toursList : Tour[] = [];
  tourForm! : FormGroup; 
 
  constructor(private tourService : TourService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tourService.getAllTours().subscribe((data : Tour[])=>{

      this.toursList = data;
      console.log("Tours list: " + JSON.stringify(this.toursList));
      
    })
  }

  deleteTour(tourName:any){

    this.tourService.deleteTour(tourName).subscribe(data => {
      
      this.toursList = this.toursList.filter(tour => tour.tourName !== tourName);
      console.log("The tour with id " + tourName + " has been deleted.");
       window.location.reload();
      // this.router.navigate([this.router.url]);
      
    })
  }
  
}