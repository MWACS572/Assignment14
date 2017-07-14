/**
 * Created by Owner on 7/13/2017.
 */
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students.component";
import {HomeComponent} from "./home.component";

const MY_ROUTES: Routes = [
  {path:'', component :HomeComponent},
  {path:'students', component: StudentsComponent}
  // {path:'students/detail', component: StudentsComponent}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
