

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Bhumika Naik",
  title: "Hi all, I'm Bhumika 👋",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with a strong foundation in Computer Science. Skilled in building modern Web Applications, problem-solving, and coding with languages like C, C++, Java, JavaScript, and Python."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bfJ4mAkTHOs3NATD-FbWOVVqT6GfjL6j/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bhumikanaik126",
  linkedin: "https://www.linkedin.com/in/bhumika-naik-6426521b5/",
  gmail: "bhumikanaik1228@gmail.com",
  medium: "https://medium.com/@bhumikanaik126",
  twitter: "https://twitter.com/bhumika_1228",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER | PROBLEM SOLVER | COMPUTER SCIENCE ENTHUSIAST",
  skills: [
    emoji("⚡ Build modern, responsive Web Applications using ReactJS, Tailwind CSS, and Recoil"),
    emoji("⚡ Develop robust Backend APIs using Node.js, Express.js, and Prisma with databases like MongoDB, MySQL, PostgreSQL"),
    emoji("⚡ Proficient in coding and problem-solving with C, C++, Java, JavaScript, and Python"),
    emoji("⚡ Skilled in tools and workflows with Git, GitHub, and Postman"),
  ],

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "tailwind", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "expressjs", fontAwesomeClassname: "fas fa-server" },
    { skillName: "prisma", fontAwesomeClassname: "fas fa-database" },
    { skillName: "mysql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "postgresql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "mongodb", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "c++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "postman", fontAwesomeClassname: "fas fa-paper-plane" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "KLE Technological University",
      logo: require("./assets/images/KLEtech.png"), // replace with your own logo later
      subHeader: "Bachelor of Engineering in Computer Science — 9.14 CGPA",
      duration: "2022 — 2026",
      desc: "Located in Hubballi, Karnataka.",
      descBullets: ["Core CS subjects, Projects, and Full Stack Development"]
    },
    {
      schoolName: "MES Chaitanya PU College",
      logo: require("./assets/images/MES.png"), // replace with your own logo later
      subHeader: "Pre University — 90%",
      duration: "2020 — 2022",
      desc: "Located in Sirsi, Karnataka."
    },
    {
      schoolName: "St Joseph’s High School",
      logo: require("./assets/images/Joseph.png"), // replace with your own logo later
      subHeader: "Class 10 — 97.92%",
      duration: "2020",
      desc: "Located in Karwar, Karnataka."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false 
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Certifications, Competitions & Coding Profiles 🏆 "),
subtitle:
  "A collection of my professional certifications, achievements in coding competitions, and profiles that highlight my problem-solving journey.",


  achievementsCards: [
    {
      title: "Juniper Networks Certified Associate, Junos (JNCIA-Junos)",
      subtitle:
        "Earned the JNCIA-Junos certification from Juniper Networks, demonstrating expertise in networking fundamentals and Junos OS.",
      image: require("./assets/images/juniper.png"), // replace with your actual image file
      imageAlt: "Juniper Networks JNCIA-Junos Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a1b0cb50-9b85-448c-a07f-fb28c456455a/linked_in?t=t1n436"
        }
      ]
    },
    {
      title: "Finalist, Bithunt 2.0 – IIT Dharwad",
      subtitle:
        "Qualified for the final round of Bithunt 2.0, a prestigious competition conducted by IIT Dharwad.",
      image: require("./assets/images/bithunt.png"), // replace with your actual image file
      imageAlt: "Bithunt 2.0 Competition Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1BA7j7c6vIsLlEVXeOQ8wm52KjiLRmIOc/view?usp=sharing"
        }
      ]
    },
    {
      title: "LeetCode Profile",
      subtitle: "Solving coding challenges and improving problem-solving skills on LeetCode.",
      image: require("./assets/images/Leetcode.png"), // replace with your actual image
      imageAlt: "LeetCode Profile Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/u/Bhumika_an/"
        }
      ]
    },
    {
      title: "CodeChef Profile",
      subtitle: "Practicing competitive programming and participating in contests on CodeChef.",
      image: require("./assets/images/codechef.jpg"), // replace with your actual image
      imageAlt: "CodeChef Profile Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.codechef.com/users/bhumikanaik126"
        }
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, collaborate, or just want to say hi? My inbox is always open.",
  email_address: "bhumikanaik1228@gmail.com" 
};

// Twitter Section
const twitterDetails = {
  userName: "bhumikanaik_1228", 
  display: true 
};

const isHireable = true; 
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
