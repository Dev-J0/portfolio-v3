import Intro from './Intro';

export const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover brightness-75 saturate-50 filter"
      >
        <source src="/27669-365224683_tiny.mp4" type="video/mp4" />
      </video>

      {/* Foreground Content */}
      <div className="relative flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
          <Intro />
        </div>
      </div>
    </div>
  );
};
