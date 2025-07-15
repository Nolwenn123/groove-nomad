import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalFormComponent } from './festival-form/festival-form.component';

const routes: Routes = [
  {path:'form', component: FestivalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
