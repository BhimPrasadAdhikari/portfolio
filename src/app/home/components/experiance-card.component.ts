import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgFor],
  template: `
    <a [href]="experience.url || '#'" class="group block">
      <div
        class="p-6 rounded-lg shadow-sm transition duration-300 group-hover:shadow-lg group-hover:bg-slate-800 cursor-pointer"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
          <!-- Dates -->
          <div class="text-sm text-gray-500 font-medium">
            {{ experience.startingDate }} - {{ experience.endingDate }}
          </div>

          <!-- Role & Company -->
          <div class="flex flex-col md:col-span-3">
            <div class="text-lg font-semibold text-white flex items-center">
              {{ experience.role }}, {{ experience.field }} .
              {{ experience.companyName }}
              <fa-icon
                [icon]="faArrowRight"
                class="ml-2 text-gray-500 transition-transform duration-300 group-hover:translate-x-2"
              ></fa-icon>
            </div>

            <!-- Description -->
            <p class="mt-4 text-gray-300">
              {{ experience.description }}
            </p>

            <!-- Projects (optional) -->
            <div *ngIf="experience.projects?.length" class="mt-2 flex flex-wrap gap-2">
              <a
                *ngFor="let project of experience.projects"
                [href]="project.url"
                class="text-sm text-blue-400 hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <fa-icon [icon]="faLink"></fa-icon> {{ project.name }}
              </a>
            </div>

            <!-- Skills / Tags -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                *ngFor="let skill of experience.skills"
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
export class ExperienceCardComponent {
  @Input() experience!: {
    startingDate: string;
    endingDate: string;
    role: string;
    field: string;
    companyName: string;
    description: string;
    projects?: { name: string; url: string }[];
    skills: string[];
    url?: string;
  };

  faArrowRight = faArrowRight;
  faLink = faLink;
}
