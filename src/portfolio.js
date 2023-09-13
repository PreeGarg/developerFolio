/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Preedhi Garg",
  title: "Hi, I am Preedhi",
  subTitle: 
    "Result-driven graduate computer science student with full-stack software development experience seeking full-time roles. Proficient in agile processes, design, and test-driven development with a solid foundation in Math, Coding, and Logic"
  ,
  resumeLink:
    "https://drive.google.com/file/d/1_jLtiXxd5e1NbsWo7VCBLf8h8f_SquuM/view?pli=1", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PreeGarg",
  linkedin: "https://www.linkedin.com/in/preedhigarg/",
  gmail: "gargpreedhi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Technical Expertise"),
    "A highly competitive computer science professional with a stellar academic record. Proficient in a wide range of programming languages, software development tools, and methodologies, demonstrating a strong foundation in computer science and engineering.",
    emoji("⚡ Problem Solver"),
    "Recognized for optimizing critical systems, reducing database latency by 80%, and improving platform performance by 75%, showcasing a strong aptitude for identifying and resolving complex technical challenges.",
    emoji("⚡ Research and Innovation"),
    "Authored research papers on topics like image compression, exhibiting a commitment to innovation and the ability to apply academic insights to practical, real-world problems."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "REST",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-list check"
    },
    {
      skillName: "SaaS",
      fontAwesomeClassname: "fas fa-cloud"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Seattle University",
      logo: require("./assets/images/SU.jpg"),
      subHeader: "Master of Science in Computer Science,",
      duration: "March 2022 - Present",
      desc: "GPA: 4.00/4.00",
      descBullets: [
        "Merit Scholar",
        "Sponsorship for GHC 2023"
      ]
    },
    {
      schoolName: "Amity University, India",
      logo: require("./assets/images/Amity.jpg"),
      subHeader: "Master of Technology in Computer Science and Engineering,",
      duration: "April 2013 - May 2015",
      desc: "GPA: 4.00/4.00",
      descBullets: [
        "Gold Medalist",
        "Merit Scholar"
      ]
    },
    {
      schoolName: "Maharshi Dayanand University, India",
      logo: require("./assets/images/MDU.jpg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering,",
      duration: "April 2009 - May 2013",
      desc: "GPA: 4.00/4.00",
      descBullets: [
        "Topper of the University Award",
        "Best Student of the College Title"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Snapsheet",
      companylogo: require("./assets/images/Snapsheet.jpg"),
      date: "June 2023 – September 2023",
      desc: "React, Ruby on Rails, MySQL",
      descBullets: [
        "Incorporated the ISO ClaimSearch Portal into the Snapsheet (Claim Management) Portal using React.js. It improved workflow by eliminating the need for window-switching hence increasing the adjuster’s productivity.",

        "Developed the Slim Supplement Portal using Ruby and MySQL that facilitated effortless adjuster-vendor communication."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "S&P Global",
      companylogo: require("./assets/images/SPGlobal.jpg"),
      date: "July 2015 – November 2021",
      desc: "C#, .NET, SQL Server, JavaScript, REST",
      descBullets: [
        "Accountable for the design, TDD, code reviews, and feature enhancements using CI/CD and Agile methodology.",

        "Streamlined and transformed ASMX service into RESTful APIs using C#.NET that boosted platform performance by 75%",

        "Remodeled critical SQL queries, stored procedures, and scripts that reduced DB latency by 80%. Awarded for minimizing execution time from 18 min to 6 sec for a client case",

        "Built efficient UI components using React.Js that improved rendering time by 20% compared to Knockout.Js",

        "Revamped DB architecture that halved the server maintenance cost and turnaround time for processing 50M records",

        "Demonstrated and documented SQL query optimization techniques across ∼10 teams to address DB slowness"
      ]
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
  title: "Projects",
  subtitle: "SOME PROJECTS THAT HELPED ME GROW",
  projects: [
    {
      image: require("./assets/images/GoGetter.jpg"),
      projectName: "GoGetter",
      projectDesc: "Teamed up with one partner to develop a Saas-based goal-tracking application using Node.js, MongoDB, and Angular. Live-launched application with Google-based user authentication, driven by Azure and Mongo Atlas Cloud.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gogetterapp.azurewebsites.net/#/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ImageTransformation.jpg"),
      projectName: "Image Transformation",
      projectDesc: "Designed and developed REST API to process ∼12 image transformation operations under 6ms using Python and Flask.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/PreeGarg/ImageTransformAPI"
        }
      ]
    },
    {
      image: require("./assets/images/CodeSmellDetector.jpg"),
      projectName: "CodeSmellDetector",
      projectDesc: "Developed and implemented an automated code smell detection system, enhancing code quality and maintainability by identifying and addressing potential issues in uploaded code files using C++.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/PreeGarg/CodeSmellDetector"
        }
      ]
    },
    {
      image: require("./assets/images/Scrabble.jpg"),
      projectName: "Testing Scrabble",
      projectDesc: "Led a comprehensive testing initiative for the Scrabble project, conducting unit testing, integration testing, UI testing, mutation testing using C#, WinAppDriver.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/PreeGarg/Team2_Scrabble"
        }
      ]
    },
    {
      image: require("./assets/images/PhysicalDB.png"),
      projectName: "Physical Database Storage",
      projectDesc: "Developed a comprehensive SQL database system, spanning from physical storage to the application layer, utilizing C++, BerkeleyDB, and SQLParser.",
    },
    {
      image: require("./assets/images/DistributedSystems.jpg"),
      projectName: "Distributed Components",
      projectDesc: "Coded distributed features like Bully algorithm and Pub/Sub using sockets in Python.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Dean's Honor Roll For Graduate Students",
      subtitle:
        "Notable accomplishment to have received a grade point average of 4.000 Winter 2023 quarter while carrying a full course load.",
      image: require("./assets/images/DeanHonor.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1blNfnCX-3etJz1voaXzV5w6zC1ST90ar/view"
        }
      ]
    },
    {
      title: "S&P Ace Award",
      subtitle: "Received 7 Ace awards in my total tenure of  years at S&P Global",
      image: require("./assets/images/SPGlobal.jpg"),
      footerLink: [
        {name: "Award", url: ""}
      ]
    },
    {
      title: "Gold Medal",
      subtitle: "Won Gold Medal for Excellent Performance in Academic and securing first position among 300 students.",
      image: require("./assets/images/Amity.jpg"),
      footerLink: [
        {name: "Award", url: ""}
      ]
    },
    {
      title: "Best Student Award",
      subtitle: "Won Best Student Award for excellent performance in academics as well as in cultural activities like Dancing, Debating, Volunteering. etc.",
      image: require("./assets/images/MDU.jpg"),
      footerLink: [
        {name: "Award", url: ""}
      ]
    },
    {
      title: "AWS Essential Training for Developers",
      subtitle:
        "Completed certification course for AWS.",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/learning/certificates/865d68cb07850dd438eff5eb66dedac116da43df717bd422c9e14222ff798171"
        }
      ]
    },
    {
      title: "Java Object-Oriented Programming",
      subtitle:
        "Completed certification course for OOPs Programming.",
      image: require("./assets/images/oops.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/learning/certificates/df64c1d650197fedff1f0123f184804077cb35abec2d35d7f6c7fe54eff42650"
        }
      ]
    },
    {
      title: "Python Data Structures",
      subtitle:
        "Completed certification course for Python Data Structures.",
      image: require("./assets/images/pythonDS.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/learning/certificates/d53bbcc95d4403134f6cd7d4c5c7a46af7253a2bf128c45f2f865a91e1f704d9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcVToLNEcQvqGYZWuLNAdwA%3D%3D"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research Papers",
  subtitle:
    "For my Love for Research, I am proud of these research papers I have contributed to.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://link.springer.com/chapter/10.1007/978-981-10-0448-3_7",
      title: "Searchless Fractal Image Compression Using Fast DCT and Real DCT",
      description:
        "Proposed novel methods to reduce the encoding time for searchless fractal image compression in DCT domain by curtailing the computational complexity of the discrete cosine transform (DCT) equations"
    },
    {
      url: "https://link.springer.com/chapter/10.1007/978-81-322-2755-7_4",
      title: "Adaptive Fractal Image Compression Based on Adaptive Thresholding in DCT Domain",
      description:
        "Variance of range and domain blocks were analyzed and only domain blocks under a threshold value were taken. Achieved 2 times faster encoding time than baseline algorithm with a higher compression ratio."
    },
    {
      url: "https://www.semanticscholar.org/paper/Comparison-of-Emotion-Recognition-Models-in-Spoken-Garg-Sehgal/591275800afea83e62ebeca6d0a893d7c9a2d2ec",
      title: "Comparison of Emotion Recognition Models in Spoken Dialogs",
      description:
        "Focused on comparing emotion recognition models on the basis of features extracted and classifiers used."
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(425) 504-3953",
  email_address: "gargpreedhi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
