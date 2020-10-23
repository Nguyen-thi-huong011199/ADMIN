import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';


const routes: Routes = [
  {path:'',component:TrangchuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
