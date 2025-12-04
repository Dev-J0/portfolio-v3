import logo from './assets/projects/pic3.png';

export default function Footer() {
  return (
    <footer className="w-full border-white/10 bg-black/70 p-10 text-white backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <img className="h-15 w-auto" src={logo} alt="Logo" />
        <p className="max-w-xl text-center text-sm sm:text-base">
          © Designed and Delivered by Dev-J0. All rights reserved. All project
          names, logos, and trademarks are the property of their respective
          owners. Any content used is for demonstration and educational purposes
          only.
        </p>
      </div>
    </footer>
  );
}
