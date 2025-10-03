import Intro from './Intro';
import videoBg from './assets/42494-431756134_tiny.mp4';

export const App = () => {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover brightness-75 saturate-50 filter"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Foreground Content */}
      <div className="relative flex h-full flex-col">
        <div className="relative">
          <Intro />
        </div>
      </div>
    </div>
  );
};
