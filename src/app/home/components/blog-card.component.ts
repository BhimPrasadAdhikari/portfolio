import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <!-- The entire card is wrapped in an anchor tag to make it clickable -->
    <a [href]="blog.url || '#'" class="group block">
      <div
        class="p-6  rounded-lg shadow-sm transition duration-300 group-hover:shadow-lg group-hover:bg-slate-800 cursor-pointer"
      >
        <div class="grid grid-cols-4 ">
          <div class="text-sm text-gray-500 font-medium col-span-1">
            <img
              [src]="blog.thubnail"
              alt="course thumbnail"
              class="w-20 h-20 rounded-lg"
            />
          </div>
          <div class="flex  flex-col col-span-3">
            <div class="text-lg font-semibold text-whit">
              {{ blog.title }}
              <fa-icon
                [icon]="faArrowRight"
                animation="beat"
                class="ml-2 text-gray-500 transition-transform duration-300 group-hover:translate-x-2"
              ></fa-icon>
            </div>
            <div>
              <!-- Description -->
              <p class="mt-4 text-gray-300 ">
                {{ blog.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class BlogCardComponent {
  @Input() blog!: {
    thubnail: string;
    title: string;
    stars?: number;
    views?: number;
    description: string;
    url?: string;
  };

  faArrowRight = faArrowRight;
  faLink = faLink;
}
