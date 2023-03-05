import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ToursComponent } from './components/tours/tours.component';
import { PurchasingATourComponent } from './components/purchasing-a-tour/purchasing-a-tour.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { TourService } from './service/tour.service';
import { HomeComponent } from './components/home/home.component';
// import { DetailsComponent } from 'src/app/components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ToursComponent,
    PurchasingATourComponent,
    AdminComponent,
    NavBarComponent,
    AddTourComponent,
    EditTourComponent,
    HomeComponent,
    // DetailsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
