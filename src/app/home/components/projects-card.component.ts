import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgFor],
  template: `
    <a [href]="projects.url || '#'" class="group block">
      <div
        class="p-6 rounded-lg shadow-sm transition duration-300 group-hover:shadow-lg group-hover:bg-slate-800 cursor-pointer"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Thumbnail -->
          <div class="col-span-1 flex justify-center md:justify-start">
            <img
              [src]="projects.thubnail"
              alt="{{ projects.title }} thumbnail"
              class="w-full max-w-xs h-40 md:h-36 rounded-lg object-contain"
            />
          </div>

          <!-- Project Details -->
          <div class="flex flex-col col-span-3">
            <div class="text-lg font-semibold text-white flex items-center">
              {{ projects.title }}
              <fa-icon
                [icon]="faArrowRight"
                class="ml-2 text-gray-500 transition-transform duration-300 group-hover:translate-x-2"
              ></fa-icon>
            </div>

            <!-- Description -->
            <p class="mt-4 text-gray-300">
              {{ projects.description }}
            </p>

            <!-- Skills / Tags -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                *ngFor="let skill of projects.skills"
                class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class ProjectsCardComponent {
  @Input() projects!: {
    thubnail: string;
    title: string;
    stars?: number;
    totalStudents?: number;
    description: string;
    downloads?: string;
    skills: string[];
    url?: string;
  };

  faArrowRight = faArrowRight;
  faLink = faLink;
}
