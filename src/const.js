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
    name: "TypeScript",
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
    name: "Github User Search",
    tech: ["JavaScript", "ReactJS", "TailwindCSS"],
    description:
      "Github User Search app is one of the projects I have chosen to build to showcase my Frontend skill and the ability to integrate external APIs into my applications using libraries like ReactJS and TailwindCSS.",
    state: "completed",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/github-user-search.git",
    repoName: "github-user-search",
    img: require("./assets/icons/skills/github.png"),
    link: "https://khalifah-github-user-search.netlify.app",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Interactive Form Card",
    tech: ["JavaScript", "ReactJS", "TailwindCSS"],
    description:
      "The App isn't just any project; it's a practical showcase of my expertise in ReactJs.",
    state: "completed",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/interactive-form-card.git",
    repoName: "interactive-form-card",
    img: require("./assets/icons/skills/github.png"),
    link: "https://alkhalifah-interactive-form-card.netlify.app",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Connectify",
    tech: ["JavaScript", "Redux", "GraphQL", "ReactJS", "MUI", "TailwindCSS"],
    description:
      "Connectify is a testament to my dedication to mastering the intricacies of modern web development. It reflects my proficiency in JavaScript, Redux, GraphQL, and UI frameworks like Material-UI and Tailwind CSS, all harmonized to build an application that seamlessly merges functionality and aesthetics.",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/connectify",
    repoName: "connectify-frontend",
    img: require("./assets/projects/connectify.jpg"),
    link: "https://connectify-backend-7ks8.onrender.com",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Connectify",
    tech: ["NodeJS", "Express", "GraphQL", "MongoDB"],
    description:
      "The Connectify Backend represents my commitment to creating a cohesive and comprehensive web application. Leveraging GraphQL, I've optimized data retrieval and ensured efficient interactions between the frontend and backend. This project demonstrates my mastery of backend technologies, particularly Node.js and Express, for building scalable and performant server-side systems.",
    state: "in-development",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/connectify-backend",
    repoName: "connectify",
    img: require("./assets/projects/connectify-backend.jpg"),
    link: "https://connectify-backend-7ks8.onrender.com",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Stock Keeper",
    tech: ["TypeScript", "Redux", "React", "MUI"],
    description:
      "The Stock Keeper App isn't just a project; it's a practical showcase of my expertise in TypeScript, a superset of JavaScript that enhances code quality and maintainability. This app serves as a robust tool for businesses to efficiently monitor sales, purchases, and available stocks in real time. Seamlessly integrating Redux with React ensures responsive and synchronized state management.",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/stock-keeper",
    repoName: "stock-keeper",
    img: require("./assets/projects/stock.jpg"),
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Utiva Blog",
    tech: [
      "JavaScript",
      "Redux",
      "React Router",
      "Express",
      "TailwindCSS",
      "REST",
      "MongoDB",
      "NodeJS",
    ],
    description: `The creation of the Personal Blog showcases my mastery of various technologies, from frontend to backend. The strategic use of Redux and React Router enhances user interaction, providing a smooth browsing experience. Express, along with NodeJS, demonstrates my backend capabilities, delivering data efficiently through REST APIs. 
    By employing MongoDB, I've showcased my skill in database management, allowing seamless content storage and retrieval. The blog's sleek design, crafted with TailwindCSS, highlights my attention to detail and aesthetic sensibilities.`,
    state: "in-development",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/blog-utiva",
    repoName: "blog-utiva",
    img: require("./assets/projects/blog.jpg"),
    link: "https://al-khalifah-writes.netlify.app/",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "All News",
    tech: ["JavaScript", "Redux", "React", "MUI"],
    description:
      "AllNews showcases my proficiency in data integration and visualization through the use of APIs. By tapping into external news sources, I've demonstrated my skills in handling asynchronous data fetching and rendering it in a user-friendly format. The project also highlights my mastery of state management through Redux, ensuring efficient data flow and seamless user interactions",
    state: "in-development",
    category: "Frontend",
    repoLink: "https://github.com/Abi0l9/All-News",
    repoName: "All-News",
    img: require("./assets/projects/news.jpg"),
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "Todo List API",
    tech: ["NodeJS", "Express", "REST", "MongoDB"],
    description:
      "This project showcases my expertise in building scalable and well-structured backend solutions. By utilizing Node.js and Express, I've created an API that efficiently handles CRUD operations, allowing users to manage their tasks with ease. The integration of MongoDB ensures reliable data storage and retrieval, enhancing the overall user experience.",
    state: "completed",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/Todo-List-Api",
    repoName: "Todo-List-Api",
    img: require("./assets/projects/todo.jpg"),
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "User Authentication API",
    tech: ["NodeJS", "Express", "REST", "MongoDB"],
    description:
      "This project highlights my proficiency in building authentication systems that prioritize user data security. By utilizing Node.js and Express, I've crafted an API that implements industry-standard authentication practices, including password hashing and token-based authorization. MongoDB integration ensures seamless user data management and retrieval.",
    state: "completed",
    category: "Backend",
    repoLink: "https://github.com/Abi0l9/User-Auth-Api",
    repoName: "User-Auth-Api",
    img: require("./assets/projects/auth.jpg"),
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "EduBank",
    tech: ["Flask", "Python", "HTML", "JavaScript", "Python", "CSS"],
    description:
      "Edubank underscores my ability to harness the power of technology to solve complex challenges. With Flask as the foundation, I've constructed a robust backend that seamlessly integrates with frontend components developed using HTML, JavaScript, and CSS. This integration results in a user-friendly interface that empowers schools to efficiently manage pupil registrations and financial transactions.",
    state: "completed",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/EduBank",
    repoName: "EduBank",
    img: "https://images.unsplash.com/photo-1553801613-9b225d58f429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    link: "http://abi0l9.pythonanywhere.com",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
  {
    name: "My Coffee Shop",
    tech: [
      "TypeScript",
      "JavaScript",
      "Flask",
      "Python",
      "HTML",
      "Python",
      "CSS",
    ],
    description:
      "My Coffee Shop is a dynamic illustration of my commitment to providing comprehensive solutions that prioritize user security and efficient management. The utilization of TypeScript and JavaScript ensures a seamless frontend experience, while the backend, powered by Python, handles intricate RBAC rules and OAuth protocols.",
    state: "completed",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/My-Coffee-Shop",
    repoName: "My-Coffee-Shop",
    img: "https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },

  {
    name: "Fyyur",
    tech: ["JavaScript", "Flask", "Python", "HTML", "Python", "CSS"],
    description:
      "Fyyur represents more than just a coding endeavor; it mirrors my innovative approach to web development. Leveraging JavaScript, Flask, Python, HTML, and CSS, this artistic booking website stands as a prime example of my ability to harmonize diverse technologies into compelling and practical platforms.",
    state: "completed",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/fyyur---Oyedeji-Monsur",
    repoName: "fyyur---Oyedeji-Monsur",
    img: "https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },

  {
    name: "The Fantastic Trivia Game",
    tech: ["JavaScript", "Flask", "Python", "HTML", "Python", "CSS"],
    description:
      "By weaving Python into the backend architecture through Flask, I've enabled intricate data processing and smooth user interactions. JavaScript's dynamic capabilities elevate the frontend, ensuring users experience a seamless and intuitive journey through the game. This project is a clear testament to my ability to mold diverse technologies into a cohesive whole that's not only functional but also captivating.",
    state: "completed",
    category: "Fullstack",
    repoLink: "https://github.com/Abi0l9/The-Fantastic-Trivia-Game-Of-Udacity",
    repoName: "The-Fantastic-Trivia-Game-Of-Udacity",
    img: "https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
    link: "",
    latestCommit: "",
    commitDate: "",
    commits() {
      getRepoDetails(this.repoName).then((data) => {
        this.latestCommit = data?.commit?.message;
        this.commitDate = data?.commit?.author?.date;
      });
    },
  },
];
