import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { Home1Component } from './components/home1/home1.component';

import { RetailcourseComponent } from './components/courses/retailcourse/retailcourse.component';
import { CooperationalcourseComponent } from './components/courses/cooperationalcourse/cooperationalcourse.component';
import { InstitutionalcourseComponent } from './components/courses/institutionalcourse/institutionalcourse.component';
import { CorsedetailsComponent } from './components/courses/corsedetails/corsedetails.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



import { BrochureRequestComponent } from './brochure-request/brochure-request.component';




const routes: Routes = [
  {
    path: '',
    component: Home1Component
  },
  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
    
  },
  {
    path:'retail',
  component:RetailcourseComponent,
  },

  //  children: [
      {
        path:'course', component: CorsedetailsComponent
      },
      // {
      //   path:'notes', component: DepositbComponent
      // }
  //   ]
  // },
  {
    path:'cooperational',
    component:CooperationalcourseComponent
  },
  {
    path:'institutional',
    component:InstitutionalcourseComponent
  },
{
    path:'coursedetails',
    component:CorsedetailsComponent
  },
  {
    path:'sidenav',
    component: SidebarComponent
  },
//  //////////////////////////////////////////////////
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    FormsModule,
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
