export type ProjectStatus = "Completed" | "In Progress" | "Academic";

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  role: string;
  status: ProjectStatus;
  featured?: boolean;
  features?: string[];
  githubUrl?: string;
  repositoryNote?: string;
}

export const androidAppsRepository = "https://github.com/sherlyn-kalondu/My-Android-Apps";

export const projects: Project[] = [
  { title: "HR Management System", category: "Business application", status: "In Progress", featured: true, role: "Full Stack Development", description: "An in-progress database-driven HR management system designed around employee and organizational workflows. Development began from the backend, with employee records and department management among the implemented areas.", features: ["Employee records", "Department management", "HR workflows"], tags: ["Django", "Django REST Framework", "PostgreSQL", "React", "TypeScript"], githubUrl: "https://github.com/sherlyn-kalondu/SheKal-HR", repositoryNote: "The repository currently contains the in-progress backend." },
  { title: "POS & Business Management System", category: "Business application", status: "Completed", featured: true, role: "Frontend development, with backend collaboration", description: "A business application developed during software development attachment, with interfaces supporting sales, inventory, customers, invoices, products, suppliers, and day-to-day business operations.", features: ["Sales and inventory", "Customer and supplier management", "Invoices and products"], tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Django", "Django REST Framework"], githubUrl: "https://github.com/Jamestech-kyu/Optimum-Computer-Solutions-POS-System" },
  { title: "Sales ERP / Sales Entry & Receipt Management", category: "Business application", status: "Completed", role: "Frontend Development", description: "A web-based ERP module focused on sales entry, receipt management, returns, and related business workflows.", features: ["Sales entry", "Receipt management", "Returns workflows"], tags: ["React", "Django", "Django REST Framework", "MySQL", "Axios"] },
  { title: "Airport Passenger Journey Guide", category: "Academic mobile project", status: "Academic", role: "Android / Mobile Development", description: "An Android application designed to guide passengers through airport processes and provide a structured passenger journey experience.", features: ["Passenger journey guidance", "Airport process information"], tags: ["Java", "Android Studio", "XML"], githubUrl: "https://github.com/sherlyn-kalondu/My-Android-Apps/tree/master/AirportPassangerJourneyGuide" },
  { title: "Mood Music Recommender", category: "Academic mobile project", status: "Academic", role: "Android Development", description: "An Android application exploring mood-based music recommendations and integration with external music data.", tags: ["Java", "Android Studio", "Spotify API", "Retrofit", "Gson", "OkHttp", "Glide"], githubUrl: "https://github.com/sherlyn-kalondu/My-Android-Apps/tree/master/EmotionBasedMusicRecommenderApp" },
  { title: "Trip Planner", category: "Personal / Academic Project", status: "Academic", role: "Personal / Academic Project", description: "A planning-oriented application designed to help users organize trips and travel-related information.", tags: [] },
];
