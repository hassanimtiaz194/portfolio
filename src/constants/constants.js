export const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "RESUME",
    href: "/resume",
  },
  {
    label: "PROJECTS",
    href: "/projects",
  },
];

export const Introduction_Name = ["Hello 👋, I'm Hassan Imtiaz", 3500];

export const Introduction = [
  "Front-End Developer 🖥️",
  3500,
  "Back-End Developer 🔧",
  3500,
  "Full-Stack Developer (🖥️ + 🔧)",
  3500,
  "Software Engineer 💻",
  3500,
];

export const SKILLS = [
  { skill: "React JS", url: "/react.png" },
  { skill: "Vue JS", url: "/vue.png" },
  { skill: "React Native", url: "/react.png" },
  { skill: "Node JS", url: "/node.png" },
  { skill: "Express JS", url: "/express.png" },
  { skill: "JavaScript", url: "/javascript.png" },
  { skill: "TypeScript", url: "/typescript.png" },
  { skill: "MongoDB", url: "/mongodb.png" },
  { skill: "SQL", url: "/sql.png" },
  { skill: "Firebase", url: "/firebase.png" },
  { skill: "Rest API", url: "/rest.png" },
  { skill: "GraphQL", url: "/graphql.png" },
  { skill: "Python", url: "/python.png" },
  { skill: "C Sharp", url: "/csharp.png" },
];

export const Projects = [
  {
    title: "Skild Competition Management System",
    tag: "skild",
    logo: "/skild/skild1.png",
    description:
      "<p><p>Skild Competition Management System revolutionizes event coordination for major entities like CISCO, Electronics Arts, and government agencies. Skild Competition Management System streamlines the entire competition lifecycle, offering a seamless experience for both administrators and participants. With its intuitive design and powerful features, this system has garnered trust from industry giants and government bodies alike. It stands as a testament to innovation in competition management, ensuring efficiency and accuracy throughout the event process. This robust system comprises four distinct applications, catering to the diverse needs of competition stakeholders.</p><br /><b>Super Admin App:</b><p> Centralized management hub for Skild administrators. Enables the creation of customized events tailored to client specifications. Features include the ability to toggle event functionalities based on client demands.</p><br /><b>Admin App:</b><p>Empowers event administrators with comprehensive tools. Allows creation of registration forms, entry forms, and quick links. Facilitates the generation and analysis of custom reports. Manages user roles and permissions within the event.</p><br /><b>Contestant App:</b><p> Tailored for contestants participating in the event. Displays registration forms, entry forms, and quick links created by the admin. Provides a user-friendly interface for contestants to submit their data.</p><br /><b>Judging App:</b><p>Specially designed for event judges. Displays entry forms for evaluation and scoring based on predefined criteria.</p><br /><b>Technologies:</b><p>Struts, Java, JSPs, Servlets, JQuery, ReactJS, HTML, CSS, Bootstrap, Google Analytics, Apache Tomcat 9.0</p></p>",
    images: [
      "/skild/skild2.png",
      "/skild/skild3.png",
      "/skild/skild4.png",
      "/skild/skild5.png",
      "/skild/skild6.png",
      "/skild/skild7.png",
      "/skild/skild8.png",
      "/skild/skild9.png",
    ],
    video: null,
  },
  {
    title: "Confidant Health Web App",
    tag: "confidant",
    logo: "/confidantWebApp/confidant1.png",
    description:
      "<p>The Confidant web app is a versatile platform built using Node.js, React, and Java, designed to cater to both providers and admins. Providers have access to a comprehensive suite of features, allowing them to efficiently manage their interactions with members. They can schedule appointments, engage in video chats, and communicate via chat with members. Providers also have the capability to review previous appointments, access detailed member information, and evaluate members based on their needs. Additionally, they can assign chat bots to assist with member interactions, create detailed notes about patients, and manage their own availability. The app also supports providers in maintaining and updating their credentialing data, among other features, ensuring a streamlined and effective experience for both providers and their members.</p>",
    images: [],
  },
  {
    title: "Confidant Health Member Web App",
    tag: "confidant",
    logo: "/confidantMemberWebApp/confidant1.png",
    description:
      "<p>This App facilitates seamless appointment scheduling with service providers, real-time chat functionality, and live video sessions with providers. Additionally, providers have the capability to delegate chatbots to gather necessary information from members. Users can conveniently update their profiles, including insurance details, within the app. Even if a user is not logged in, they can still join sessions or create appointment using a public URL generated by the provider. Payment processing is handled securely through Stripe integration.</p>",
    images: [],
    video: null,
  },
  {
    title: "Confidant Provider App",
    tag: "confidant",
    logo: "/confidantProviderApp/confidant1.png",
    description:
      "<p>The Confidant web app is an intuitive platform tailored for providers, offering a seamless experience to manage member interactions and care. As a provider, you can easily schedule appointments with members, conduct video chats, and engage in direct messaging to offer real-time support. The app allows you to access a complete history of previous appointments, view comprehensive member profiles, and evaluate members' progress. You can also assign chatbots to assist with routine interactions, create detailed patient notes, and manage your availability to ensure optimal scheduling. Additionally, the platform enables you to maintain, keeping everything organized and up to date for streamlined operations.</p>",
    images: [],
    video: null,
  },
  {
    title: "Confidant Member App",
    tag: "confidant",
    logo: "/confidantMemberApp/confidant1.png",
    description:
      "<p>This App facilitates seamless appointment scheduling with service providers, real-time chat functionality, and live video sessions with providers. Additionally, providers have the capability to delegate chatbots to gather necessary information from members. Users can conveniently update their profiles, including insurance details, within the app. Even if a user is not logged in, they can still join sessions or create appointment using a public URL generated by the provider. Payment processing is handled securely through Stripe integration.</p>",
    images: [],
    video: null,
  },
  {
    title: "Confidant Kiosk App",
    tag: "confidant",
    logo: "/confidantKioskApp/confidant1.png",
    description:
      "<p>This application was built using React Native, JAVA and NodeJS. It serves as a dedicated Kiosk App, designed to exclusively operate on a single device. Its primary purpose is to facilitate appointment scheduling for walk-in patients visiting the clinic where the device is installed.</p>",
    images: [],
    video: null,
  },
  {
    title: "Google Maps Project",
    tag: "other",
    logo: "/others/googlemaps.png",
    description:
      "<p>This project, built with Next.js and Firebase, features an interactive map with continent-based grouping when fully zoomed out. Upon loading, pins are grouped by country. Hovering over a pin highlights the corresponding area, while clicking a pin zooms in to reveal city-level grouping. Further interactions allow users to see individual markers and detailed user information. Users can also add locations through an autocomplete feature, selecting from suggested options. This seamless experience provides an intuitive and detailed view of geographical data</p>",
    images: [],
    video:
      "https://www.loom.com/share/a686eb7e066045288eec2f4b5e1457b5?t=119&sid=754dcc68-04ce-43cb-b381-bf8445f043f8",
  },
];
