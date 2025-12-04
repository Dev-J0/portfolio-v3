import Avatar from './Avatar';
import shopify from './assets/projects/pic2.png';
import salt from './assets/projects/pic4.png';
import { useState } from 'react';
import cv from './assets/projects/pic1.png';
import oldportfolio from './assets/projects/pic5.png';

export default function Intro() {
  const [showSkills, setShowSkills] = useState(false);

  const projects = [
    {
      title: 'Shopify Store',
      image: shopify,
      src: 'https://verdura-haven.myshopify.com/',
      tech: 'Shopify, Liquid, CSS (Dawn Theme modified)',
      lastPlayed: 'last played on 18 Oct',
      screenshots: 8,
    },
    {
      title: 'Salt & Static',
      image: salt,
      link: 'https://dev-j0.github.io/restaurant/',
      tech: 'Webpack, JS, CSS',
      lastPlayed: 'last played on 28 Nov',
      screenshots: 3,
    },
    {
      title: 'CV Maker in French',
      image: cv,
      link: 'https://dev-j0.github.io/cv-app-fr/',
      tech: 'React',
      lastPlayed: 'last played on Oct 21',
      screenshots: 5,
    },
    {
      title: 'Old Portfolio',
      image: oldportfolio,
      link: 'https://dev-j0.github.io/portfolio/',
      tech: 'HTML, CSS, JavaScript',
      lastPlayed: 'last played on Jan 10',
      screenshots: 5,
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind',
    //'TypeScript',
    'Shopify / Liquid',
    'Responsive Web Design',
    'UX / UI Design',
    'Git / GitHub',
    'Problem-Solving & Troubleshooting',
    'Bug Reporting & Reproduction',
    'Manual Testing',
    'Debugging in DevTools',
    'API integration',
    'Webpack / Vite',
    'VSCode & its extensions for productivity',
    'SEO basics',
    'Ticketing programs',
    'Agile/Scrum concepts',
  ];

  return (
    <div className="relative">
      <div className="relative z-20 mx-auto grid max-w-[60rem] text-white">
        {/* TOP CONTAINER */}
        <div
          id="topContainer"
          className="col-span-full grid w-full grid-cols-1 gap-4 bg-gradient-to-b from-[#181e25] via-[#0e151dc7] to-[#121f2b] p-5 sm:grid-cols-[1fr_22rem] md:grid-cols-[1fr_24rem]"
        >
          {/* LEFT SECTION */}
          <div className="relative z-10 flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6">
            {/* AVATAR + FRAME */}
            <div className="relative mt-4">
              <Avatar />
              <svg
                viewBox="0 0 230 230"
                className="absolute top-[-10px] left-[-10px] hidden h-[230px] w-[230px] sm:block md:h-[250px] md:w-[250px]"
              >
                <rect
                  x="6"
                  y="6"
                  width="200"
                  height="200"
                  rx="0"
                  ry="0"
                  fill="none"
                  stroke="#355070"
                  strokeWidth="10"
                >
                  <animate
                    attributeName="stroke-width"
                    values="5;15;5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName=""
                    values="1;0.5;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>

            {/* NICKNAME + BIO */}
            <div className="mt-4 w-full p-5 sm:mt-0 sm:w-[20rem]">
              <div className="flex flex-row items-center justify-start">
                <h1 className="pb-2 text-xl sm:text-2xl">Dev-J0</h1>
                <button id="nicknameButton" className="ml-2" type="button">
                  ↯
                </button>
              </div>
              <h4 className="text-sm sm:text-base">
                Just a dev who enjoys turning ideas into interactive
                experiences. Coffee, code, and creativity ➾ that's the routine.
                Experienced in building responsive websites, Shopify
                development, and custom theme creation, blending design, UX, and
                functionality seamlessly.
                <div className="flex-direction-row mt-2 ml-25 flex gap-9">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/laces/64/espresso-cup.png"
                    alt="espresso-cup"
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/tiny-glyph/32/code.png"
                    alt="code"
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/creativity.png"
                    alt="creativity"
                  />
                </div>
              </h4>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="z-10 mt-5 w-full p-5 sm:mt-0 sm:ml-10 sm:w-[22rem] md:w-[24rem]">
            <h2 className="mb-3 text-lg sm:text-xl">Level 100</h2>
            <div className="bg-g rey mb-3 flex items-center p-1">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/deco-color/96/3.png"
                alt="3"
              />
              <div className="mr-5">
                <h3 className="mr-5">Years of service</h3>
                <h3>550XP</h3>
              </div>
            </div>
            <button type="button" className="bg-grey h-9 w-30">
              Edit Profile
            </button>
          </div>
        </div>

        {/* MIDDLE CONTAINER */}
        <div
          id="middleContainer"
          className="grid w-full grid-cols-1 gap-4 bg-gradient-to-b from-[#121f2b] via-[#0e151df6] to-[#324b57b4] sm:grid-cols-[67%_30%]"
        >
          {/* LEFT COLUMN */}
          <div
            id="leftContainerMiddle"
            className="mb-5 rounded-sm bg-[#122133cb] p-3"
          >
            <div id="project1" className="bg-anti-black mt-10">
              <h2 className="from-purple to-peach c mt-5 h-9 rounded-t-md bg-linear-to-r/hsl p-1">
                Frontend skills?
              </h2>
              <div className="flex flex-wrap gap-4 border-none p-5">
                <a href="https://web.dev/html">
                  <img src="icons8-html.svg" alt="HTML" className="h-13 w-13" />
                </a>
                <img src="icons8-css-96.svg" alt="CSS" className="h-13 w-13" />
                <img
                  src="icons8-javascript.svg"
                  alt="JS"
                  className="h-13 w-13"
                />
                <img
                  src="icons8-react-50.png"
                  alt="React"
                  className="h-13 w-13"
                />
                <img
                  src="icons8-tailwind-css.svg"
                  alt="Tailwind"
                  className="h-13 w-13"
                />
              </div>
            </div>

            {/* RECENT PROJECTS */}
            <div id="recentActivity" className="bg-anti-black">
              <h2 className="from-purple to-peach c mt-5 h-9 rounded-t-md bg-linear-to-r/hsl p-1">
                Recent Activity
              </h2>
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="mt-5 border border-[#4252649f] bg-[#161a1fde] p-1 opacity-75 transition-all duration-300 hover:opacity-100"
                >
                  <h2 className="opacity-90">{project.title}</h2>
                  <a href={project.link}>
                    <img
                      className="mb-5 h-40 w-full sm:w-60"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                  <div id="proj" className="bg-[#2620387e] p-5">
                    <h3>{project.tech}</h3>
                    <h3>{project.lastPlayed}</h3>
                    <div>Screenshots {project.screenshots}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="mb-5 rounded-sm bg-[#122133cb] p-3">
            <h2 className="mb-6 text-lg sm:text-xl">Currently Online</h2>
            <nav className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={() => setShowSkills(!showSkills)}
                className="rounded bg-[#05223f00] px-4 py-2 text-left text-white transition-colors hover:bg-[#09131d50]"
              >
                Skills {showSkills}
              </button>

              {showSkills && (
                <ul className="mt-2 ml-4 list-none space-y-1 text-left text-sm text-white sm:text-base">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}

              <a href="#" className="text-white hover:underline">
                Interests
              </a>
              <a href="#" className="text-white hover:underline">
                Socials
              </a>
            </nav>
          </div>
        </div>

        {/* BOTTOM CONTAINER */}
        <div
          id="bottomContainer"
          className="w-full border-none bg-gradient-to-b from-[#181e25] via-[#0e151db6] to-[#121f2b] sm:h-[5rem]"
        ></div>
      </div>
    </div>
  );
}
