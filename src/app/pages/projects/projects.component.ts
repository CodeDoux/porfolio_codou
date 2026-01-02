import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sama Panier',
      description: 'Plateforme de circuit court alimentaire connectant producteurs et acheteurs.',
      image: 'assets/images/project1.png',
      link: 'https://github.com/codousarr/sama-panier'
    },
    {
      title: 'Gestion Étudiants',
      description: 'Application de gestion académique en C# et SQL Server.',
      image: 'assets/images/project2.png',
      link: 'https://github.com/codousarr/gestion-etudiants'
    }
  ];

}
