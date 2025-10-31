export default defineAppConfig({
  global: {
    meetingLink: "https://cal.com/hassan.algebaly/15min",
    available: true,
  },
  profile: {
    name: "Hassan El-Gebaly",
    job: "Art Director (Motion Graphic – Video Editor – Graphic Designer)",
    email: "hassan.elgebaly@example.com", // Replace with real email if desired
    phone: "(+20) 111 523 9911",
    picture: "https://www.linkedin.com/in/hassan-algebaly/photo", // or upload your actual photo URL
  },
  socials: {
    github: "https://github.com/hassanelgebaly", // if applicable
    twitter: "https://twitter.com/hassan_elgebaly", // if applicable
    linkedin: "https://www.linkedin.com/in/hassan-algebaly/",
    instagram:
      "https://www.instagram.com/hassan.algebaly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    behance: "https://www.behance.net/hassanelgebaly", // optional: add Behance if relevant
    dribbble: "https://dribbble.com/hassanelgebaly", // optional
  },
  seo: {
    title: "Hassan El-Gebaly – Art Director & Motion Designer Portfolio",
    description:
      "Portfolio of Hassan El-Gebaly, an Art Director and Motion Graphic Designer with over 5 years of experience in visual media, video editing, and digital advertising.",
    url: "https://hassanelgebaly.com", // replace with actual domain if available
  },
  ui: {
    colors: {
      primary: "emerald",
      neutral: "neutral",
    },
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
      defaultVariants: {
        color: "neutral",
      },
    },
    input: {
      defaultVariants: {
        color: "neutral",
      },
    },
    textarea: {
      defaultVariants: {
        color: "neutral",
      },
    },
    icons: {
      loading: "lucide:loader",
    },
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
