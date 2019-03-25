import workAuror from "../imgs/work-auror@2x.jpg";
import workAurorBack from "../imgs/work-auror-back@2x.jpg";
import workAurorProfile from "../imgs/auror-profile.jpg";
import workEcoware from "../imgs/work-ecoware@2x.png";
import workConqa from "../imgs/work-conqa@2x.jpg";
import workConqaJourney from "../imgs/conqa-user-journey.png";
import workConqaUsers from "../imgs/conqa-users.jpg";
import workConqaBack from "../imgs/work-conqa-back@2x.jpg";

export default {
  works: {
    conqa: {
      id: "conqa",
      title: "Conqa",
      description:
        "Conqa is a Quality assurance software that improves your productivity and profitability. Customers can structure their projects, invite collaborators, pass & fail checklists, request sign-offs, generate reports and much more.",
      role: "Lead Product Design (UI/UX), User Research, Product Strategy",
      roleDescription:
        "My job at Conqa has been mostly around Project Strategy and System Design. As a solo Product Designer leading the product alongside a fellow Product Manager my role entails all disciplines of design, from research to final visual designs and measuring success.",
      challenges: [
        {
          title: "Designing for Success",
          image: workConqaUsers,
          description:
            "Being new to the industry I had to, more than ever, rely on customer inteviews and research to understand the industry, better define the problems and design for success. The learnings gave us insights that later influenciated and contributed to our product decisions. Going back to customers to validate the designs and observer more closed that loop, improved our changes to get it rigth and kept a good relationthip of trust. Just need to keep the expectations under control, right? :)"
        },
        {
          title: "Understanding the Journey",
          image: workConqaJourney,
          description:
            "To construct a building is not a small job, it takes a lot of people, with different skills, processes and needs. To understand all those processes and needs are is crucial to design a product people will love but can also scale. One my main objectives has been around identifying and creating patterns to design a system that is flexible enough to accomodate and adapt to most needs but that can also scale and use of patterns and standards to generate smart insights and reports."
        }
      ],
      image: workConqa,
      imageBack: workConqaBack
    },
    auror: {
      id: "auror",
      title: "Auror",
      description:
        "Auror is a crime reporting and prevention platform being used by major retailers and the police in New Zealand and Australia. Auror has a big impact in keeping our community safe and businesses dramatically lowering their losses.",
      role: "Lead Product Design (UI/UX), Front-end Development (SCSS & React)",
      roleDescription:
        "I led the Design and part of the front-end (HTML/CSS) of Auror across Web, Mobile and Desktop since day one. Have been working with the NZ & AUS police and major retailers for the past 3,5 years I’ve designed solutions that saved retailers milions of dollars, got criminals behind bars and kept our community safer.",
      challenges: [
        {
          title: "Reinventing Crime Reporting",
          image: workAurorBack,
          description:
            "Reporting crime is tedious, the old paper-based proccess took from 20 to 40 minutes to be done. One of the greatest challenges I was able to solve there was to redesign that proccess and make it easier and quicker to do, in less than 5 min. To achieve that I interviewed users, analysed a lot of data, prototyped solutions and run usability tests. Progress was measured afterwards and tweaks made to improve it even further."
        },
        {
          title: "Preventing it from  happening",
          image: workAurorProfile,
          description:
            "Reporting crime is naturally not fun, so how does one make it delightful? We started by showing we cared and we heard them, we understood our customers and their objectives. We made it known that our solution was there to support them and give them actionable intelligence to perhaps prevent crime in the first place."
        }
      ],
      image: workAuror,
      imageBack: workAurorBack
    },
    ecoware: {
      id: "ecoware",
      title: "Ecoware",
      description:
        "Ecoware is New Zealand’s first and only carboNZero certified packaging company. They design, develop and supply a full range of sustainable food packaging options.",
      role: "User Experience, App Development",
      roleDescription:
        "I’ve built (hand-coded) the MyEco platform to allow customers to view, order and re-order their products, choosing to distribute it to the customer's head office or any of their customers’ branches location.",
      challenges: [{}],
      image: workEcoware,
      imagBack: workEcoware
    }
  }
};
