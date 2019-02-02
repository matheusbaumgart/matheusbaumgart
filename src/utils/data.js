import workAurorRetina from "../imgs/work-auror@2x.jpg";
import workEcowareRetina from "../imgs/work-ecoware@2x.png";

export default {
  works: {
    auror: {
      id: "auror",
      title: "Auror",
      description:
        "Auror is a crime reporting and prevention platform being used by major retailers and the police in New Zealand and Australia. Auror has a big impact in keeping our community safe and businesses dramatically lowering their losses.",
      role: "Lead Product Design (UI/UX), Front-end Development (SCSS & React)",
      roleDescription:
        "I led the Design and part of the front-end (HTML/CSS) of Auror across Web, Mobile and Desktop since their day one. Have been working with the NZ & AUS police and major retailers for the past 3,5 years I’ve designed solutions that saved retailers milions of dollars, got criminals behind bars and kept our community safer.",
      challenges: [
        {
          title: "Reporting Crime",
          image: workAurorRetina,
          description:
            "Reporting crime is tedious, the old paper-based proccess took from 20 to 40 minutes to be done. One of the greatest challenges I got there was to redesign that proccess and make it friendly and doable in less than 5 min."
        },
        {
          title: "Adding evidence",
          image: workAurorRetina,
          description:
            "Reporting crime is tedious, the old paper-based proccess took from 20 to 40 minutes to be done. One of the greatest challenges I got there was to redesign that proccess and make it friendly and doable in less than 5 min."
        },
        {
          title: "Keeping track and adding comments",
          image: workAurorRetina,
          description:
            "Reporting crime is tedious, the old paper-based proccess took from 20 to 40 minutes to be done. One of the greatest challenges I got there was to redesign that proccess and make it friendly and doable in less than 5 min."
        }
      ],
      image: workAurorRetina
    },
    ecoware: {
      id: "ecoware",
      title: "Ecoware",
      description:
        "Ecoware is New Zealand’s first and only carboNZero certified packaging company. They design, develop and supply a full range of sustainable food packaging options.",
      role: "User Experience, App Development",
      roleDescription:
        "I’ve built (hand-coded) the MyEco platform to allow customers to view, order and re-order their products, choosing a head office or any of their customers’ branches location.",
      challenges: [{}],
      image: workEcowareRetina
    }
  }
};
