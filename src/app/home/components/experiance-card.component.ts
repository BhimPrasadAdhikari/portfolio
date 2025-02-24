import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,NgFor],
  template: `
    <!-- The entire card is wrapped in an anchor tag to make it clickable -->
    <a [href]="experience.url || '#'" class="group block">
      <div
        class="p-6  rounded-lg shadow-sm transition duration-300 group-hover:shadow-lg group-hover:bg-slate-800 cursor-pointer"
      >
        <!-- Header: Dates on the left, and role/company details with an animated arrow on the right -->
        <div class="grid grid-cols-4 ">
          <div class="text-sm text-gray-500 font-medium col-span-1">
            {{ experience.startingDate }} - {{ experience.endingDate }}
          </div>
          <div class="flex  flex-col col-span-3">
            <div
              class="text-lg font-semibold text-whit"
            >
              {{ experience.role }}, {{ experience.field }} .
              {{ experience.companyName }}
              <fa-icon
                [icon]="faArrowRight"
                animation="beat"
                class="ml-2 text-gray-500 transition-transform duration-300 group-hover:translate-x-2"
              ></fa-icon>
            </div>
            <div>
              <!-- Description -->
              <p class="mt-4 text-gray-300 ">
                {{ experience.description }}
              </p>
            </div>
            <!-- Projects link with name -->
<div class="mt-2">
    <a 

    *ngFor ="let project of experience.projects"
    [href]="project.url">
    <fa-icon
                [icon]="faLink"
                class="ml-2 text-gray-500 transition-transform duration-300 group-hover:translate-x-2"
              >
            </fa-icon>
    {{project.name}}

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
