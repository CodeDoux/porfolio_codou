import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   menuActive = false;

   @HostListener('window:scroll', [])
   onWindowScroll() {
     const navbar = document.getElementById('navbar');
     if (window.pageYOffset > 50) {
       navbar?.classList.add('scrolled');
     } else {
       navbar?.classList.remove('scrolled');
     }
   }

   toggleMenu() {
     this.menuActive = !this.menuActive;
     const menuToggle = document.getElementById('menuToggle');
     menuToggle?.classList.toggle('active');
   }

   closeMenu() {
     if (window.innerWidth <= 768) {
       this.menuActive = false;
       const menuToggle = document.getElementById('menuToggle');
      menuToggle?.classList.remove('active');
   }
 }

  year = new Date().getFullYear();

}
