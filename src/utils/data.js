import workAuror from "../imgs/work-auror@2x.jpg";
import workAurorBack from "../imgs/work-auror-back@2x.jpg";
import workAurorProfile from "../imgs/auror-profile.jpg";
import workEcoware from "../imgs/work-ecoware@2x.png";
import workConqa from "../imgs/work-conqa@2x.jpg";
import workConqaJourney from "../imgs/conqa-user-journey.png";
import workConqaUsers from "../imgs/conqa-users.jpg";
import workConqaBack from "../imgs/work-conqa-back@2x.jpg";
import workReap from "../imgs/work-reap@2x.jpg";
import workToday from "../imgs/work-today@2x.jpg";

export default {
  works: {
    today: {
      id: "today",
      title: "Today - Digital Agenda",
      description:
        "Your events, tasks and notes all in one place, today. Keep your schedule, priorities and objectives organised by date, just like your physical agenda. No enforced methodology or clutter from numberless features you don't ever use.",
      role: "Maker",
      roleDescription: "",
      challenges: [],
      image: workToday,
      imageBack: workToday,
    },
    reap: {
      id: "reap",
      title: "Reap - IR Platform",
      description:
        "Reap provides information on NZX listed companies in a simple graphical format. Receive updates on news announcements, financial results, share prices and more.",
      role: "Co-founder, Product & Design",
      roleDescription: "",
      challenges: [],
      image: workReap,
      imageBack: workReap,
    },
    conqa: {
      id: "conqa",
      title: "Conqa",
      description:
        "Conqa is a Quality assurance software that improves productivity and profitability. Customers can structure their projects, invite collaborators, pass & fail checklists, request sign-offs, generate reports and much more.",
      role: "Product Design, User Research, Product Strategy",
      roleDescription:
        "My job at Conqa has been mostly around Project Strategy and System Design. As a solo Product Designer leading the product alongside a fellow Product Manager my role entails all disciplines of design, from research to final visual designs and measuring success.",
      challenges: [
        {
          title: "Designing for Success",
          image: workConqaUsers,
          description:
            "Being new to the industry I had more than ever to rely on customer inteviews and research to understand the industry, better define their problems and design for success. The learnings gave me insights that later contributed to product decisions. Going back to customers to validate the design and measure success closed that feedback loop, improved our chances to get it rigth and kept a good relationship.",
        },
        {
          title: "Understanding the Journey",
          image: workConqaJourney,
          description:
            "To construct a building is not a small job, it takes a lot of people with different skills and it involves many processes. Understanding all those processes and needs is crucial in order to design a product people will love and that can be scaled. One of my main objectives has been around identifying and creating patterns to design a system that is flexible enough to accomodate and adapt to most needs but can also scale and use patterns and standards to generate smart insights and reports.",
        },
      ],
      image: workConqa,
      imageBack: workConqaBack,
    },
    auror: {
      id: "auror",
      title: "Auror",
      description:
        "Auror is a crime reporting and prevention platform used by major retailers and the police in New Zealand and Australia. Auror has a big impact in keeping our community safe and businesses dramatically lowering their losses.",
      role:
        "Product Design, Design System, Front-end Development (SCSS & React)",
      roleDescription:
        "I led the Design and part of the front-end (HTML/CSS) of Auror across Web, Mobile and Desktop since day one. Having worked with the NZ & AUS police and major retailers for 3,5 years I’ve designed solutions that saved retailers milions of dollars, got criminals behind bars and kept our community safer.",
      challenges: [
        {
          title: "Reinventing Crime Reporting",
          image: workAurorBack,
          description:
            "Reporting crime is tedious, the old paper-based proccess took hours and our first form took from 20 to 40 minutes to be done. One of the greatest challenges I was able to solve was to redesign that proccess and make it easier and quicker (less than 5 min) to do, without compromising on quality of data. To achieve that I interviewed users, analysed a lot of data, prototyped solutions and ran usability tests. Progress was measured afterwards and tweaks made to improve it even further.",
        },
        {
          title: "Preventing it from  happening",
          image: workAurorProfile,
          description:
            "Reporting crime is naturally not fun, so how does one make it delightful? We started by showing we cared and we heard them, we understood our customers and their objectives. We made it known that our solution was there to support them and give them actionable intelligence to perhaps prevent crime from happning in the first place.",
        },
      ],
      image: workAuror,
      imageBack: workAurorBack,
    },
  },
};
