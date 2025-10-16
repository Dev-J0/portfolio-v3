import Avatar from './Avatar';

export default function Intro() {
  return (
    <div className="relative">
      <div className="relative z-20 mx-auto grid max-w-[60rem] text-white">
        {/* TOP CONTAINER */}
        <div
          id="topContainer"
          className="col-span-full grid w-full grid-cols-1 gap-4 bg-gradient-to-b from-[#18251F] via-[#0e1d1af6] to-[#12242B] p-5 sm:grid-cols-2 md:flex md:flex-row md:flex-wrap"
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
                experiences. Coffee, code, and creativity ~ that's the routine.
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
          <div className="z-10 mt-10 ml-auto pt-5 sm:mt-0">
            <h2 className="mb-3 text-lg sm:text-xl">Level 100</h2>
            <div className="mb-3 flex items-center">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/deco-color/96/3.png"
                alt="3"
              />
              <div className="mr-5">
                <h3>Years of service</h3>
                <h3>550XP</h3>
              </div>
            </div>
            <button type="button" className="">
              EDIT Profile?
            </button>
          </div>
        </div>

        {/* MIDDLE CONTAINER */}
        <div
          id="middleContainer"
          className="grid w-full grid-cols-1 gap-4 border-t border-[#0e1d1af6] bg-gradient-to-b from-[#12242B] via-[#1a3436f6] to-[#324b57b4] sm:grid-cols-[67%_30%]"
        >
          {/* LEFT COLUMN */}
          <div id="leftContainerMiddle" className="bg-new p-3">
            <div id="project1" className="bg-anti-black mt-10">
              <h2 className="from-purple to-peach mt-5 h-9 bg-linear-to-r/hsl p-1">
                Frontend skills?
              </h2>
              <div className="flex flex-wrap gap-4 p-5">
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
            <h1 className="from-purple to-peach mt-5 h-9 bg-linear-to-r/hsl p-1">
              Recent Projects
            </h1>

            <div id="recentActivity" className="bg-anti-black">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  id={`project${num}`}
                  className="bg-anti-black mt-10 p-3"
                >
                  <h2 className="bg-purple opacity-90">CV Maker in French</h2>
                  <a href="https://dev-j0.github.io/cv-app-fr/">
                    <img
                      className="h-30 w-full sm:w-50"
                      src="Capture d’écran (642).png"
                      alt="cvmaker"
                    />
                  </a>
                  <h3>49 hrs on the record</h3>
                  <h3>last played on oct 21</h3>
                  <div>Screenshots 9</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div id="rightContainerMiddle" className="bg-new p-3">
            <h2 className="bg-purple">Currently Online</h2>
            <nav className="flex flex-col space-y-2">
              <a href="#">Skills</a>
              <a href="#">Interests</a>
              <a href="#">Socials</a>
            </nav>
          </div>
        </div>

        {/* BOTTOM CONTAINER */}
        <div
          id="bottomContainer"
          className="h-[30rem] w-full border-t border-[#1a3436f6] bg-gradient-to-b from-[#324b57b4] via-[#213238f6] to-[#063335] sm:h-[25rem]"
        ></div>
      </div>
    </div>
  );
}
