import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SocialLinksComponent } from './components/social-links.component';
import { ExperienceCardComponent } from './components/experiance-card.component';
import { NgClass, NgFor } from '@angular/common';
import { ProjectsCardComponent } from './components/projects-card.component';

@Component({
  selector: 'app-home',
  imports: [
    SocialLinksComponent,
    ExperienceCardComponent,
    NgFor,
    ProjectsCardComponent,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  activeSection = 'about';

  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef;
  @ViewChild('airplane', { static: true }) airplane!: ElementRef;

  // Skills (existing + AI/ML stack + cloud/database)
  skills = [
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'Express.js',
    'FastAPI',
    'Django',
    'MongoDB',
    'PostgreSQL',
    'SQL',
    'Redis',
    'Firebase',
    'TensorFlow',
    'PyTorch',
    'LangChain',
    'Google AI Solutions',
    'BigQuery',
    'TailwindCSS',
    'TypeScript',
    'REST API',
    'GraphQL',
    'Prisma',
    'Pusher',
    'JWT Web Tokens',
    'Next Auth',
    'Redux',
    'Zustand',
    'Zod',
    'Headless UI',
    'Figma',
    'Docker',
    'Python',
    'Flask'
  ];

  // Experiences (AI/ML focused)
  experiences = [
    {
      startingDate: '2024',
      endingDate: 'Present',
      role: 'AI-Powered Agriculture Platform',
      field: 'Personal Project',
      companyName: 'Self',
      description:
        'Built an AI-driven website to detect plant diseases using CNN. Developed chatbot with Dialogflow CX, integrated Vertex AI for field insights. Deployed on Vercel with real-time messaging using Pusher.',
      skills: [
        'Next.js', 'TypeScript', 'MongoDB', 'Google Cloud', 'Vertex AI', 'Pusher', 'TensorFlow', 'Python', 'FastAPI'
      ],
      url: 'https://agritech-sigma.vercel.app/',
    },
    {
      startingDate: '2024',
      endingDate: 'Present',
      role: 'RAG Chatbot',
      field: 'Personal Project',
      companyName: 'Self',
      description:
        'Developed Retrieval-Augmented Generation chatbot using LangChain and Pinecone vector database. Dockerized and deployed backend on Google Cloud Run.',
      skills: ['Node.js', 'Express', 'LangChain', 'Pinecone', 'Docker', 'Google Cloud Run'],
      url: '#',
    },
    {
      startingDate: '2024',
      endingDate: 'Present',
      role: 'Multi-Agent RAG Chatbot',
      field: 'Personal Project',
      companyName: 'Self',
      description:
        'Built multi-agent chatbot using Document AI and Gemini. FastAPI backend containerized with Docker and deployed on Cloud Run.',
      skills: ['Python', 'FastAPI', 'Document AI', 'Gemini', 'Docker', 'Google Cloud Run'],
      url: '#',
    },
    {
      startingDate: '2023',
      endingDate: 'Present',
      role: 'Multi-Merchant E-Commerce Platform',
      field: 'Personal Project',
      companyName: 'Self',
      description:
        'Developed multi-vendor e-commerce website with React, supporting product listings, authentication, and order management.',
      skills: ['React', 'MongoDB', 'Next.js', 'TailwindCSS'],
      url: '#',
    },
  ];

  // Projects
  projects = [
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420464/Screenshot_1_kx1sws.png',
      title: 'AI-Powered Agriculture Platform',
      description:
        'CNN model for plant disease detection, LLM insights for farmers, Dialogflow CX chatbot, real-time communication using Pusher, and Google Cloud integrations.',
      skills: [
        'Next.js','TypeScript','MongoDB','TailwindCSS','Vertex AI','Pusher','FastAPI','TensorFlow','Python'
      ],
      url: 'https://agritech-sigma.vercel.app/',
    },
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420427/2025-02-13_hm1r9b.png',
      title: 'RAG Chatbot (LangChain + Pinecone)',
      description:
        'Retrieval-Augmented Generation chatbot, Express backend, Dockerized and deployed on Google Cloud Run.',
      skills: ['Node.js','LangChain','Pinecone','Docker','Google Cloud Run'],
      url: '#',
    },
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420435/2025-02-14_chatbot.png',
      title: 'Multi-Agent RAG Chatbot',
      description:
        'Document AI + Gemini powered multi-agent chatbot with FastAPI backend, Dockerized and deployed on Cloud Run.',
      skills: ['Python','FastAPI','Document AI','Gemini','Docker','Google Cloud Run'],
      url: '#',
    },
    {
      thubnail:
        'https://res.cloudinary.com/dhlnyt7hf/image/upload/v1739420440/2025-02-15_ecommerce.png',
      title: 'Multi-Merchant E-Commerce Platform',
      description:
        'React-based multi-vendor e-commerce platform with admin dashboard and product/order management.',
      skills: ['React','MongoDB','Next.js','TailwindCSS'],
      url: '#',
    },
  ];

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
          const airplane = document.querySelector('.airplane-container') as HTMLElement;
          const index = Array.from(sections).indexOf(entry.target);
          airplane.style.transform = `translateX(${index * 100}px) translateY(${index * 50}px)`;
        }
      });
    }, observerOptions);

    sections.forEach((section: Element) => observer.observe(section));

    bubbles.forEach((bubble) => {
      bubble.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        target.classList.add('burst');
        setTimeout(() => target.remove(), 300);
      });
    });
  }
}
