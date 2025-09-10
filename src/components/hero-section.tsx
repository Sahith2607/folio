import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { XLogo } from "@/components/icons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-4rem)] min-h-[500px] w-full flex-col items-center justify-center text-center"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Sahith Reddy
            </h1>
            <p className="mt-2 font-headline text-2xl text-primary">
              Data Scientist & Web Developer
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            I transform complex data into compelling stories and build intuitive,
            high-performance web applications.
          </p>
          <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
          <div className="mt-4 flex justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
            <Link
              href="https://github.com/Sahith2607"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahith-reddy-ba2212257/"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/SahithR2004"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="X/Twitter"
            >
              <XLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
