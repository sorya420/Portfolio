// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import BootstrapLogo from './assets/tech_logo/bootstrap.png';

// Experience Section Logo's
{/* Experience Section Logo's 
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
*/}

// Education Section Logo's
import AKU from './assets/education_logo/AKU_Bihar_logo.png';
import vvit from './assets/education_logo/vvit_logo.png';
import cbse from './assets/education_logo/cbse_logo.png';
import bseb from './assets/education_logo/bseb_logo.png';


// Project Section Logo's

  import melodymatch from './assets/work_logo/melodymatch.png';
  import spotifyclone from './assets/work_logo/spotifyclone.png';
  import froverShop from './assets/work_logo/froverShop.png';
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
//import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     // { name: 'Angular', logo: angularLogo },
     // { name: 'Redux', logo: reduxLogo },
     // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     // { name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: BootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     // { name: 'Firebase', logo: firebaseLogo },
     // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
     // { name: 'Python', logo: pythonLogo },
     //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
     // { name: 'Postman', logo: postmanLogo },
     // { name: 'Compass', logo: mcLogo },
     // { name: 'Vercel', logo: vercelLogo },
     // { name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: reactjsLogo,
      role: "Fullstack Developer",
      company: "",
      date: "",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Git",
        "GitHub",
        "Tailwind CSS",
        "MongoDb",
        
      ],
    },
    {
      id: 1,
      img: javaLogo,
      role: "",
      company: "",
      date: "",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as Java, MongoDb, PHP, SQL, Bootstrap, Servlet and RestAPIs. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "Java",
        "MongoDB",
        "REST APIs",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];
  

  
  export const education = [
    // {
    //   id: 0,
    //   img: AKU,
    //   school: "Aryabhatta Knowledge University, Patna",
    //   date: "Sept 2022 - Aug 2025",
    //   grade: "8.41 CGPA",
    //   desc: "I have completed my Bachelore's degree (BCA) , from Aryabhatta Knowledge University, Patna.  in the  college of VVIT(Purnia). During my studies, I gained a solid foundation in computer applications, including programming languages, software development, and database management. The curriculum provided me with practical skills and theoretical knowledge that are essential for a career in the tech industry.",
    //   degree: "Bachelore's of Computer Applications - BCA",
    // },
    {
      id: 1,
      img: vvit,
      school: "vidya vihar institute of technology, Punia (Bihar)",
      date: "Sept 2022 - Aug 2025",
      grade: "8.41 CGPA",
      desc: "I completed my Bachelor's degree in Computer Application Programme (BCA.) from VVIT College, Purnia(bihar) My home town. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at VVIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelore's of Computer Applications - BCA",
    },
    {
      id: 2,
      img: bseb,
      school: "RKK College (Purnia, Bihar)",
      date: "Apr 2020 - Feb 2022",
      grade: "65%",
      desc: "I completed my class 12th education from RKK College, Purnia, under the BSEB board, where I studied Science.",
      degree: "BSEB(XII)-PHysics, Chemistry, Maths, English, Hindi",
    },
    {
      id: 3,
      img: cbse,
      school: "Indian Public School Purnia (Bihar)",
      date: "Apr 2019 - March 2020",
      grade: "60.2%",
      desc: "I completed my class 10th education from Indian Public School Gulabbagh, Purnia, under the CBSE board, where I studied Multiple Subjects Applied By Boards.",
      degree: "CBSE(X) - English, Sanskrit, Maths, Science, Social Science",
    },
  ];
  

  
  export const projects = [
    {
      id: 0,
      title: "Melodymatch",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase the outstanding experience for music lovers where users can login by their Emial and make friends on their music intrest and chat with them in personal and join music room to intract with multiple music lovers at a same time and listening same music based on their intrest.",
      image: melodymatch,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/sorya420/MelodyMatch",
      webapp: "https://melody-match-3wi6.onrender.com/",
    },
    {
      id: 1,
      title: "Personal music player",
      description:
        "A full-fledge music application. spotify clone where user login with there mobile number and email id and listening music for all day also set a premium feature for listening high-quality music",
      image: spotifyclone,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sorya420/personalmusicplayer",
      webapp: "",
    },
     {
      id: 2,
      title: "ForeverShop - A Ecommerce-App",
      description:
        "A full-featured E-commerce application designed to provide a seamless online shopping experience. The app allows users to browse products, add items to the cart, place orders, and make payments securely. It focuses on intuitive UI/UX, performance, and responsive design for a smooth shopping journey.",
      image: froverShop.png,
      tags: ["HTML", "CSS", "JavaScript", "React JS" ,"Vite","ExpressJs","MongoDb","Cloudinary", "API"],
      github: "https://github.com/sorya420/Ecommerce-App",
      webapp: "https://ecommerce-frontendd-three.vercel.app/",
    },
  ];

