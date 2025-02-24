import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="mt-40">
        <!-- Social media connections with icons -->
        <div class="flex items-center gap-5 mt-5">
            <a href="https://github.com/BhimPrasadAdhikari" target="_blank">
                <fa-icon size="2x"  animation="beat" [icon]="['fab', 'github']" class=" text-gray-600 hover:text-gray-500 "></fa-icon>
            </a>
            <a href="https://www.linkedin.com/in/bhim-prasad-adhikari-42b19b248" target="_blank">
                <fa-icon size="2x" animation="beat"  [icon]="['fab', 'linkedin']" class=" text-blue-600 hover:text-blue-500"></fa-icon>
            </a>
            <a href="https://www.facebook.com/unique.adhikari.545" target="_blank">
                <fa-icon size="2x" animation="beat"  [icon]="['fab', 'facebook']" class=" text-blue-500 hover:text-blue-400"></fa-icon>
            </a>
            <a href="https://www.instagram.com/euqinu18" target="_blank">
                <fa-icon size="2x" animation="beat"  [icon]="['fab', 'instagram']" class=" text-pink-600 hover:text-pink-500"></fa-icon>
            </a>
            <a href="https://x.com/unique_adhi" target="_blank">
                <fa-icon size="2x" animation="beat"  [icon]="['fab', 'x-twitter']" class=" text-black hover:text-gray-900"></fa-icon>
            </a>
        </div>
    </section>
  `
})
export class SocialLinksComponent {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faFacebook, faInstagram, faXTwitter);
  }
}
