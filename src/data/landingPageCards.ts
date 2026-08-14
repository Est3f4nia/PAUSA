import { CardData } from "@/types/Card";
import roleSt from "@/assets/landing_page/roleSt.jpg";
import roleF from "@/assets/landing_page/roleF.jpg";
import rolePr from "@/assets/landing_page/rolePr.png";

export const cards: CardData[] = [
  {
    image: roleSt,
    title: "Learn",
    description: "Pick a display name and a 4-digit PIN. No personal data required. Start learning immediately.",
    buttonText: "Start",
    link: "/courses"
  },
  {
    image: roleF,
    title: "Family Members",
    description: "See your relative's progress, modules completed, confidence growing over time.",
    buttonText: "Start",
    link: "/login"
  },
  {
    image: rolePr,
    title: "Educator",
    description: "Generate a session code, project it for your group. Gain access to real time statistics.",
    buttonText: "Start",
    link: "/courses"
  },
];