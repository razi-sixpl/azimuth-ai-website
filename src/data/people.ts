export type Person = {
  name: string;
  /** Rendered as the heading inside the card. */
  headingTag?: "h2" | "h3";
  role: string[];
  image: string;
  alt?: string;
  linkedin: string;
};

export const LEADERSHIP: Person[] = [
  {
    name: "Praveen Yasarapu",
    role: ["Founder and CEO"],
    image: "/images/1.png",
    linkedin: "https://www.linkedin.com/in/praveen-y-051b824/",
  },
  {
    name: "Sridevi Badiga",
    role: ["Founder and CGO"],
    image: "/images/1000088598.jpg",
    linkedin: "https://www.linkedin.com/in/sridevi-badiga-bb7420/",
  },
  {
    name: "Sylvia Downing",
    role: ["Chief Technology Officer (CTO)"],
    image: "/images/sylviaprofile-1.jpg",
    linkedin: "https://www.linkedin.com/in/sylviadowning/",
  },
  {
    name: "Raghu Chavali",
    role: ["VP of Hardware Engineering"],
    image: "/images/Untitled-design.jpg",
    linkedin: "https://www.linkedin.com/in/raghu-chavali-99a66513/",
  },
  {
    name: "Subash Sudireddy",
    role: ["VP of Software Engineering,", "Head of India Design Center"],
    image: "/images/Untitled-design-2-Photoroom-1.png",
    linkedin: "https://www.linkedin.com/in/subash-sudireddy-42633b12/",
  },
  {
    name: "Meay Parnaso",
    role: ["Chief of Staff"],
    image: "/images/1785181090487.png",
    alt: "Meay Parnaso",
    linkedin: "https://www.linkedin.com/in/meay-parnaso-03b1b392/",
  },
];

export const ADVISORS: Person[] = [
  {
    name: "Jim Thomson",
    role: ["Retired Vice Chair & Principal,", "Deloitte Consulting LLP"],
    image: "/images/Jim-Thomson.jpg",
    alt: "Jim Thomson",
    linkedin: "https://www.linkedin.com/in/jim-thomson-77796b5/",
  },
  {
    name: "Dr. KEITH M TORPY",
    headingTag: "h3",
    role: [
      "Former Global Head of Devices,",
      "Global Head of Technology Innovation, Landis+Gyr",
    ],
    image: "/images/Dr.-Keith-M-Torphy.jpg",
    alt: "Dr. Keith M Torphy",
    linkedin: "https://www.linkedin.com/in/dr-keith-mario-torpy-abab6314/",
  },
];

export const BOARD: Person[] = [
  {
    name: "Krishna Bodanapu",
    role: ["Executive Vice Chairman & Managing Director,", "Cyient."],
    image: "/images/Krishna-Bodanapu.jpg",
    alt: "Krishna Bodanapu",
    linkedin: "https://www.linkedin.com/in/krishnabodanapu/",
  },
  {
    name: "Ramya Mohan",
    role: [
      "Chief Financial Officer (CFO) and Head of Corporate Development,",
      "Cyient Semiconductors",
    ],
    image: "/images/Ramya-Mohan.jpg",
    alt: "Ramya Mohan",
    linkedin: "https://www.linkedin.com/in/ramya-mohan19/",
  },
  {
    name: "Ashu Bhalla",
    role: ["Partner,", "Moneta Ventures"],
    image: "/images/Ashu-Bhalla.jpg",
    alt: "Ashu Bhalla",
    linkedin: "https://www.linkedin.com/in/ashu-bhalla-b44bb73/",
  },
  {
    name: "Sridevi Badiga",
    role: ["Board Member,", "Founder and CGO Azimuth AI"],
    image: "/images/1000088598.jpg",
    linkedin: "https://www.linkedin.com/in/sridevi-badiga-bb7420/",
  },
  {
    name: "Praveen Yasarapu",
    role: ["Founder and CEO"],
    image: "/images/1.png",
    linkedin: "https://www.linkedin.com/in/praveen-y-051b824/",
  },
];
