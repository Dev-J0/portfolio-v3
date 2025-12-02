import Intro from './Intro';
import videoBg from './assets/42494-431756134_tiny.mp4';
import Footer from './Footer';

export const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover brightness-75 saturate-50 filter"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Intro />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
