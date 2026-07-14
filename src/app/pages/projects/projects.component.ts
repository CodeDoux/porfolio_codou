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
       image: 'images/sentech.jpg',
      title: 'SenTech School',
      description: 'Site web institutionnel conçu pour présenter les formations, les services et les actualités de SenTech School à travers une interface moderne et responsive.',
      technologies: ['Angular', 'Laravel', 'Responsive', 'LWS'],
      demoLink: 'https://groupesentechmc.com',
      githubLink: 'https://github.com/CodeDoux/sentech' // laisser vide '' ou omettre si le repo n'est pas public
   
     },
     {
       image: 'images/p3j.jpg',
       title: 'Jotanu Jàng ak Jarinu (P3J)',
       description: 'Plateforme permettant aux utilisateurs de consulter des formations, de déposer des demandes de bourses en ligne et de suivre leurs candidatures.',
        technologies: ['Angular', 'Laravel', 'Responsive','LWS'],
       demoLink: 'https://p3jsenegal.com',
       githubLink: 'https://github.com/CodeDoux/jotaayu_jang_jarinu' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
      image: 'images/marsé.jpg',
       title: 'O\'Marsé',
       description: 'Marketplace mettant en relation producteurs locaux et consommateurs afin de promouvoir les circuits courts alimentaires.',
        technologies: ['Angular', 'Laravel', 'Responsive', 'GitHub'],
       demoLink: '#',
       githubLink: 'https://github.com/codousarr/Frontend_Memoire' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
       image: 'images/abk.jpg',
       title: 'ABK AUTOMOBILE',
       description: 'Plateforme dédiée à la vente et location de voitures avec interface responsive.',
        technologies: ['Angular', 'Laravel', 'Responsive','Vercel', 'Railway'],
       demoLink: 'https://ecom-car-mu.vercel.app/home',
       githubLink: 'https://github.com/CodeDoux/ecom_car_api' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
       image: 'images/coco.png',
       title: 'Coco Beauty Store',
       description: 'Plateforme e-commerce de produits de beauté, cosmétiques et d\'hygiène',
       technologies: ['Angular', 'Laravel', 'Responsive','Hetzner Cloud', 'Coolify'],
       demoLink: '#',
       githubLink: 'https://github.com/CodeDoux/site_ecommerce_codou' // laisser vide '' ou omettre si le repo n'est pas public
     },
    {
       image: 'images/toulay.jpg',
       title: 'Toulay Skin',
       description: 'Boutique en ligne de vente de produits cosmétiques, proposant une expérience d\'achat moderne avec gestion des produits, du panier, des commandes, paiements et livraisons.',
        technologies: ['Angular', 'Laravel', 'Responsive'],
       demoLink: 'https://toulayskin.sn/home/accueil',
       githubLink: 'https://github.com/CodeDoux/site_cosmetique' // laisser vide '' ou omettre si le repo n'est pas public
    
     }
 ];

}
