import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Twitter, Instagram, Play, Gamepad2, ChevronDown, Star, Sparkles } from 'lucide-react';

const PremiumGamingSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = ['Home', 'Videos', 'Tutorials', 'Contact'];
  const videos = [
    'https://www.youtube.com/embed/2t3bIM2Y4sA',
    'https://www.youtube.com/embed/S1jSpNwD6e4',
    'https://www.youtube.com/embed/60WoybgeGv8'
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ParallaxSparkle = ({ delay = 0 }) => (
    <div 
      className="absolute w-2 h-2 bg-green-400 rounded-full opacity-50 animate-pulse"
      style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        transition: 'transform 0.3s ease-out',
        animationDelay: `${delay}ms`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <ParallaxSparkle key={i} delay={i * 100} />
        ))}
      </div>

      {/* Nav */}
      <nav className={`sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-green-500/20 z-50 transform transition-transform duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 group">
              <Gamepad2 className="text-green-400 transform group-hover:rotate-12 transition-transform" size={24} />
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Johnny Minecraft
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    hover:text-green-400 hover:bg-slate-800 hover:scale-105 transform
                    ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:rotate-180 transition-transform duration-300"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute w-full bg-slate-900 border-b border-green-500/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item}
                className="w-full px-4 py-2 text-left text-gray-300 hover:text-green-400 hover:pl-6 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#22c55e20,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#22c55e20,_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative group">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-clip-text text-transparent
                bg-[length:200%_100%] animate-gradient">
                Level Up Your Minecraft Game
              </span>
              <Sparkles className="absolute -top-6 -right-6 text-yellow-400 animate-bounce" size={24} />
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeIn">
              Join the adventure with epic builds and pro strategies!
            </p>
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg flex items-center space-x-2 mx-auto
              transition-all duration-300 hover:scale-110 hover:rotate-1 group animate-slideUp">
              <Play size={20} className="transform group-hover:translate-x-1 transition-transform" />
              <span>Watch Latest Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Videos */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-green-400 mb-8 relative">
            Latest Videos
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-green-500 rounded-full transform origin-left scale-x-0 animate-scaleIn" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((videoUrl, index) => (
              <div 
                key={index} 
                className={`bg-slate-800 rounded-xl overflow-hidden transform transition-all duration-500
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20
                  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <iframe
                  width="100%"
                  height="215"
                  src={videoUrl}
                  title={`YouTube video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22c55e10,_transparent_70%)]" />
        <div className="max-w-xl mx-auto relative">
          <h2 className="text-2xl font-bold text-center text-green-400 mb-8">
            Get In Touch
            <Star className="inline-block ml-2 text-yellow-400 animate-spin-slow" size={20} />
          </h2>
          <form className="space-y-4 transform hover:scale-[1.01] transition-transform duration-300">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-slate-900/80 rounded-lg border border-slate-700 
                focus:border-green-500 transition-all duration-300 focus:shadow-lg focus:shadow-green-500/20"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-slate-900/80 rounded-lg border border-slate-700 
                focus:border-green-500 transition-all duration-300 focus:shadow-lg focus:shadow-green-500/20"
            />
            <button 
              type="submit" 
              className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300
                transform hover:scale-105 hover:rotate-1 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#22c55e10,_transparent_50%)]" />
        <div className="relative">
          <div className="flex justify-center space-x-6 mb-4">
            {[Twitter, Instagram, Youtube].map((Icon, index) => (
              <Icon 
                key={index}
                className={`text-gray-400 hover:text-green-400 transition-all duration-300 
                  transform hover:scale-125 hover:-rotate-12 
                  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Johnny Minecraft. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default PremiumGamingSite;