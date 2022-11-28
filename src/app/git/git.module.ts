import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar1Component } from './git/navbar1/navbar1.component';
import { Navbar2Component } from './git/navbar2/navbar2.component';
import { ProfileComponent } from './git//profile/profile.component';
import { FooterComponent } from './git/footer/footer.component';
import { RepoComponent } from './git/repo/repo.component';
import { GraphComponent } from './git/graph/graph.component';




@NgModule({
  declarations: [
    Navbar1Component,
    Navbar2Component,
    ProfileComponent,
    FooterComponent,
    RepoComponent,
    GraphComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class GitModule { }
