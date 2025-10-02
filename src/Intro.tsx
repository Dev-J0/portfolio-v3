import Avatar from './Avatar';

export default function Intro() {
  return (
    <div className="relative">
      <div className="bg-licorish relative z-20 mx-auto grid w-[60rem] grid-rows-3 gap-4 text-white">
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
              <h1 className="pb-2"> Dev-Jo</h1>

              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                recusandae nesciunt veniam ipsa reiciendis tenetur debitis vero
                at sequi saepe.
              </h4>
            </div>
          </div>
          <div className="z-21 ml-50">
            <h2>Level 100</h2>

            <h3> Developer</h3>

            <button type="button">Click</button>
          </div>
        </div>
        <div
          id="middleContainer"
          className="h-[50rem] w-[60rem] sm:h-[25rem]"
        ></div>
        <div
          id="bottomContainer"
          className="h-[50rem] w-[60rem] sm:h-[25rem]"
        ></div>
      </div>
    </div>
  );
}
