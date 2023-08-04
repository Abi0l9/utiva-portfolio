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
    name: "Connectify",
    tech: ["Javascript", "Redux", "GraphQL", "ReactJS", "MUI", "TailwindCSS"],
    description: "This project was built few days ago",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/connectify",
    repoName: "connectify-frontend",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("connectify-frontend").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Connectify",
    tech: ["NodeJS", "Express", "GraphQL", "MongoDB"],
    description: "This project was built few days ago",
    state: "in-development",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/connectify-backend",
    repoName: "connectify",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("connectify").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Stock Keeper",
    tech: ["Typescript", "Redux", "React", "MUI"],
    description: "This project was built few days ago",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/stock-keeper",
    repoName: "stock-keeper",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("stock-keeper").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Utiva Blog",
    tech: [
      "Javascript",
      "Redux",
      "React Router",
      "Express",
      "TailwindCSS",
      "REST",
      "MongoDB",
      "NodeJS",
    ],
    description: "This project was built few days ago",
    state: "in-development",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/blog-utiva",
    repoName: "blog-utiva",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("blog-utiva").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "All News",
    tech: ["Javascript", "Redux", "React", "MUI"],
    description: "This project was built few days ago",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/All-News",
    repoName: "All-News",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("All-News").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Todo List API",
    tech: ["NodeJS", "Express", "REST", "MongoDB"],
    description: "This project was built few days ago",
    state: "completed",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/Todo-List-Api",
    repoName: "Todo-List-Api",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("Todo-List-Api").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "User Authentication API",
    tech: ["NodeJS", "Express", "REST", "MongoDB"],
    description: "This project was built few days ago",
    state: "completed",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/User-Auth-Api",
    repoName: "User-Auth-Api",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails("User-Auth-Api").then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
];
