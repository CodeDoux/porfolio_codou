import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  profileImg = 'images/image_profile.JPG';
  downloadCV(): void {
 const link = document.createElement('a');
   link.href = 'cv/CV_Codou_Sarr.pdf';
   link.download = 'CV_Codou_Sarr.pdf';
   link.click();
 }

}
