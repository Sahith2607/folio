import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "./ui/button";

const projects = [
  {
    id: "project-1",
    title: "Sentiment Analysis Engine",
    description:
      "A machine learning model that analyzes text from social media to determine sentiment polarity. Built with Python, TensorFlow, and deployed as a REST API.",
    technologies: ["Python", "TensorFlow", "Flask", "Docker"],
  },
  {
    id: "project-2",
    title: "Portfolio Website V2",
    description:
      "This very portfolio website, built with Next.js and Tailwind CSS for a sleek, modern, and fully responsive user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "project-3",
    title: "Interactive Data Dashboard",
    description:
      "A web-based dashboard for visualizing sales data, featuring interactive charts and filters. Created with React and D3.js.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Here are a few projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(
              (img) => img.id === project.id
            );
            return (
              <Card
                key={project.id}
                className="flex flex-col overflow-hidden transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-12 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Sahith2607">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
