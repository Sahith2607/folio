import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === "profile-picture"
  );

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-left-12 duration-700">
            {profileImage && (
              <Image
                src="https://i.ibb.co/Jjq89j5x/Untitled-design.png" 
                alt={profileImage.description}
                width={400}
                height={400}
                className="mx-auto aspect-square rounded-full object-cover shadow-lg"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6 animate-in fade-in slide-in-from-right-12 duration-700">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-lg">
                I'm a passionate data scientist and developer with a knack for
                finding insights in data and building beautiful, functional web
                experiences. My journey into the world of tech began with a
                fascination for numbers, which quickly evolved into a deep dive
                into machine learning and software engineering.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Whether I'm training a predictive model or crafting a responsive
                UI, I bring a commitment to excellence and a user-centric
                mindset. I thrive in collaborative environments and I'm always
                eager to learn new technologies and tackle challenging problems.
              </p>
            </div>
            <Button asChild variant="link" className="p-0 text-lg text-accent">
                <Link href="https://drive.google.com/file/d/1N7ESKWAK1BlQ7zU1mWeqVxN8H3reMyPi/view?usp=sharing">Download My Resume &rarr;</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
