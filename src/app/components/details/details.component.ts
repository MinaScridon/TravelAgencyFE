import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';
import { Tour } from 'src/app/interface/tour';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  idTour!:number
  tour!:Tour;
 

  constructor(private tourService:TourService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idTour=this.route.snapshot.params["idTour"];

    this.tourService.getTourDetailsByIdTour(this.idTour ).subscribe((data:Tour)=>{
      this.tour=data;
      console.log("Tours list: " + JSON.stringify(this.tour));
    })
  }

}
