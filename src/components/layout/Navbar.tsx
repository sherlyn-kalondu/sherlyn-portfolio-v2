import ThemeToggle from "../common/ThemeToggle";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 dark:bg-slate-950/80" style={{ background: 'var(--paper)' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-serif tracking-tight" style={{ color: "var(--text-primary)" }}>Sherlyn Kalondu</a>
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" href="#home">Home</a>
            <a className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" href="#about">About</a>
            <a className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" href="#skills">Skills</a>
            <a className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" href="#projects">Projects</a>
            <a className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" href="#contact">Contact</a>
          </div>
          <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"><span className="block text-xl leading-none" aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
          <ThemeToggle />
        </div>
      </div>
      {menuOpen && <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"><div className="mx-auto grid max-w-7xl gap-1">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">{link}</a>)}</div></div>}
    </nav>
  );
}

export default Navbar;
