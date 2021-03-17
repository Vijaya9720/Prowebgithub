import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { PntComponent } from './pnt/pnt.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"pnt",component:PntComponent},
  {path:"india",component:IndiaComponent},
  {path:"usa",component:UsaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
