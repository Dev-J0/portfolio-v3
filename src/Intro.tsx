import Avatar from './Avatar';

export default function Intro() {
  return (
    <div className="relative">
      <div className="relative z-20 mx-auto grid w-[60rem] text-white">
        <div
          id="topContainer"
          className="col-span-full grid h-[20rem] w-[60rem] grid-cols-2 gap-4 bg-gradient-to-b from-[#18251F] via-[#0e1d1af6] to-[#12242B] p-5 sm:h-[25rem]"
        >
          <div className="z-21 grid grid-cols-2 gap-1">
            <div className="">
              <img
                src="/public/logo-no-background.png"
                alt=""
                className="bg-anti-white"
              ></img>
              <Avatar />
            </div>
            <svg
              viewBox="0 0 230 230"
              className="absolute top-0 left-0 h-[250px] w-[250px]"
            >
              <rect
                x="14"
                y="15"
                width="200"
                height="200"
                rx="0"
                ry="0"
                fill="none"
                stroke="#3A606E"
                strokeWidth="5"
              >
                <animate
                  attributeName="stroke-width"
                  values="5;15;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
            <div className="w-[20rem] p-5">
              <div className="flex flex-row items-center justify-start">
                <h1 className="pb-2">Dev-J0</h1>
                <button id="nicknameButton" className="ml-2" type="button">
                  ↯
                </button>
              </div>

              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                recusandae nesciunt veniam ipsa reiciendis tenetur debitis vero
                at sequi saepe.
              </h4>
            </div>
          </div>
          <div className="z-21 ml-50">
            <h2>Level 100</h2>
            <div className="">
              <img src="" alt="years of service icon"></img>
              <h3> Developer - Years of service</h3>
              <h3> 550XP </h3>
            </div>
            <button type="button">EDIT Profile?</button>
          </div>
        </div>
        <div
          id="middleContainer"
          className="grid w-[60rem] grid-cols-[67%_30%] gap-4 border-2 border-purple-500 bg-gradient-to-b from-[#12242B] via-[#1a3436f6] to-[#324b57b4] sm:h-auto"
        >
          {/* Left Column */}
          <div id="leftContainerMiddle" className="bg-anti-white p-3">
            {/* Latest Project */}
            <div id="favoriteGame" className="mb-10">
              <h1>Latest Project</h1>
              <div>
                <img alt="Project screenshot" />
                <h4>Achievement Progress 5/5</h4>
                <span role="img" aria-label="trophy">
                  🏆
                </span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                <span role="img" aria-label="rocket">
                  🚀
                </span>
                <button type="button">Screenshots 6</button>
              </div>
            </div>

            {/* Recent Projects */}
            <div id="recentActivity">
              <h1>Recent Projects</h1>
              <div id="project1" className="bg-anti-black mt-10 p-3">
                <h2>TO DO WEATHER APP LOL</h2>
                <h3>49 hrs on the record</h3>
                <h3>last played on oct 21</h3>
                <div>Screenshots 9</div>
              </div>
              <div id="project2" className="bg-anti-black mt-10 p-3">
                <h2>TO DO WEATHER APP LOL</h2>
                <h3>49 hrs on the record</h3>
                <h3>last played on oct 21</h3>
                <div>Screenshots 9</div>
              </div>
              <div id="project3" className="bg-anti-black mt-10 p-3">
                <h2>TO DO WEATHER APP LOL</h2>
                <h3>49 hrs on the record</h3>
                <h3>last played on oct 21</h3>
                <div>Screenshots 9</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div id="rightContainerMiddle" className="bg-amber-400 p-3">
            <h2>Sidebar / Stats</h2>
            {/* Put your right-side content here */}
          </div>
        </div>

        <br></br>
        <div
          id="bottomContainer"
          className="h-[50rem] w-[60rem] bg-gradient-to-b from-[#324b57b4] via-[#213238f6] to-[#063335] sm:h-[25rem]"
        ></div>
      </div>
    </div>
  );
}
