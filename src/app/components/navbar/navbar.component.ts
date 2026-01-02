import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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

}
