import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './git/git/footer/footer.component';
import { Navbar1Component } from './git/git/navbar1/navbar1.component';
import { Navbar2Component } from './git/git/navbar2/navbar2.component';
import { ProfileComponent } from './git/git/profile/profile.component';
import { RepoComponent } from './git/git/repo/repo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GraphComponent } from './git/git/graph/graph.component';




@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component,
    ProfileComponent,
    FooterComponent,
    RepoComponent,
    GraphComponent
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
