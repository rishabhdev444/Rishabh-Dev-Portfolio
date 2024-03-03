import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    carrent,
    jobit,
    tripguide,
    threejs,
    logowiley,
    java,
    spring,
    sql,
    c,
    sba,
    chat,
    spotify,
    shopify,
    amazon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "FullStack Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name:"Java",
      icon:java,
    },
    {
      name:"C++",
      icon:c,
    },
    {
      name:"SpringBoot",
      icon:spring,
    },
    {
      name:"SQL",
      icon:sql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Java Full Stack Developer",
      company_name: "WileyEdge India",
      icon: logowiley,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Jun 2023",
      points: [
      
" Created software solutions through 10+ user consultations, system flow analysis, and data usage study.",
"Employed SQL to interact with databases, retrieving over 1000 data entries for analysis and reporting purposes.", 
"Implemented user-friendly UI/UX designs that contributed to a 67% increase in user engagement.",
"Optimized code, conducted unit tests, and achieved 80% code coverage through framework development using object-oriented design principles.",
 "Mentored junior developers, with pair programming techniques to increase team efficiency by 30%.",
 "Initiated and executed proactive troubleshooting efforts, swiftly resolving technical issues in real-time.",
 "Implemented coding standards, resulting in a 20% improvement in codebase quality and maintainability.",
 "Refactored code and eliminated bugs, leading to a 15% improvement in the application's performance.",
 "Consistently met deadlines and maintained a 100% code review rating within the team.",
      ],
    },
    {
        title: "Intern - FrontEnd Developer",
        company_name: "7 Days India",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jun 2020 - Jul 2020",
        points: [
          "Develop and maintain responsive web pages using HTML, CSS, and JavaScript.",
         " Collaborate with designers and back-end developers to implement user interfaces",
          "Create and maintain documentation for code and processes",
          "Participate in code reviews and contribute to team discussions on best practices",
          "Assist in the development of new features and functionality for web applications",
        ],
      },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shopping Basket App",
      description:
        "Developed a Spring Boot based application that seamlessly provides online shopping experience to users while empowering administrators with efficient management tools.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "thymeleaf,",
          color: "blue-text-gradient",
        },
      ],
      image: sba,
      source_code_link: "https://github.com/rishabhdev444/ShoppingBasketApplication",
      source_code_live_link:"https://github.com/rishabhdev444/ShoppingBasketApplication",
    },
    {
      name: "ChatterFox",
      description:
        "Developed a robust chat web application using React.js, allowing users to engage in real-time conversations by implemented responsive interfaces, ensuring interaction across various devices & screen sizes. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-chat-engine",
          color: "green-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/rishabhdev444/chat-application",
      source_code_live_link:"https://github.com/rishabhdev444/chat-application",
    },
    {
      name: "Spotify Clone App",
      description:
        "Designed a Spotify clone application using HTML, CSS, and JavaScript, providing users with a seamless music streaming experience by implemented responsive interfaces ensure across various devices & screen sizes.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/rishabhdev444/Spotify-Clone-App",
      source_code_live_link:"https://github.com/rishabhdev444/Spotify-Clone-App"
    },
    {
      name: "Amazon Clone - JavaScript",
      description:
        "The Amazon Clone Website is a fully functional e-commerce platform built using HTML, CSS & JavaScript. It replicates the familiar layout and design of Amazon, allowing users to browse and purchase products.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/rishabhdev444/Javascript-Amazon-Project",
      source_code_live_link:"https://rishabhdev444.github.io/Javascript-Amazon-Project/amazon.html"
    },
  ];
  
  
  
  export { services, technologies, experiences, testimonials, projects };