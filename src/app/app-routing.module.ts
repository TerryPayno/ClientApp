import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'detailed', component: DetailedViewComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
