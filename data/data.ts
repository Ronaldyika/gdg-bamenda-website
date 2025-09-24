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

export type Speaker = {
  name: string;
  role: string;
  image: string;
  tag: string;
  colour: string;
};

type ColourOption =
  | "accent"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export interface Organizer {
  name: string;
  role: string;
  image: string;
  socials: {
    x: string;
    linkedin: string;
  };
  colour: ColourOption;
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

export const organizers: Organizer[] = [
  {
    name: "Ndifon Ndifon Ndifon",
    role: "GDG Co-Organizer",
    image: "/gdg-assets/organizer_1.jpg",
    socials: {
      x: "https://x.com/ndifon",
      linkedin: "https://linkedin.com/in/ndifon",
    },
    colour: "accent",
  },
  {
    name: "Ndifon Ndifon Ndifon",
    role: "Volunteer",
    image: "/gdg-assets/organizer_1.jpg",
    socials: {
      x: "https://x.com/ndifon",
      linkedin: "https://linkedin.com/in/ndifon",
    },
    colour: "chart-2",
  },
  {
    name: "Ndifon Ndifon Ndifon",
    role: "GDG Co-Organizer",
    image: "/gdg-assets/organizer_1.jpg",
    socials: {
      x: "https://x.com/ndifon",
      linkedin: "https://linkedin.com/in/ndifon",
    },
    colour: "chart-1",
  },
  {
    name: "Ndifon Ndifon Ndifon",
    role: "GDG Co-Organizer",
    image: "/gdg-assets/organizer_1.jpg",
    socials: {
      x: "https://x.com/ndifon",
      linkedin: "https://linkedin.com/in/ndifon",
    },
    colour: "chart-4",
  },
];
