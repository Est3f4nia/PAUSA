import { CardData } from "@/types/Card";
import firstStepsPort from "@/assets/courses/firstStepsPort.jpg";
import socialMedia from "@/assets/courses/socialMedia.jpg";
import daily from "@/assets/courses/daily.jpg";

export const cards: CardData[] = [
  {
    image: firstStepsPort,
    title: "First Steps",
    description: "Your journey into the digital world begins here. Follow the path.",
    buttonText: "Start",
    link:"/firstSteps/course-info"
  },
  {
    image: socialMedia,
    title: "Social Media",
    description: "Your journey into the digital world begins here. Follow the path.",
    buttonText: "Start",
    link:"/firstSteps/course-info"
  },
  {
    image: daily,
    title: "Daily Life Operations",
    description: "Your journey into the digital world begins here. Follow the path.",
    buttonText: "Start",
    link:"/firstSteps/course-info"
  },
];