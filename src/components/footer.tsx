import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { XLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t bg-card py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Persona Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
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
    </footer>
  );
}
