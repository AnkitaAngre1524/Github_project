import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './git/git/footer/footer.component';
import { GraphComponent } from './git/git/graph/graph.component';
import { Navbar1Component } from './git/git/navbar1/navbar1.component';
import { Navbar2Component } from './git/git/navbar2/navbar2.component';
import { ProfileComponent } from './git/git/profile/profile.component';
import { RepoComponent } from './git/git/repo/repo.component';

const routes: Routes = [
  {path: 'footer',component:FooterComponent},
  {path: 'navbar1',component:Navbar1Component},
  {path: 'navbar2',component:Navbar2Component},
  {path: 'profile',component:ProfileComponent},
  {path: 'repo',component:RepoComponent},
  {path: 'graph',component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
