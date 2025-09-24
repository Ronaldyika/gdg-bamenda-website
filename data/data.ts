// Navigation hedaer data (update data with better structure using either class or interface)
export const items = [
  "Home",
  "Ticket",
  "Speakers",
  "Schedule",
  "Sponsors",
  "Team",
  "Venue",
];

export interface Social {
  name: string;
  link: string;
  icon: string;
}

export const socials: Social[] = [
  {
    name: "Twitter",
    link: "https://x.com/#",
    icon: "/socials/twitter.c404a4b6.svg",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/#",
    icon: "/socials/ig.5da23257.svg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/#",
    icon: "/socials/fb.31cc0830.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/#",
    icon: "/socials/linkedin.e95a52cb.svg",
  },
];

export const devfestHastags = [
  "#DEVFEST2025",
  "#DEVFESTBamenda",
  "#DEVFESTBamenda",
  "#DEVFESTBamenda",
  "#DEVFESTBamenda",
  "#DEVFESTBamenda",
];

export type Speaker = {
  name: string;
  role: string;
  image: string;
  tag: string;
  colour: string;
};

export const speakers: Speaker[] = [
  {
    name: "Lynnette Lynnette",
    role: "GDG Bamenda Lead",
    image: "/gdg-assets/lynette.jpg",
    tag: "Conference",
    colour: "accent",
  },
  {
    name: "Lynnette Lynnette",
    role: "GDG Bamenda Lead",
    image: "/gdg-assets/lynette.jpg",
    tag: "Workshop",
    colour: "chart-4",
  },
  {
    name: "Lynnette Lynnette",
    role: "GDG Bamenda Lead",
    image: "/gdg-assets/lynette.jpg",
    tag: "Conference",
    colour: "chart-1",
  },
  {
    name: "Lynnette Lynnette",
    role: "GDG Bamenda Lead",
    image: "/gdg-assets/lynette.jpg",
    tag: "Conference",
    colour: "chart-2",
  },
];
