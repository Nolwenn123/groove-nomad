import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalFormComponent } from './festival-form/festival-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  {path:'form', component: FestivalFormComponent},
  {path:'register', component: RegisterComponent},
  {path:'reservation', component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
