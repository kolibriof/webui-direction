import hulu from "./media/hulu.png";
import bbcStudios from "./media/bbc_studios.png";
import universals from "./media/universals.png";
import adobe from "./media/adobe.png";
import fbIcon from "./media/icons/fb_icon.png";
import igIcon from "./media/icons/ig_icon.png";
import twitterIcon from "./media/icons/twitter_icon.png";
import youtubeIcon from "./media/icons/youtube_icon.png";
import cursorWelcome from "./media/welcome_background_figures/welcome_section_cursor.png";
import triangleWelcome from "./media/welcome_background_figures/welcome_section_triangle.png";
import rectangleWelcome from "./media/welcome_background_figures/welcome_section_rectangle.png";
import ellipseWelcome from "./media/welcome_background_figures/welcome_section_ellipse.png";

export const photos = [
  {
    src: hulu,
    alt: "company",
  },
  {
    src: bbcStudios,
    alt: "company",
  },
  {
    src: universals,
    alt: "company",
  },
  {
    src: adobe,
    alt: "company",
  },
];

export const footerLinks = [
  {
    title: "Product",
    contents: [
      "Product",
      "Pricing",
      "Enterprise",
      "Partners",
      "Affiliate",
      "Integrations",
      "Developers",
      "Students",
      "Work OS",
    ],
  },
  {
    title: "Team",
    contents: [
      "About Us",
      "Contact Us",
      "Careers",
      "Find a Partner",
      "In the News",
    ],
  },
  {
    title: "Solutions",
    contents: [
      "Project Management",
      "Marketing",
      "CRM and Sales",
      "Software Development",
      "Constructions",
      "Creative Production",
      "Remote Work",
      "HR",
      "IT",
      "See More Solutions",
    ],
  },
  {
    title: "Resources",
    contents: [
      "Knowledge Base",
      "Guides",
      "Daily Webinars",
      "Community",
      "Customer Stories",
      "Templates",
      "Profesionals Services",
      "Video Tutorials",
      "Blog",
      "Podcast",
    ],
  },
];

export const footerIcons = [
  {
    src: fbIcon,
    alt: "facebook icon",
    href: "https://facebook.com",
  },
  {
    src: igIcon,
    alt: "instagram icon",
    href: "https://instagram.com",
  },
  {
    src: twitterIcon,
    alt: "twitter icon",
    href: "https://twitter.com",
  },
  {
    src: youtubeIcon,
    alt: "youtube icon",
    href: "https://youtube.com",
  },
];
export const welcomeBackgroundImages = [
  {
    src: cursorWelcome,
    alt: "cursor welcome",
    className: "cursor-welcome-section",
  },
  {
    src: ellipseWelcome,
    alt: "ellipse welcome",
    className: "ellipse-welcome-section",
  },
  {
    src: triangleWelcome,
    alt: "triangle welcome",
    className: "triangle-welcome-section",
  },
  {
    src: rectangleWelcome,
    alt: "rectangle welcome",
    className: "rectangle-welcome-section",
  },
];
