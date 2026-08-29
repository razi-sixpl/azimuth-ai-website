export type NewsItem = {
  title: string;
  /** The original page marks one card up as an <h1>; everything else is an <h3>. */
  headingTag: "h1" | "h3";
  date: string;
  image: string;
  alt?: string;
  href: string;
  /** Some thumbnails are narrower than the card on the original site. */
  imageWidth?: number;
};

export const NEWS: NewsItem[] = [
  {
    title:
      "Azimuth AI Announces New Funding Led by Jetha Global, Reinforcing Strong Trajectory into 2026",
    headingTag: "h3",
    date: "07/01/2026",
    image: "/images/images-1.png",
    alt: "toi",
    href: "https://timesofindia.indiatimes.com/tech-news/azimuth-ai-announces-new-funding-led-by-jetha-global-reinforcing-strong-trajectory-into-2026/articleshow/126391544.cms",
  },
  {
    title:
      "Azimuth AI Announces New Funding Led by Jetha Global, Reinforcing Strong Trajectory Into 2026",
    headingTag: "h1",
    date: "05/01/2026",
    image: "/images/prn_cision_logo_desktop.png",
    href: "https://www.prnewswire.com/news-releases/azimuth-ai-announces-new-funding-led-by-jetha-global-reinforcing-strong-trajectory-into-2026-302652015.html",
  },
  {
    title: "AZIMUTH AI: A SACRAMENTO-BORN\nBREAKTHROUGH BACKED BY MONETA VENTURES",
    headingTag: "h3",
    date: "04/12/2025",
    image: "/images/Screenshot-2025-12-04-112431.png",
    href: "https://online.fliphtml5.com/yzguw/hhsd/#p=64",
    imageWidth: 207,
  },
  {
    title: "30 Startups To Watch: Startups That Caught Our Eye In November 2025",
    headingTag: "h3",
    date: "02/12/2025",
    image: "/images/Inc42_30StartUpsToWatch.jpg",
    href: "https://inc42.com/startups/30-startups-to-watch-startups-that-caught-our-eye-in-november-2025/",
  },
  {
    title:
      "A historic milestone for Azimuth AI and for India’s semiconductor journey. 🇮🇳",
    headingTag: "h3",
    date: "18/11/2025",
    image: "/images/1763365488582.jpg",
    href: "https://www.linkedin.com/posts/praveen-y-051b824_semiconductors-makeinindia-indiatech-activity-7396090928358281216-uVez",
  },
  {
    title:
      "Azimuth AI and Cyient Semiconductors Unveil India’s First Intelligent-Power Silicon Chip",
    headingTag: "h3",
    date: "18/11/2025",
    image: "/images/Photograph-Cyient-Semiconductors-1.jpg",
    href: "https://themachinemaker.com/news/azimuth-ai-and-cyient-semiconductors-unveil-indias-first-intelligent-power-silicon-chip/",
  },
  {
    title:
      "Azimuth AI: Developing Highly Differentiated ASICS for Edge Computing Applications",
    headingTag: "h3",
    date: "11/11/2025",
    image: "/images/WhatsApp-Image-2025-11-11-at-1.26.35-PM.jpeg",
    href: "https://www.ciotechoutlook.com/magazines/november-tech-startups-special-november-2025/#page=18",
    imageWidth: 196,
  },
  {
    title:
      "Cyient Acquires Stake in Azimuth AI to Build Cutting-Edge ASIC Chips and Strengthen Semiconductor Capabilities",
    headingTag: "h3",
    date: "28/10/2024",
    image: "/images/shutterstock_1114245809_1_1.webp",
    href: "https://www.prnewswire.com/news-releases/azimuth-ai-edge-computing-silicon-company-closes-11-5-million-in-funding-302329582.html",
  },
  {
    title: "Azimuth AI: Edge Computing Silicon Company Closes $11.5 Million In Funding",
    headingTag: "h3",
    date: "28/10/2024",
    image: "/images/Picture4.jpg",
    href: "https://finance.yahoo.com/news/azimuth-ai-edge-computing-silicon-234600901.html",
  },
];

export const PARTNER_LOGOS = [
  { src: "/images/Cadence_Logo.png", alt: "Cadence" },
  { src: "/images/logo.png", alt: "Partner logo" },
  { src: "/images/arm-logo-white-rgb.png", alt: "Arm" },
  {
    src: "/images/UCSDLogo-ComputingInformationandDataSciences-BlueGold.png",
    alt: "UC San Diego Computing, Information and Data Sciences",
  },
  { src: "/images/synopsys-logo-color-rgb.png", alt: "Synopsys" },
  { src: "/images/Cyient-Logo.png", alt: "Cyient" },
];

export const INVESTOR_LOGOS = [
  { src: "/images/logo-header.png", alt: "Investor logo" },
  { src: "/images/unnamed-removebg-preview.png", alt: "Investor logo" },
  { src: "/images/growthfactory-logo-e1672368356116.png", alt: "Growth Factory" },
  { src: "/images/1643355739076.jpg", alt: "Investor logo" },
  { src: "/images/Cyient-Logo.png", alt: "Cyient" },
];
