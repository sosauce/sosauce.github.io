"use client";


import type { Event } from "./smoothui/apple-invites";
import AppleInvites from "./smoothui/apple-invites";

const AVATAR_SIZE = 72;


const demoEvents: Event[] = [
  {
    badge: "Hosting",
    id: 1,
    image: "/images/figma/bg-11.webp",
    location: "Central Park",
    subtitle: "Sat, June 14, 6:00 AM",
    title: "Yoga",
  },
  {
    badge: "Going",
    id: 2,
    image: "/images/figma/bg-9.webp",
    location: "Central Park",
    subtitle: "Sat, June 14, 3:00 PM",
    title: "Tyler Turns 3!",
  },
  {
    badge: "Going",
    id: 3,
    image: "/images/figma/bg-5.webp",
    location: "Golf Park",
    subtitle: "Sun, April 15, 9:00 AM",
    title: "Golf party",
  },
  {
    badge: "Interested",
    id: 4,
    image: "/images/figma/bg-13.webp",
    location: "Cine Town",
    subtitle: "Fri, June 20, 8:00 PM",
    title: "Movie Night",
  },
];

const Projects = () => (
  <div className="flex min-h-125 items-center justify-center">
    <AppleInvites
      cardWidth={{
        base: 100,
        lg: 220,
        md: 180,
        sm: 140,
        xl: 260,
      }}
      events={demoEvents}
    />
  </div>
);

export default Projects;

