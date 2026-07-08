import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/home/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/accueil', pathMatch: 'full' },
     { path: '***', redirectTo: 'home/accueil' },
 {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
     { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
