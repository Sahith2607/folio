import AnimatedCounter from "./animated-counter";
import { Briefcase, Award, FolderGit2 } from "lucide-react";

const stats = [
  {
    value: 7,
    label: "Projects Completed",
    icon: FolderGit2,
  },
  {
    value: 2,
    label: "Internships",
    icon: Briefcase,
  },
  {
    value: 5,
    label: "Certifications",

    icon: Award,
  },
];

export default function StatsSection() {
  return (
    <section id="stats">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <stat.icon className="h-10 w-10 text-primary" />
              <div className="font-headline text-5xl font-bold">
                <AnimatedCounter targetValue={stat.value} />+
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
