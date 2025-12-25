import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const GITHUB_URL = "https://github.com/ijxpwastaken/RustBrowser";
const RELEASE_URL = `${GITHUB_URL}/releases/tag/Browser`;
const ISSUES_URL = `${GITHUB_URL}/issues`;
const PULLS_URL = `${GITHUB_URL}/pulls`;

const Header = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass-high rounded-3xl py-4 px-8 flex justify-between items-center shadow-2xl">
    <div className="flex items-center gap-4">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 rust-gradient rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-orange-900/30 text-xl transform hover:rotate-12 transition-transform clickable"
      >R</div>
      <span className="text-xl font-extrabold tracking-tighter text-white">rustBrowser</span>
    </div>
    
    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest text-gray-300 uppercase">
      <a href="#features" className="hover:text-orange-500 transition-colors clickable">Features</a>
      <a href="#readme" className="hover:text-orange-500 transition-colors clickable">Docs</a>
      <a href="#dev" className="hover:text-orange-500 transition-colors clickable">Assistant</a>
      <a href="#contribute" className="hover:text-orange-500 transition-colors clickable">Help Build</a>
    </div>

    <a 
      href={GITHUB_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass-high px-5 py-2.5 rounded-2xl text-[10px] font-black tracking-widest hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20 clickable"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.3 24 17.81 24 12.5 24 5.87 18.627.5 12 .5z"/></svg>
      GITHUB
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-orange-500/10 to-transparent -z-10 blur-[120px]"></div>
    
    <div className="max-w-5xl mx-auto text-center">
      <a 
        href={RELEASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-high inline-flex items-center gap-3 px-6 py-2 rounded-full text-[11px] font-black tracking-[0.2em] text-orange-400 mb-10 hover:border-orange-500/50 transition-all clickable shimmer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.8)]"></span>
        BUILD: BROWSER TAG v0.0.1 (DEV)
      </a>
      
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl">
        THE WEB <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-orange-400">LIQUIDIZED.</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-2xl font-medium leading-relaxed mb-12 opacity-80">
        A 100% Safe Rust engine. Zero memory leaks. <br/>
        Openly <span className="text-white italic">Unlicensed</span> for the public good.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a 
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-12 py-5 rust-gradient text-white font-black rounded-2xl text-lg shadow-[0_20px_40px_rgba(206,65,43,0.4)] hover:shadow-[0_25px_60px_rgba(206,65,43,0.6)] clickable flex items-center justify-center gap-3"
        >
          View Source
        </a>
        <a 
          href={ISSUES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-12 py-5 glass-high text-white font-black rounded-2xl text-lg border-white/20 hover:bg-white/10 clickable"
        >
          Help Dev
        </a>
      </div>
      
      <div className="mt-16 flex items-center justify-center gap-12 text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">
        <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> UNLICENSED</span>
        <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> EARLY DEV</span>
        <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> RUST NATIVE</span>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, desc, icon, color, details }: { title: string, desc: string, icon: string, color: string, details?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`glass p-10 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all group clickable relative overflow-hidden flex flex-col ${isOpen ? 'ring-2 ring-orange-500/50' : ''}`}
    >
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity ${color}`}></div>
      <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block drop-shadow-lg">{icon}</div>
      <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-400 font-medium leading-relaxed mb-4">{desc}</p>
      {isOpen && details && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
          <p className="text-xs mono text-orange-400 uppercase tracking-widest mb-2 font-bold">Technical Specs:</p>
          <p className="text-sm text-gray-300 mono leading-relaxed whitespace-pre-line">{details}</p>
        </div>
      )}
      {!isOpen && details && (
        <div className="mt-auto text-[10px] mono text-orange-500/50 uppercase font-black tracking-widest group-hover:text-orange-500">
          Click to expand details
        </div>
      )}
    </div>
  );
};

const ReadmeSection = () => (
  <section id="readme" className="max-w-7xl mx-auto px-6 py-32">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">PROJECT README</h2>
      <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Direct from the Repository Documentation</p>
    </div>
    <div className="glass-high rounded-[3rem] p-10 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7zm0 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><div className="w-1.5 h-6 rust-gradient"></div> Status</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              This project is currently in <span className="text-orange-500 font-bold">Pre-Alpha Development</span>. 
              The codebase is being actively restructured to transition from a conceptual sandbox to a viable browser engine.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><div className="w-1.5 h-6 rust-gradient"></div> Goals</h3>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex gap-2"><span className="text-orange-500">/</span> 100% Memory-Safe Rendering Pipeline</li>
              <li className="flex gap-2"><span className="text-orange-500">/</span> Native WebAssembly execution by default</li>
              <li className="flex gap-2"><span className="text-orange-500">/</span> Minimal binary footprint (under 20MB)</li>
              <li className="flex gap-2"><span className="text-orange-500">/</span> Privacy-first data isolation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-black/40 rounded-3xl p-8 border border-white/5 space-y-6">
          <h3 className="text-xl font-black mb-4 mono text-orange-500">Quick Build Guide</h3>
          <div className="space-y-4">
            <div className="group">
              <p className="text-[10px] text-gray-500 mono uppercase mb-1">Prerequisites</p>
              <div className="bg-white/5 p-3 rounded-xl mono text-xs text-gray-300 border border-white/5">
                rustc 1.75+ (nightly recommended)<br/>
                cargo, llvm, clang
              </div>
            </div>
            <div className="group">
              <p className="text-[10px] text-gray-500 mono uppercase mb-1">Cloning</p>
              <div className="bg-white/5 p-3 rounded-xl mono text-xs text-gray-300 border border-white/5 cursor-pointer hover:border-orange-500/50" onClick={() => navigator.clipboard.writeText(`git clone ${GITHUB_URL}.git`)}>
                $ git clone {GITHUB_URL}.git
              </div>
            </div>
            <div className="group">
              <p className="text-[10px] text-gray-500 mono uppercase mb-1">Build</p>
              <div className="bg-white/5 p-3 rounded-xl mono text-xs text-orange-400 border border-white/5">
                $ cargo build --release
              </div>
            </div>
          </div>
          <a 
            href={RELEASE_URL}
            target="_blank"
            className="block text-center py-4 bg-white/10 rounded-2xl text-[10px] font-black tracking-widest hover:bg-orange-500 hover:text-white transition-all clickable uppercase"
          >
            Download Pre-Compiled Artifacts
          </a>
        </div>
      </div>
    </div>
  </section>
);

const DevConsole = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Bridge established. I am the rustBrowser Project Intelligence. This project is in its earliest stages—we are building the foundations. Ask me about the README, build steps, or contribution guidelines." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: `You are the Official Assistant for rustBrowser (${GITHUB_URL}). 
          Emphasize: 
          1. The project is VERY early in development (Pre-Alpha).
          2. We need help via GitHub Issues and Pull Requests.
          3. It is openly under the Unlicense (Public Domain).
          4. Build requires Rust nightly and LLVM.
          5. Refer to the 'Browser' release tag: ${RELEASE_URL}.
          6. The goal is to replace legacy C++ engines with Safe Rust.
          Be technical, concise, and professional.`
        }
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Connection failed. Please re-synchronize." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error in memory allocation. (API Failed)" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-32" id="dev">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">PROJECT ASSISTANT</h2>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Direct Link to Core Intelligence</p>
      </div>
      
      <div className="glass-high rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/20">
        <div className="bg-white/5 px-8 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-white/10 clickable border border-white/20 hover:bg-red-500 transition-colors"></div>
            <div className="w-4 h-4 rounded-full bg-white/10 clickable border border-white/20 hover:bg-yellow-500 transition-colors"></div>
          </div>
          <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">rustbrowser_v1_interface</span>
          <div className="w-10"></div>
        </div>
        
        <div className="h-[500px] overflow-y-auto p-10 terminal-scroll space-y-6 bg-black/20" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-6 rounded-[2rem] shadow-2xl ${
                m.role === 'user' 
                ? 'rust-gradient text-white rounded-tr-none' 
                : 'glass border border-white/10 text-gray-100 rounded-tl-none'
              }`}>
                <div className="text-[9px] uppercase font-black tracking-widest mb-2 opacity-60 mono">
                  {m.role === 'user' ? 'Developer' : 'Intelligence_Core'}
                </div>
                <div className="font-medium text-sm leading-relaxed whitespace-pre-wrap">{m.text}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="glass px-6 py-4 rounded-full animate-pulse text-[10px] font-black tracking-widest text-orange-500">
                THINKING...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-3xl">
          <div className="flex gap-4 p-2 glass rounded-[2rem]">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about contributing or the README..."
              className="flex-1 bg-transparent px-6 py-4 text-sm font-bold focus:outline-none placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              className="p-4 rust-gradient rounded-2xl text-white shadow-xl hover:scale-105 transition-transform clickable"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <div className="min-h-screen selection:bg-orange-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-6 py-32" id="features">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Core Architecture</h2>
            <p className="text-orange-500 font-bold tracking-widest uppercase text-xs">Why we chose the Oxide Path</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon="🔒"
              color="bg-orange-500"
              title="Memory Safety"
              desc="Compiled with strict borrow-checking. We have eliminated segment faults at the source level."
              details="Using Rust's ownership model, the engine ensures zero data races during high-concurrency layout calculations. Our goal is 100% 'Safe' code blocks."
            />
            <FeatureCard 
              icon="🕊️"
              color="bg-blue-500"
              title="Freedom First"
              desc="Released under the Unlicense. Public domain code that belongs to humanity."
              details="No corporate gatekeepers. No patent clauses. You can fork, sell, or modify this engine without asking permission or paying royalties."
            />
            <FeatureCard 
              icon="🚀"
              color="bg-purple-500"
              title="Wasm Native"
              desc="Leveraging zero-cost abstractions for near-native web app performance."
              details="The engine is built to treat WebAssembly as a first-class citizen, optimizing its execution pipeline to bypass typical JavaScript overhead."
            />
          </div>
        </section>

        <ReadmeSection />

        <DevConsole />

        <section className="relative py-40 px-6 overflow-hidden" id="contribute">
          <div className="max-w-5xl mx-auto glass-high p-20 rounded-[4rem] text-center border border-white/20 shadow-[0_50px_100px_rgba(206,65,43,0.15)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">OPEN FOR PRs.</h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-xl font-medium mb-12 leading-relaxed">
              We are rewriting the web engine from the first crate. <br/> 
              Open **Issues** for bugs or submit **Pull Requests** for core features.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-black rounded-3xl text-lg transition-all clickable flex items-center justify-center gap-3"
              >
                Browse Issues
              </a>
              <a 
                href={PULLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 rust-gradient text-white font-black rounded-3xl text-lg shadow-xl clickable flex items-center justify-center gap-3"
              >
                Submit Code
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 bg-black/40 backdrop-blur-3xl">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 font-black tracking-[0.3em] uppercase text-[10px]">
          <a href={GITHUB_URL} className="hover:text-white transition-colors clickable">Github</a>
          <a href={RELEASE_URL} className="hover:text-white transition-colors clickable">Releases</a>
          <a href={`${GITHUB_URL}/blob/main/LICENSE`} className="hover:text-white transition-colors clickable">The Unlicense</a>
          <a href={ISSUES_URL} className="hover:text-white transition-colors clickable">Issues</a>
        </div>
        <p className="font-bold text-[10px] tracking-[0.5em] uppercase opacity-30">© 2024 rustBrowser Core Team • Early Development • Built with Rust</p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);