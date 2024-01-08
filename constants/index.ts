import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "mySql",
    Image: "/mySql.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
    {
        name: "Github",
        src: "/github.svg",
        link: "https://github.com/yadav8ravikrishna",
      },
  {
    name: "Discord",
    src: "/discord.svg",
    link: " https://discord.com/users/chilliesflake",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=100040539372934",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/iamraw_v/",

  },
  {
    name: "linkedin",
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/ravi-kumar-yadav-404a63212/",

  },
];
export const Projects = [
  {
    title: "Path Finding",
    text: "It is springboot project that finds optimal route using dijkstra and greedy algorithm and does the comparision between them. made using java, mySql",
    src: "/optimalpath.png",
  },
  {
    title: "Phone Book",
    text: "Is a web application that keeps record of the contact numbers, here you can perform the CRUD operations. On backend its expres, mongodb and frontend is react/nextjs ",
    src: "/phonebook.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "It is a my portfolio website made using nextjs,tailwindcss,typescript.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Todo React App",
    text: "It is a todo app made using react. here you can list your todos , mark them as completed and delete them",
    src: "/todo.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];