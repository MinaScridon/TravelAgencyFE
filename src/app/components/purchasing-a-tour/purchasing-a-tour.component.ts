import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';
import { Tour } from 'src/app/interface/tour';

@Component({
  selector: 'app-purchasing-a-tour',
  templateUrl: './purchasing-a-tour.component.html',
  styleUrls: ['./purchasing-a-tour.component.scss']
})
export class PurchasingATourComponent implements OnInit {

  toursList : Tour[] = [];
 
  constructor(private tourService : TourService, private router: Router) { }

  ngOnInit(): void {
    this.tourService.getAllTours().subscribe((data : Tour[])=>{

      this.toursList = data;
      console.log("Tours list: " + JSON.stringify(this.toursList));
      
    })
  }

}
