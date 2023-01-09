import { FormattedMessage } from "react-intl";

export const bdPortfolio = [
  {
    id: 1,
    title: <FormattedMessage id="wonderghost" defaultMessage="PortDB" />,
    subtitle: <FormattedMessage id="wonderghostSub" defaultMessage="PortDB" />,
    tech: "HTML | CSS | JavaScript",
    github: "https://github.com/leandropereyradev/WonderGhost",
    image: "/images/wonderghost-min.webp",
  },
  {
    id: 2,
    title: <FormattedMessage id="peces" defaultMessage="PortDB" />,
    subtitle: <FormattedMessage id="pecesSub" defaultMessage="PortDB" />,
    tech: "Next.JS | MondoDB | Tailwind",
    web: "https://peces.vercel.app/",
    github: "https://github.com/leandropereyradev/peces-next-mongo",
    image: "/images/peces-min.webp",
  },
  {
    id: 3,
    title: "Leandro Pereyra",
    subtitle: <FormattedMessage id="leandro" defaultMessage="PortDB" />,
    tech: "Next.JS | Framer Motion | CSS",
    github: "https://github.com/leandropereyradev/nextjs-personal-web",
    image: "/images/leandropereyra-min.webp",
  },
  {
    id: 4,
    title: <FormattedMessage id="todo" defaultMessage="PortDB" />,
    subtitle: "ToDo App Web",
    tech: "React.JS | TailWind | JavaScript",
    web: "https://todolist.leandropereyra.com/",
    github: "https://github.com/leandropereyradev/todo-list-CRUD",
    image: "/images/listatareas-min.webp",
  },
  {
    id: 5,
    title: "Weather App",
    subtitle: <FormattedMessage id="weather" defaultMessage="PortDB" />,
    tech: "React.JS | TailWind | JavaScript",
    web: "https://weatherapp.leandropereyra.com/",
    github: "https://github.com/leandropereyradev/weather-app",
    image: "/images/weather-min.webp",
  },
];
