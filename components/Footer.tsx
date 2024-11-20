export default function Footer() {
    return (
      <footer className="bg-primary text-white py-10 relative overflow-hidden">
        {/* Animovaný element */}
        <div className="absolute w-full h-16 top-0 flex items-center">
          <div className="w-10 h-10 bg-secondary rounded-full animate-bounce-x"></div>
          <div className="w-10 h-10 bg-secondary rounded-full animate-bounce-x delay-150"></div>
          <div className="w-10 h-10 bg-secondary rounded-full animate-bounce-x delay-300"></div>
          <div className="w-10 h-10 bg-secondary rounded-full animate-bounce-x delay-450"></div>
        </div>
  
        {/* Obsah footera */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-lg font-bold">© 2024 Enroll Limited s.r.o. Všetky práva vyhradené.</p>
          <p className="text-sm mt-2">
            Navrhnuté s <i className="text-accent">vášňou</i> pre kreativitu.
          </p>
        </div>
      </footer>
    );
  }
  