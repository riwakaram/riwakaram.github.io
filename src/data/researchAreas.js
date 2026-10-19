import collaboration from "../Images/research/collaboration-theme-v6.jpg";
import learning from "../Images/research/learning-theme-v6.jpg";
import testbed from "../Images/research/testbed-balanced-v7.jpg";
import humanSwarm from "../Images/research/human-swarm-scene-v9.jpg";

export const researchAreas = [
    {
        id: "collaboration",
        shortTitle: "Collaboration",
        title: "Collaborative Multi-Agent Systems",
        image: collaboration,
        alt: "Concept illustration of robots with complementary capabilities connected around a shared goal",
        text: "Developing algorithms for robot teams with different capabilities, objectives, and operating conditions. A central question: when does interaction let a team achieve something its members could not accomplish alone? The focus spans distinctions between collaboration, cooperation, and coordination, alongside resource allocation that helps teams support one another.",
        explanation: "Developing algorithms that help robot teams combine complementary capabilities and share resources across different missions. Exploring how collaboration opens up possibilities beyond what each team can achieve alone.",
        caption: "Different capabilities, connected by a shared goal.",
        tags: ["cooperation", "coordination", "capability complementarity"],
        related: [
            { title: "Collaboration in Multi-Robot Systems: Taxonomy and Survey of Frameworks for Collaboration", detail: "Taxonomy and survey · Preprint", href: "/publications#collaboration-survey" },
            { title: "Resource Allocation Based on Hamilton’s Rule", detail: "Conference paper · IEEE CDC 2025", href: "/publications#hamiltons-rule" },
        ],
    },
    {
        id: "learning",
        shortTitle: "Learning",
        title: "Learning for Robotic Behavior",
        image: learning,
        alt: "Concept illustration of a robot exploring branching paths with one route highlighted toward a goal",
        text: "Exploring how learning can help robot teams decide when to share robots as transferable resources. Combining ecology-inspired models based on Hamilton’s rule with graph neural networks brings robot capabilities and transfer costs into allocation decisions. The goal is to make an NP-hard allocation problem more scalable while supporting collaborative behavior.",
        explanation: "Learning when sharing a robot is worth the trade-off. Combining Hamilton’s rule with graph neural networks to weigh transfer costs against team benefits and make resource allocation more scalable.",
        caption: "Learning from experience to guide robotic behavior.",
        tags: ["robot learning", "NP-hardness", "ecology-inspired robotics"],
        related: [
            { title: "Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems", detail: "Preprint · Under review in IEEE T-RO", href: "/publications#altruistic-collaboration" },
            { title: "Multi-team allocation experiments", detail: "Experiment video", href: "https://youtu.be/-2q-zy0wItk" },
        ],
    },
    {
        id: "human-swarm",
        shortTitle: "Human–swarm",
        title: "Human-Swarm Interaction",
        image: humanSwarm,
        alt: "Concept illustration of a woman with a frosted-tip pixie haircut using a tablet that mirrors the network of six robots beside her",
        text: "Building interfaces that help people specify, supervise, and understand collective robot behavior. A particular focus is sketch-to-swarm interaction: turning freehand drawings into formation targets, robot assignments, and coordinated motion. Formation control avoids unintended reflected shapes, while a user study examines how accessible the interface is to people without robotics expertise.",
        explanation: "Turning a freehand sketch into coordinated swarm motion. Designing intuitive interfaces that connect human intent with robot formations, and studying how people without robotics expertise use them.",
        caption: "Intuitive interfaces between people and robot collectives.",
        tags: ["user study", "interfaces", "robot swarms"],
        related: [
            { title: "Freehand Sketching for End-User Programming of Robot Swarms", detail: "Preprint", href: "/publications#freehand-sketching" },
            { title: "A Graphical Interface for Specifying and Establishing Multi-Robot Formations", detail: "M.S. thesis · UC Irvine", href: "/publications#masters-thesis" },
        ],
    },
    {
        id: "testbed",
        shortTitle: "Testbed",
        title: "Robotarium and Hardware Systems",
        image: testbed,
        alt: "Concept illustration connecting a robot wireframe to a Robotarium-style arena with small research robots, perimeter docks, and motion-tracking cameras",
        text: "Supporting the experimental systems that bring multi-robot algorithms into the physical world. Hands-on responsibilities include Robotarium hardware, Vicon motion capture, debugging, robot maintenance, and documentation for reproducible workflows. Demonstrations and lab tours also help make the systems accessible to researchers and visitors.",
        explanation: "Bringing multi-robot algorithms into the physical world. Supporting Robotarium hardware, motion capture, and reproducible workflows so ideas can be tested on real robots under real constraints.",
        caption: "Connecting algorithms, hardware, and real-world experiments.",
        tags: ["testbeds", "debugging", "Vicon system", "documentation"],
        related: [
            { title: "Multi-team allocation experiments", detail: "Experiment video", href: "https://youtu.be/-2q-zy0wItk" },
            { title: "Sketch-to-swarm experiments", detail: "Experiment video", href: "https://www.youtube.com/watch?v=iVbwI8mktBI" },
        ],
    },
];
