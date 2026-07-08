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
       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=240&fit=crop',
      title: 'SenTech School',
      description: 'Site web institutionnel conçu pour présenter les formations, les services et les actualités de SenTech School à travers une interface moderne et responsive.',
      technologies: ['Angular', 'Laravel', 'Responsive', 'LWS'],
      demoLink: 'https://groupesentechmc.com',
      githubLink: 'https://github.com/codousarr/sentech-school' // laisser vide '' ou omettre si le repo n'est pas public
   
     },
     {
       image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=240&fit=crop',
       title: 'Jotanu Jàng ak Jarinu (P3J)',
       description: 'Plateforme permettant aux utilisateurs de consulter des formations, de déposer des demandes de bourses en ligne et de suivre leurs candidatures.',
        technologies: ['Angular', 'Laravel', 'Responsive','LWS'],
       demoLink: 'https://p3jsenegal.com',
       githubLink: 'https://github.com/codousarr/sentech-school' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=240&fit=crop',
       title: 'O\'Marsé',
       description: 'Marketplace mettant en relation producteurs locaux et consommateurs afin de promouvoir les circuits courts alimentaires.',
        technologies: ['Angular', 'Laravel', 'Responsive', 'GitHub'],
       demoLink: 'https://sentech-school.exemple.com',
       githubLink: 'https://github.com/codousarr/Frontend_Memoire' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=240&fit=crop',
       title: 'ABK AUTOMOBILE',
       description: 'Plateforme dédiée à la vente et location de voitures avec interface responsive.',
        technologies: ['Angular', 'Laravel', 'Responsive','Vercel', 'Railway'],
       demoLink: 'https://sentech-school.exemple.com',
       githubLink: 'https://ecom-car-mu.vercel.app/home' // laisser vide '' ou omettre si le repo n'est pas public
    
     },
     {
       image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=240&fit=crop',
       title: 'Coco Beauty Store',
       description: 'Plateforme e-commerce de produits de beauté, cosmétiques et d\'hygiène',
       technologies: ['Angular', 'Laravel', 'Responsive','Hetzner Cloud', 'Coolify'],
       demoLink: 'https://toulayskin.sn',
       githubLink: 'https://github.com/codousarr/sentech-school' // laisser vide '' ou omettre si le repo n'est pas public
     },
    {
       image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=240&fit=crop',
       title: 'Toulay Skin',
       description: 'Boutique en ligne de vente de produits cosmétiques, proposant une expérience d\'achat moderne avec gestion des produits, du panier, des commandes, paiements et livraisons.',
        technologies: ['Angular', 'Laravel', 'Responsive'],
       demoLink: 'https://sentech-school.exemple.com',
       githubLink: 'https://toulayskin.sn/home/accueil' // laisser vide '' ou omettre si le repo n'est pas public
    
     }
 ];

}
