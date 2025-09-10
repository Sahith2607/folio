"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Placeholder map image
const PlaceHolderImages = [
  {
    id: "map",
    imageUrl: "https://i.ibb.co/4RwrpJ3W/giphy.gif", // replace with your map image URL
    imageHint: "Map showing location",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const mapImage = PlaceHolderImages.find((img) => img.id === "map");

  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            I'm open to new opportunities and collaborations. Feel free to
            reach out.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:sahithreddy0426@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    sahithreddy0426@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-muted-foreground">9390598211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {mapImage && (
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={mapImage.imageUrl}
                  alt="Location map"
                  width={800}
                  height={600}
                  className="w-full aspect-video object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-8 shadow-sm animate-in fade-in slide-in-from-right-12 duration-700">
            <form
              action="https://formspree.io/f/mrbajjed"
              method="POST"
              className="flex flex-col gap-4"
              onSubmit={() => setSubmitted(true)}
            >
              <label className="flex flex-col">
                <span className="text-sm font-medium text-white">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 rounded-md border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-white">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 rounded-md border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-white">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 rounded-md border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
              >
                Send Message
              </button>

              {submitted && (
                <p className="mt-2 text-green-400">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
