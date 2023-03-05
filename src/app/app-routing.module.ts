import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ToursComponent } from './components/tours/tours.component';
import { PurchasingATourComponent } from './components/purchasing-a-tour/purchasing-a-tour.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "home",
  component: HomeComponent
  },
  { path: "aboutUs",
  component: AboutUsComponent
  },
  {
    path: "tours",
    component: ToursComponent
  },
  {
    path: "details/:idTour",
    component: DetailsComponent
  },
  {
    path: "purchasingATour",
    component: PurchasingATourComponent
  },
  { path: "admin",
  component: AdminComponent
  },
  { path: "addTour",
  component: AddTourComponent
  },
  { path: "editTour/:idTour",
  component: EditTourComponent
  } 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

