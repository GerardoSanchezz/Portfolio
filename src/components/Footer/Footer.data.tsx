import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

export const footerData = [
  {
    id: 1,
    title: "Work Contact",
    links: [
      {
        id: 1,
        name: "Github",
        link: "https://github.com/GerardoSanchezz",
      },
      {
        id: 2,
        name: "Linkedin",
        link: "#",
      },
      {
        id: 3,
        name: "Email",
        link: "mailto:gerardosanchezz14@hotmail.com",
      },
    ],
  },
  {
    id: 2,
    title: "Social Networks",
    links: [
      {
        id: 1,
        name: "Facebook",
        link: "https://www.facebook.com/gerardoulises.sanchezfelix/",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/gerasanchez_14/",
      },
      {
        id: 3,
        name: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone=+526681253486&text=Hola%20Gerardo,%20te%20contacto%20desde%20tu%20portafolio%20web.",
      },
    ],
  },
  {
    id: 3,
    title: "University",
    links: [
      {
        id: 1,
        name: "Tec de Monterrey",
        link: "https://tec.mx/es",
      },
    ],
  },
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/gerasanchez_14/",
  },
  {
    id: 2,
    icon: <RiFacebookCircleFill />,
    link: "https://www.facebook.com/gerardoulises.sanchezfelix/",
  },
  {
    id: 3,
    icon: <RiLinkedinBoxFill />,
    link: "#",
  },
  {
    id: 3,
    icon: <RiGithubFill />,
    link: "https://github.com/GerardoSanchezz",
  },
];
