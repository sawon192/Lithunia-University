"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Heart, MapPin, Menu, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { VERIFIED_ON } from "@/lib/research";

const STORAGE_KEY = "go-abroad-bd-shortlist";
const CHANGE_EVENT = "go-abroad-bd-shortlist-updated";

function getSavedCount() {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((item) => typeof item === "string").length : 0;
  } catch {
    return 0;
  }
}

export function SiteHeader({ savedCount: initialCount = 0 }: { savedCount?: number }) {
  const [savedCount, setSavedCount] = useState(initialCount);

  useEffect(() => {
    const sync = () => setSavedCount(getSavedCount());
    sync();
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span><span className="utility-dot" /> Source-led admission intelligence for Bangladesh</span>
          <span className="utility-date"><ShieldCheck size={13} strokeWidth={1.8} /> Last researched {VERIFIED_ON}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Go Abroad BD home">
            <span className="brand-mark"><GraduationCap size={24} strokeWidth={1.75} /><span className="brand-spark">✦</span></span>
            <span className="brand-copy"><strong>GO ABROAD <em>BD</em></strong><small>YOUR JOURNEY. OUR GUIDANCE.</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Overview</Link>
            <Link href="/#universities">Universities</Link>
            <Link href="/#colleges">Colleges</Link>
            <Link href="/methodology">Our method</Link>
          </nav>
          <div className="header-actions">
            <Link href="/shortlist" className="shortlist-link"><Heart size={17} strokeWidth={1.85} /><span>Shortlist</span><span className="shortlist-count">{savedCount}</span></Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation"><Menu size={22} /></summary>
              <nav aria-label="Mobile navigation">
                <Link href="/">Overview</Link><Link href="/#universities">Universities</Link><Link href="/#colleges">Colleges</Link><Link href="/methodology">Our method</Link><Link href="/shortlist">Shortlist ({savedCount})</Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand"><span className="footer-brand-icon"><GraduationCap size={20} /></span><span>GO ABROAD BD</span></div>
          <p>Clearer decisions start with better sources.<br />Independent admission research for students applying from Bangladesh.</p>
        </div>
        <div className="footer-links"><span>EXPLORE</span><Link href="/#universities">University research</Link><Link href="/#colleges">Other institutions</Link><Link href="/shortlist">Your shortlist</Link></div>
        <div className="footer-links"><span>INFORMATION</span><Link href="/methodology">How we verify</Link><a href="https://studyin.lt/" target="_blank" rel="noreferrer">Study in Lithuania <ArrowUpRight size={14} /></a><a href="https://www.omptest.org/" target="_blank" rel="noreferrer">Official OMPT site <ArrowUpRight size={14} /></a></div>
        <div className="footer-contact"><span>HAVE A QUESTION?</span><p>Speak with the Go Abroad BD team about your next steps.</p><a href="https://wa.me/8801714640238" target="_blank" rel="noreferrer"><MapPin size={15} /> Bangladesh <span className="footer-contact-divider">/</span> WhatsApp +880 1714 640238 <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Go Abroad BD · Research desk</span><span>Policies change. Always confirm with the institution before payment.</span><span>Photo: <a href="https://www.pexels.com/photo/st-catherine-s-church-in-vilnius-cityscape-28322469/" target="_blank" rel="noreferrer">Mr Alex Photography / Pexels</a></span></div>
    </footer>
  );
}
