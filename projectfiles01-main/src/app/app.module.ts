import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
import { Home1Component } from './components/home1/home1.component';
import { RetailcourseComponent } from './components/courses/retailcourse/retailcourse.component';
import { InstitutionalcourseComponent } from './components/courses/institutionalcourse/institutionalcourse.component';
import { CooperationalcourseComponent } from './components/courses/cooperationalcourse/cooperationalcourse.component';
import { CorsedetailsComponent } from './components/courses/corsedetails/corsedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { BrochureRequestComponent } from './brochure-request/brochure-request.component';
import { CourselistComponent } from './admin/courselist/courselist.component';
import { CorporatecourselistComponent } from './admin/corporatecourselist/corporatecourselist.component';
import { InstitutionalcourselistComponent } from './admin/institutionalcourselist/institutionalcourselist.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './admin/main/main.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { ReportsComponent } from './admin/reports/reports.component';
// import { faSun as farSun, faStar as farStar, faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';
// import { faSun as fasSun, faStar as fasStar, faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStackOverflow, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    HeaderComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    TeamComponent,
    Home1Component,
    RetailcourseComponent,
    CourselistComponent ,
    InstitutionalcourseComponent,
    InstitutionalcourselistComponent,
    CooperationalcourseComponent,
    CorporatecourselistComponent,
    CorsedetailsComponent,
    SidebarComponent,
    DashboardComponent,
    BrochureRequestComponent,  MainComponent,
   
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatFormFieldModule,
    NgbModule,
  
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,FontAwesomeModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
