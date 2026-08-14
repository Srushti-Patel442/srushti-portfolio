import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Srushti Patel",
  initials: "SP",
  url: "https://github.com/Srushti-Patel442",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Computer Engineering Student | Software Lead @ TMU WAVE | Embedded Systems & Robotics",
  summary:
    "Computer Engineering student at Toronto Metropolitan University with experience in software development, embedded systems, robotics, and computer vision. Currently serving as Software Lead for TMU WAVE's autonomous underwater vehicle team, leading a 5-member software team and developing simulation and autonomy systems using ArduPilot, MAVLink, and Python. Interested in autonomous systems, robotics, and full-stack software engineering.",
  avatarUrl: "/headshot.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "C/C++", icon: Csharp },

    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },

    { name: "Docker", icon: Docker },

    { name: "OpenCV" },
    { name: "Computer Vision" },
    { name: "Machine Learning" },

    { name: "ArduPilot" },
    { name: "MAVLink"},

    { name: "VHDL"},
    { name: "FPGA" },

    { name: "Git", icon: Icons.github },

    { name: "ROS2" },
    { name: "Raspberry Pi"},
    { name: "QGroundControl" },
    { name: "PyMAVLink" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
contact: {
  email: "srushti.patel@torontomu.ca",
  tel: "+14379945436",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Srushti-Patel442",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/srushti-patel1",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:srushti.patel@torontomu.ca",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TMU WAVE",
      href: "https://www.torontomu.ca",
      badges: [],
      location: "Toronto, ON",
      title: "Software Lead",
      logoUrl: "/wave.png",
      start: "Jan 2026",
      end: "Present",
      description:
   "Lead a 5-member software team developing autonomy and simulation software for an autonomous underwater vehicle. Build Python-based control systems using ArduPilot and MAVLink while integrating telemetry, computer vision, and mission-planning capabilities.",
    },

    {
      company: "Pestisect Pest Control",
      href: "#",
      badges: [],
      location: "Brampton, ON",
      title: "Customer Service Representative",
      logoUrl: "/pestisect.png",
      start: "May 2025",
      end: "Present",
      description:
        "Manage customer communications, scheduling, invoicing, and route optimization across 25+ cities. Coordinate weekly technician meetings and maintain 100% client response rates.",
    },

    {
      company: "Best Buddies",
      href: "#",
      badges: [],
      location: "Brampton, ON",
      title: "Mentor",
      logoUrl: "/bestbuddies.png",
      start: "Sep 2021",
      end: "Jun 2024",
      description:
        "Mentored 20+ students with intellectual disabilities through weekly activities and academic support.",
    },
  ],
  education: [
      {
        school: "Toronto Metropolitan University",
        href: "https://www.torontomu.ca",
        degree: "Bachelor of Engineering - Computer Engineering",
        logoUrl: "/tmu.png",
        start: "2024",
        end: "2029",
      },
    ],
    projects: [
      {
    title: "TMU Wave AUV Operations",
    href: "https://github.com/TMUWave-Operations/WAUV-Ops",
    dates: "2026 - Present",
    active: true,
    description:
      "Currently managing and developing the software side of TMU Wave's autonomous underwater vehicle platform for RoboSub 2027. Developing simulation, telemetry, control, and computer vision infrastructure using ArduPilot, MAVLink, Docker, QGroundControl, and Python.",
    technologies: [
      "Python",
      "Docker",
      "OpenCV",
      "MAVLink",
      "ArduPilot",
      "QGroundControl",
      "Raspberry Pi",
      "Pixhawk"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/TMUWave-Operations/WAUV-Ops",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/wave.png",
    video: "",
  },
    {
      title: "Satellite Tracker",
      href: "https://github.com/Srushti-Patel442/satellite-tracker",
      dates: "2026",
      active: true,
      description:
        "Built a real-time 3D satellite tracking platform using React Three Fiber, Three.js, and live orbital data from the N2YO API. Visualizes satellite positions, telemetry, ground stations, and orbital data through an interactive Earth model.",
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "Node.js",
        "Satellite.js",
        "N2YO API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Srushti-Patel442/satellite-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/satellite.png",
      video: "",
    },

    {
      title: "ASL AI Assistant",
      href: "https://github.com/Srushti-Patel442/ASL-AI-Assistant",
      dates: "2026",
      active: true,
      description:
        "Developed an AI-powered American Sign Language assistant that uses computer vision and machine learning to recognize hand gestures and translate them into text in real time. Built to improve accessibility and communication for ASL users.",
      technologies: [
        "Python",
        "OpenCV",
        "Machine Learning",
        "Computer Vision",
      ],
      links: [],
      image: "",
      video: "",
    },

    {
      title: "VHDL Processor Design",
      href: "https://github.com/Srushti-Patel442/General-Purpose-Processor-VHDL",
      dates: "2025",
      active: false,
      description:
        "Designed and implemented a custom processor in VHDL featuring an ALU, finite state machine, registers, decoder, and seven-segment display output.",
      technologies: [
        "VHDL",
        "Quartus Prime",
        "FPGA",
      ],
      links: [],
      image: "/vhdl.png",
      video: "",
    },
    ],
    hackathons: [],
} as const;