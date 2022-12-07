import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private apiUrl = "http://localhost:4200/server/api";

  httpOptions = {
    headers:new HttpHeaders({ 
      'Content-Type':'application/JSON'
    })
  }

  constructor(private httpClient:HttpClient) {
    
   }
}
