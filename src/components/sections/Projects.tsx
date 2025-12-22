import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "ai";
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard built with Laravel and React.",
    tags: ["Laravel", "React", "MySQL", "Stripe"],
    category: "web",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Cross-platform mobile application for team collaboration with real-time sync, push notifications, and offline support.",
    tags: ["Flutter", "Firebase", "Dart"],
    category: "mobile",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator with customizable themes, SEO optimization, and CMS integration.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "web",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "Modern chat interface powered by AI for customer support automation with natural language processing.",
    tags: ["React", "Node.js", "OpenAI"],
    category: "ai",
    github: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours, booking system, and agent dashboard.",
    tags: ["PHP", "jQuery", "MySQL", "Bootstrap"],
    category: "web",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile fitness application with workout plans, progress tracking, and social features for motivation.",
    tags: ["Flutter", "MongoDB", "REST API"],
    category: "mobile",
    github: "#",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        className={`group relative p-6 bg-card border border-border rounded-lg overflow-hidden ${
          project.featured ? "md:col-span-2 lg:col-span-1" : ""
        }`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded border border-primary/30">
              Featured
            </span>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Folder className="text-primary" size={24} />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.category === "web" ? "Web Dev" : project.category === "mobile" ? "Mobile" : "AI/ML"}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-300 group-hover:box-glow-sm" />
      </motion.div>
    </FadeIn>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
              {"// Featured Work"}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-glow">
              Projects Showcase
            </h2>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-semibold text-primary border border-primary rounded hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
