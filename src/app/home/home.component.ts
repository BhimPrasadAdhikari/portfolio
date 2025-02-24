import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SocialLinksComponent } from './components/social-links.component';
import { ExperienceCardComponent } from './components/experiance-card.component';
import { NgClass, NgFor } from '@angular/common';
// import { BlogCardComponent } from './components/blog-card.component';
import { ProjectsCardComponent } from './components/projects-card.component';

@Component({
  selector: 'app-home',
  imports: [
    SocialLinksComponent,
    ExperienceCardComponent,
    NgFor,
    ProjectsCardComponent,
    // BlogCardComponent,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  activeSection = 'about';

  experiences = [
    {
      startingDate: '2020',
      endingDate: 'present',
      role: 'Frontend Developer',
      field: 'FreeLancer',
      companyName: 'Upwork',
      description:
        'Developing web applications for clients. Mainly focusing on frontend development.Applying best practices and modern technologies to build scalable and maintainable web applications.',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Angular',
        'Redux',
        'Zustand',
        'Zod',
        'HeadLess UI',
        'Figma',
      ],
      url: 'https://www.upwork.com',
    },
    {
      startingDate: '2022',
      endingDate: 'Present',
      role: 'Backend Developer',
      field: 'FreeLancer',
      companyName: 'Freelancer.com',
      description:
        'Developing backend services for clients. Mainly focusing on backend development.Applying best practices and modern technologies to build scalable and maintainable web applications.',
      skills: [
        'Exprees.js',
        'Node.js',
        'MongoDB',
        'Prisma',
        'Mongoose',
        'GraphQL',
        'MySQL',
        'PostgreSQL',
      ],
      url: 'https://www.freelancer.com',
    },
  ];

  projects = [
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420464/Screenshot_1_kx1sws.png',
      title: 'AgriTech',
      description:
        'Web Application for farmers to manage their crops.This web offers Real-time sattelite data of the field, AI plant disease detector,expert consultation through real-time chatting and video sharing system, dashboards for experts and admin, embedded e-commerce store that sells agriculture products, crop watering schedule reminder and emailing system.',
      skills: [
        'Next.js',
        'TypeScript',
        'MongoDB',
        'TailwindCSS',
        'REST API',
        'Prisma',
        'web sockets',
        'Pusher',
        'JWT web tokens',
        'Next Auth',
        'Google Maps API',
        'Flask',
        'Python',
        'Tensorflow',
        'Pytorch',
        'node.js',
        'Redux',
      ],
      url: 'https://agritech-sigma.vercel.app/',
    },
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420427/2025-02-13_hm1r9b.png',
      title: 'Kurta Glow',
      description:
        'E-commerce website for selling traditional Nepali dresses. This website offers a wide range of traditional Nepali dresses, a user-friendly interface, and a secure payment gateway. It also has a dashboard for the admin to manage products, orders, and users. it has content management system for the admin to manage the content of the website.',
      skills: [
        'Next.js',
        'TypeScript',
        'MongoDB',
        'TailwindCSS',
        'REST API',
        'Prisma',
        'Clerk',
        'JWT web tokens',
        'Zustand',
        'Zod',
        'Headless UI',
      ],
      url: 'https://kurtaglow-y7cc.vercel.app/',
    },
  ];

  blogs = [
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739291612/hq720_euxucq.jpg',
      title: 'Angular',
      description: 'Learn Angular from scratch.',
      url: 'https://www.angular.io',
    },
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739291714/1695497781676_lmmjvn.jpg',
      title: 'React',
      description: 'Learn React from scratch.',
      url: 'https://www.reactjs.org',
    },
  ];
  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef;
  @ViewChild('airplane', { static: true }) airplane!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.scrollableContainer.nativeElement;
    const sections = container.querySelectorAll('section');
    const bubbles = document.querySelectorAll('.bubble');

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.6, // 60% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
          const airplane = document.querySelector(
            '.airplane-container'
          ) as HTMLElement;
          const index = Array.from(sections).indexOf(entry.target);

          airplane.style.transform = `translateX(${index * 100}px) translateY(${
            index * 50
          }px)`;
        }
      });
    }, observerOptions);

    sections.forEach((section: Element) => {
      observer.observe(section);
    });

    bubbles.forEach((bubble) => {
      bubble.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        target.classList.add('burst');

        // Remove the bubble after the animation completes
        setTimeout(() => {
          target.remove();
        }, 300);
      });
    });
  }
}
