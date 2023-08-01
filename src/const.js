import { getRepoDetails } from "./services/git";

export const mySkills = [
  {
    name: "HTML",
    power: 5,
    imgSrc: require("./assets/icons/skills/html.png"),
  },
  {
    name: "CSS",
    power: 5,
    imgSrc: require("./assets/icons/skills/css.png"),
  },

  {
    name: "NodeJS",
    power: 5,
    imgSrc: require("./assets/icons/skills/node.png"),
  },
  {
    name: "ExpressJS",
    power: 5,
    imgSrc: require("./assets/icons/skills/express.png"),
  },
  {
    name: "ReactJS",
    power: 5,
    imgSrc: require("./assets/icons/skills/reactjs.png"),
  },
  {
    name: "VueJS",
    power: 0,
    imgSrc: require("./assets/icons/skills/vue.png"),
  },
  {
    name: "Typescript",
    power: 5,
    imgSrc: require("./assets/icons/skills/typescript.png"),
  },
  {
    name: "MongoDB",
    power: 5,
    imgSrc: require("./assets/icons/skills/mongoose.png"),
  },
  {
    name: "REST API",
    power: 5,
    imgSrc: require("./assets/icons/skills/rest-api.png"),
  },
  {
    name: "GraphQL",
    power: 0,
    imgSrc: require("./assets/icons/skills/graphql.png"),
  },
  {
    name: "PostgreSQL",
    power: 5,
    imgSrc: require("./assets/icons/skills/postgres.png"),
  },
  {
    name: "MySQL",
    power: 5,
    imgSrc: require("./assets/icons/skills/mysql.png"),
  },
  {
    name: "Redux",
    power: 5,
    imgSrc: require("./assets/icons/skills/redux.png"),
  },
  {
    name: "Flask",
    power: 0,
    imgSrc: require("./assets/icons/skills/flask.png"),
  },
  {
    name: "Django",
    power: 0,
    imgSrc: require("./assets/icons/skills/django.png"),
  },
  {
    name: "TailwindCSS",
    power: 4,
    imgSrc: require("./assets/icons/skills/tailwind.png"),
  },
  {
    name: "MUI",
    power: 0,
    imgSrc: require("./assets/icons/skills/mui.png"),
  },
  {
    name: "Bootstrap",
    power: 5,
    imgSrc: require("./assets/icons/skills/bootstrap.png"),
  },
  {
    name: "Git",
    power: 5,
    imgSrc: require("./assets/icons/skills/git.png"),
  },
  {
    name: "CI/CD",
    power: 0,
    imgSrc: require("./assets/icons/skills/ci-cd.png"),
  },
];

export const worksList = [
  {
    name: "Connectify - Frontend",
    tech: ["Javascript", "Redux", "GraphQL", "ReactJS", "MUI", "TailwindCSS"],
    description: "This project was built few days ago",
    state: "in-development",
    repoLink: "https://github.com/Abi0l9/connectify",
    link: "",
    commits() {
      getRepoDetails("connectify-frontend");
    },
  },
  {
    name: "Connectify - Backend",
    tech: ["Javascript", "Express", "GraphQL"],
    description: "This project was built few days ago",
    state: "in-development",
    repoLink: "https://github.com/Abi0l9/connectify-backend",
    link: "",
    commits() {
      getRepoDetails("connectify");
    },
  },
  {
    name: "Stock Keeper",
    tech: ["Typescript", "Redux", "REST", "MongoDB"],
    description: "This project was built few days ago",
    state: "in-development",
    repoLink: "https://github.com/Abi0l9/stock-keeper",
    link: "",
    commits() {
      getRepoDetails("stock-keeper");
    },
  },
];
