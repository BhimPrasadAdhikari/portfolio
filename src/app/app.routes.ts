import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent,pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent} //put always at last cuz the order matters in route

];

