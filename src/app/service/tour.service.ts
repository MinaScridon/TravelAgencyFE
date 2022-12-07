import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Tour} from 'src/app/interface/tour';



@Injectable({
  providedIn: 'root'
})
export class TourService {
   
  private apiUrl = "http://localhost:4200/server/api";

  httpOptions = {
    headers:new HttpHeaders({ 
      'Content-Type':'application/JSON'
    })
  }

  constructor(private httpClient:HttpClient) {  }

  getAllTours():Observable<Tour[]>{ 
    return this.httpClient.get<Tour[]>(this.apiUrl+'/tours');
  }

  getTourDetailsByIdTour(idTour:number):Observable<Tour>{
    return this.httpClient.get<Tour>(this.apiUrl + "/tours/" + idTour);
  }
  getTourDetailsByTourName(tourName:string):Observable<Tour>{
    return this.httpClient.get<Tour>(this.apiUrl + "/tours/" + tourName);
  }
  addTour(tour1:any):Observable<Tour>{
    return this.httpClient.post<Tour>(this.apiUrl + "/createTour", JSON.stringify(tour1), this.httpOptions);
  }

  deleteTour(tourName:string){
    return this.httpClient.delete<Tour>(this.apiUrl + "/deleteTour/" + tourName, this.httpOptions);
  }

  editTour(idTour:number,tour:any):Observable<Tour>{
    return this.httpClient.put<Tour>(this.apiUrl + "/editTour/" + idTour,JSON.stringify(tour), this.httpOptions);
  }
  
}

