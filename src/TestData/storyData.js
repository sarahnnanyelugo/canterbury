import Greeting from "../assets/images/lab.png";

import Door from "../assets/images/bio-lab.png";
import Chess1 from "../assets/images/chess.png";
import Chess2 from "../assets/images/chess2.png";
import Chess3 from "../assets/images/primary-chess.png";
import Excursion from "../assets/images/story-time.png";
import Classroom from "../assets/images/assembly.png";
import ISA1 from "../assets/images/isa-fish1.jpg";
import ISA2 from "../assets/images/isa-fish2.jpg";
import ISA3 from "../assets/images/teaching1.jpg";
import ISA4 from "../assets/images/isa-fish4.jpg";
import ISA5 from "../assets/images/isa-fish3.jpg";
import ISA6 from "../assets/images/teaching4.jpg";
import ISA8 from "../assets/images/teaching3.jpg";
import ISA9 from "../assets/images/teaching2.jpg";
import ISA7 from "../assets/images/teaching5.jpg";
import ISA10 from "../assets/images/drama1.jpg";
import ISA11 from "../assets/images/drama2.jpg";
import ISA12 from "../assets/images/art.JPG";
import ISA13 from "../assets/images/art1.jpg";
import ISA14 from "../assets/images/art2.jpg";
import ISA15 from "../assets/images/art3.jpg";
import ISA16 from "../assets/images/art4.jpg";

export const storyData = [
  {
    title: "Clubs",
    title2: "Our Various Club Activities",
    date: "Dec 24,2024",
    paragraph1:
      "Excitement filled the science laboratory as a group of our school students conducted hands-on experiments aimed at deepening their understanding of chemistry and physics. Wearing protective goggles and lab coats, the students worked with test tubes, beakers, and microscopes under the supervision of their science teacher. ",
    id: 1,

    tab3: "They performed experiments involving chemical reactions, observations under magnification, and the application of scientific theories in real-world scenarios. The practical session helped them connect theoretical knowledge with hands-on experience, making science more engaging and accessible. The activity was part of the school’s STEM (Science, Technology, Engineering, and Mathematics) education program, designed to encourage students to explore scientific fields. “This kind of hands-on learning is essential for developing curiosity and problem-solving skills,” said the head of the science department. Several students expressed newfound interest in pursuing careers in science and technology, highlighting the impact of interactive learning. The school hopes to introduce more experimental workshops to inspire the next generation of scientists and innovators.",
    id: 1,
    photo: Door,

    tabGalleries: [
      [
        { src: Chess1, title: " " },
        { src: Chess2, title: "" },
        { src: Chess3, title: "" },
      ],

      [Classroom, Greeting], // images for tab 1
      [Excursion, Door], // images for tab 2
      [Greeting, Classroom], // images for tab 3
    ],

    tabLabels: [
      "Chess & Scrabble club",
      "Debate club",
      "Red Cross",
      "Press club",

      "Science Club",
    ],
  },
  {
    title: "Excursion",
    date: "Dec 24,2024",
    title2: "Our Excursion Photos",
    paragraph1:
      "A group of secondary school students actively participated in a dynamic discussion session aimed at enhancing their critical thinking and communication skills. Seated in a circle, they debated various topics, including social issues, leadership, and community development. The interactive nature of the discussion encouraged students to express their opinions confidently while learning from different perspectives. Teachers emphasized that such sessions help students develop problem-solving abilities and prepare them for future leadership roles.",
    id: 1,
    paragraph2: "",
    others:
      "The discussion was part of the school’s initiative to promote intellectual engagement beyond traditional classroom learning. “We want to create an environment where students feel empowered to voice their thoughts and critically analyze different viewpoints,” said one of the facilitators. Many students expressed enthusiasm about the session, noting that it gave them a platform to share ideas, build self-confidence, and sharpen their reasoning skills. The school plans to organize more of these discussions regularly to foster a culture of dialogue and collaboration",
    id: 1,
    photo: Greeting,
    tabGalleries: [
      [Door, Greeting, Excursion], // images for tab 0
      [Classroom, Greeting], // images for tab 1
      [Excursion, Door], // images for tab 2
      [Greeting, Classroom], // images for tab 3
    ],
    tabLabels: ["Trip photos", "Trip notes", "Feedback"],
  },
  {
    title: "Sports",
    date: "Dec 24,2024",
    title2: "Our Sports Activities",
    paragraph1:
      "Our enthusiastic secondary school students recently embarked on an educational excursion to a nature reserve, providing them with a hands-on learning experience beyond their classroom walls. With backpacks and notebooks in hand, the students explored the lush surroundings, studying different plant species, wildlife, and geological formations. A knowledgeable tour guide led the group, explaining the significance of biodiversity and conservation efforts. The students were actively engaged, asking insightful questions and recording observations to discuss later in class.",
    id: 3,
    paragraph2: "",
    others:
      "The trip was part of the school’s experiential learning program, designed to complement textbook lessons with real-world applications. “Seeing students interact with nature and apply their knowledge in a practical setting is truly rewarding,” said one of the accompanying teachers. Many students expressed excitement about the trip, noting that it made learning more interesting and memorable. The school plans to organize similar excursions to historical sites, museums, and science centers, ensuring that students gain a well-rounded education through direct experiences.",
    id: 1,
    photo: Excursion,
    tabGalleries: [
      [Door, Greeting, Excursion], // images for tab 0
      [Classroom, Greeting], // images for tab 1
      [Excursion, Door], // images for tab 2
      [Greeting, Classroom], // images for tab 3
    ],
    tabLabels: ["Volley ball", "Foot ball", "Basket ball"],
  },
  {
    title: "Events",
    date: "Dec 24,2024",
    title2: "Our Events Photos",
    paragraph1:
      "A group of secondary school students demonstrated remarkable dedication to their studies as they attentively took notes during an engaging lesson. The classroom, filled with educational posters and bookshelves, provided an ideal learning environment as the teacher explained key concepts on the whiteboard. The students, dressed in their school uniforms, listened carefully, jotting down important points and asking questions to clarify their understanding. Teachers praised their focus, emphasizing the importance of active participation in the learning process.",
    id: 3,
    paragraph2: "",
    others:
      "The school administration has been implementing strategies to promote a more engaging and student-centered learning approach. “Encouraging students to take notes and actively engage in lessons significantly improves their retention and understanding of subjects,” said the school principal. Many students shared that structured note-taking helps them review materials effectively, especially when preparing for exams. The school plans to incorporate more interactive teaching methods to further enhance students’ academic performance and overall learning experience.",
    id: 1,
    photo: Classroom,
    tabGalleries: [
      [Door, Greeting, Excursion], // images for tab 0
      [Classroom, Greeting], // images for tab 1
      [Excursion, Door], // images for tab 2
      [Greeting, Classroom], // images for tab 3
    ],
    tabLabels: ["Graduation", "Christmass Party", "PTA"],
  },
  {
    title: "Awards/Competitions",
    title2: "Our Awards/Competitions",
    date: "Dec 24,2024",
    paragraph1:
      "A group of secondary school students demonstrated remarkable dedication to their studies as they attentively took notes during an engaging lesson. The classroom, filled with educational posters and bookshelves, provided an ideal learning environment as the teacher explained key concepts on the whiteboard. The students, dressed in their school uniforms, listened carefully, jotting down important points and asking questions to clarify their understanding. Teachers praised their focus, emphasizing the importance of active participation in the learning process.",
    id: 3,
    paragraph2: "",
    others:
      "The school administration has been implementing strategies to promote a more engaging and student-centered learning approach. “Encouraging students to take notes and actively engage in lessons significantly improves their retention and understanding of subjects,” said the school principal. Many students shared that structured note-taking helps them review materials effectively, especially when preparing for exams. The school plans to incorporate more interactive teaching methods to further enhance students’ academic performance and overall learning experience.",
    id: 1,
    photo: ISA1,
    photoIntro: "ISA Fish Processing",
    tabGalleries: [
      [
        { src: ISA1, title: "ISA Fish Processing " },
        { src: ISA2, title: "ISA Fish Processing " },
        { src: ISA5, title: "ISA Fish Processing" },

        { src: ISA3, title: "ISA Visit to Low Income School" },
        { src: ISA4, title: "ISA Visit to Low Income School" },
        { src: ISA6, title: "ISA Visit to Low Income School" },
        { src: ISA7, title: "ISA Visit to Low Income School" },
        { src: ISA8, title: "ISA Visit to Low Income School" },
        { src: ISA9, title: "ISA Visit to Low Income School" },
        { src: ISA10, title: "ISA French Drama" },
        { src: ISA11, title: "ISA French Drama" },
        { src: ISA12, title: "ISA Artwork" },
        { src: ISA13, title: "ISA Artwork for the planet" },
        { src: ISA14, title: "ISA Artwork for the planet" },
        { src: ISA15, title: "ISA Artwork for the planet" },
        { src: ISA16, title: "ISA Artwork for the planet" },
      ],

      [Classroom, Greeting], // images for tab 1
      [Excursion, Door], // images for tab 2
      [Greeting, Classroom], // images for tab 3
    ],
    tabLabels: ["ISA Awards", "Olympic", "Feedback"],
  },
];
