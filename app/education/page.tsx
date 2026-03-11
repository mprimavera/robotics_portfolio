import { Accordion } from "../components/accordion";


const Quant_Math = [
    { title: "Mathematics Courses", 
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Probability</li>
          <li>Linear Algebra</li>
          <li>Differential Equations</li>
          <li>Multivariable Calculus</li>
          <li>Engineering Mathematics</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

const CS = [

  { title: "Object-Oriented Programming (Python, C++, Java)", 
    content: (`Implemented data structures and control logic in Python and C++; Java used in formal OOP coursework`),
    defaultOpen: true,
  },
  {
    title: "Assembly",
    content: (
    `Wrote multiple MSP430 programs in Assembly for embedded systems applications`
    ),
  },
  { title: "Linux OS", content: `Linux-based development and systems programming` 
  },
  { title: "Git", content: `Git (CLI & GitHub) for version-controlled collaborative development`
  },
  { title: "SQL", content: `PostgreSQL for relational schema design and backend integration`
  }, 

  { title: "MATLAB", content: `MATLAB for controls, robotics modeling, circuit analysis, and mathematical computation with visualization.` 
  },
  { title: "Software Engineering", content: `PERN stack: PostgreSQL, Express, React, and Node.js`
  },

  { title: "Applied Discrete Mathematics",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Boolean algebra and predicate logic</li>
          <li>Set theory and ordered sets</li>
          <li>Mathematical induction and proof techniques</li>
          <li>Relations and lattice theory</li>
          <li>Tree structures and discrete mathematical models</li>
        </ul>
      </div>
    ),
  }
]

const Robotics_EmbeddedSys = [
  { title: "Control Engineering",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Mathematical modeling of dynamic systems</li>
          <li>Laplace transforms and transfer functions</li>
          <li>Block diagrams and signal-flow representations</li>
          <li>Transient response analysis</li>
          <li>Stability analysis and root-locus methods</li>
          <li>Frequency-domain analysis: Bode, polar, and Nichols plots</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
  { title: "Microcontroller Programming",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Raspberry Pi programming in C and Python</li>
          <li>Pico CNC with grblHAL firmware programming in C (MQP Mini CNC Mill)</li>
          <li>PLC programming: Arduino PLC IDE</li>
        </ul>
      </div>
    ),
  },  
  { title: "Artificial Intelligence in Robotics",     
  content: (
    <div className="space-y-4">
      <ul className="list-disc pl-5 space-y-1">
        <li>A* search</li>
        <li>Dijkstra's algorithm</li>
        <li>Adversarial search</li>
        <li>Markov decision processes</li>
        <li>Reinforcement learning</li>
        <li>Neural networks</li>
        <li>Deep learning</li>
      </ul>
    </div>
  ),
  },
    { title: "Unified Robotics Courses",     
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Mechanical Applications in Robotics</li>
          <li>Sensing and Perception</li>
          <li>Manipulation</li>
          <li>Navigation</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
  { title: "Communication Protocols", content: (
    <div className="space-y-4">
      <ul className="list-disc pl-5 space-y-1">
        <li>UART</li>
        <li>I2C</li>
        <li>SPI</li>
      </ul>
    </div>
  ),
  defaultOpen: true,
  },
  { title: "Industrial Robotics", content: `Programming: Arduino PLC, a UR5 Universal Robots arm, and an M-1iA FANUC delta robot`
  },
]

const MQPAccordion = [
  {
    title: "Mini CNC Mill",
    content: (
      <div className="space-y-4 pb-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Established a GitHub-based workflow for version control and remote collaboration on SOLIDWORKS files</li>
          <li>Developed a laser probe and safety system for the automatic tool changer</li>
          <li>Designed and implemented mechanical bed leveling</li>
          <li>Discovered that the software "glitches" noticed by students were actually the result of electromagnetic interference (EMI)
            from the VFD powering the spindle</li>
          <li>
          Led technical contributions across controls integration, mechanical design,
          and authorship of the 342-page final report.
          </li>
        </ul>
        {/* Centered button */}
        <div className="flex justify-center mt-2 mb-2">
          <a
            href="https://digital.wpi.edu/concern/parent/h128nk052/file_sets/gf06g7088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              View Full Report
            </button>
          </a>
        </div>
      </div>
      
    ),
    defaultOpen: true,
  },
];

export default function Education() {
  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-12 text-slate-400 font-semibold">
          Education
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-24">
            Robotics Engineering (WPI) with emphasis on automation, mathematical modeling, control systems, and software development
          </p>
        </div>
        {/* Accordions */}
        <div className="space-y-12">

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mathematical Foundations
          </p>
          <Accordion items={Quant_Math} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science
          </p>
          <Accordion items={CS} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics & Embedded Systems
          </p>
          <Accordion items={Robotics_EmbeddedSys} />
          
          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Major Qualifying Project
          </p>
          <Accordion items={MQPAccordion} />

        </div>
      </div>
    </div>
    );
}
