/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Vidyakeerthi",
  logo_name: "Vidya keerthi",
  nickname: "keerthi",
  full_name: "Vidyakeerthi SU",
  subTitle: "Full stack Developer",
  // resumeLink:
  //   "https://drive.google.com/file/d/1ThjCisD-FnEPQcYAYU2XBsulYWcyCGF2/view?usp=drivesdk",
  mail: "mailto:keerthividya321@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Keerthividya",
  linkedin: "https://www.linkedin.com/in/vidya-keerthi/",
  gmail: "keerthividya321@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        // "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in C# & .NET",
        // "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "GitHub Actions",
    //       fontAwesomeClassname: "simple-icons:githubactions",
    //       style: {
    //         color: "#5b77ef",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kongu Engineering College",
      // subtitle: "BE",
      logo_path: "kec.png",
      alt_name: "KEC",
      duration: "2019 - 2023",
      descriptions: ["BE in Computer Science and Engineering; CGPA: 8.72"],
      website_link: "https://kongu.ac.in/",
    },
    // {
    //   title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
    //   subtitle: "Diploma in Information Technology",
    //   logo_path: "ssgandhy.png",
    //   alt_name: "SSGC",
    //   duration: "2018 - 2021",
    //   descriptions: [
    //     "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
    //     "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
    //     "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
    //     "⚡ I have secured 9.82 CGPA.",
    //   ],
    //   website_link: "http://www.ssgc.cteguj.in/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Front End Developer (React)",
      subtitle: "HackerRank",
      logo_path: "react.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/a22e6560940b",
      alt_name: "HackerRank",
      // color_code: "#2AAFED",
      color_code: "#52c2df",
    },
    {
      title: "SQL (Basic)",
      subtitle: "HackerRank",
      logo_path: "sql.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/ccbe3f864138",
      alt_name: "HackerRank",
      color_code: "white",
    },
    {
      title: "Introduction to Git",
      subtitle: "Microsoft",
      logo_path: "git.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/vidyakeerthisu-9294/achievements/nzuzu78f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      alt_name: "Microsoft",
      // color_code: "#F6B808",
      color_code: "black",
    },

    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Full stack Developer, I have worked with real projects for over two years. I've mostly done projects on my own.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "Dilligen Technologies Private Limited.",
          company_url: "https://dilligentech.com/",
          logo_path: "dt_logo.jpg",
          duration: "Oct 2023 - Present",
          location: "Bangalore (Remote)",
          description: `Spearheaded the end-to-end development of three major projects: Payment Router Checkout,
Portal, and Merchant Demo Store, leading a front-end team from inception to successful delivery:
◦ Secure payment routing system in React.js from scratch that supports 10+ payment methods including
Credit/Debit cards, Digital wallets, QRIS, Pay Later and Bank transfers.
◦ Responsive portal supporting live and test environments with API Integrations for real-time 200+ payment
processor configuration with rules, Transactions tracking and checkout configuration.
◦ Integrated Keycloak for authentication.
◦ Merchant demo store to enhance product visibility and streamline the checkout process.
◦ Review code for best practices, maintainability, and performance.
◦ Integrated Google Pay
◦ Established communication between checkout and the portal for dynamic white-labeling customization.
◦ Technologies: React Js, Redux, JavaScript.`,
          color: "#0071C5",
        },
        // {
        //   title: "Node.js Backend Developer",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Dec 2022",
        //   location: "Surat, Gujarat",
        //   description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
        //   Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Node.js Backend Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Surat, Gujarat",
        //   description: `Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        {
          title: "Full Stack Developer Intern",
          company: "DeltaX",
          company_url: "https://deltax.com/",
          logo_path: "deltax_logo.jpg",
          duration: "Jan 2023 - Jul 2023",
          location: "Bangalore (Remote)",
          description: `Developed an IMDB-like app using Vue.js, C# and .NET Core:
∗ Developed UI with Vue.js, Vuex, Vuetify, HTML, CSS, Bootstrap, JavaScript, jQuery, driving a 75% increase
in user satisfaction
∗ Integrated Web APIs and SQL Server for data management and complex queries.`,
          color: "#47A048",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "Oct 2023 - Present",
          location: "Work From Home",
          description: `Maintain close contact with the client and team when handling change requests.
          LAMP Stack was mostly utilised. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React.js, Vue.js, SQL Server, C# and .NET Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "IMDB Clone",
      url: "https://github.com/Keerthividya/Imdb-web-app-frontend",
      description:
        "A dynamic Single Page Application designed for effortless movie exploration and in-depth information retrieval. This project seamlessly integrates various technologies to create a responsive and user-friendly experience.",
      languages: [
        {
          name: "Vue.js",
          iconifyClass: "logos-vue",
        },
        {
          name: "C#",
          iconifyClass: "devicon-csharp",
        },
        {
          name: ".NET",
          iconifyClass: "devicon-dot-net-plain",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Imdb-web-app-frontend",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Rhythm",
      url: "https://github.com/Keerthividya/Rhythm-Music-App",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Vue.js",
          iconifyClass: "logos-vue",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Rhythm-Music-App",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Online Courses Platform",
      url: "https://github.com/Keerthividya/Online-Courses-Platform",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "Vue.js",
          iconifyClass: "logos-vue",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Online-Courses-Platform",
          iconifyClass: "ri:github-fill",
        },
        // {
        //   name: "Live Demo",
        //   url: "",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "3",
      name: "Vinayaga-Stores",
      url: "https://github.com/Keerthividya/Vinayaga-Stores",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Vinayaga-Stores",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "AICTE Website Redesign",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "Redesigned the AICTE website for the Smart India Hackathon 2022, focusing on improving attractiveness and user-friendliness.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/aicte",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "Alpha",
      url: "https://keerthividya.github.io/Alpha/",
      description:
        "Alpha House provides a responsive user interface for creating personalized homes that reflect client visions and capture the essence of their dreams, built with HTML and CSS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Alpha",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://keerthividya.github.io/Alpha/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "6",
      name: "Intellect",
      url: "",
      description:
        "College Project: Responsive web app using HTML, CSS, Bootstrap and JavaScript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Keerthividya/Intellect",
          iconifyClass: "ri:github-fill",
        },
      ],
    },

    {
      id: "13",
      name: "Portfolio",
      url: "",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "",
          iconifyClass: "mdi:web",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
