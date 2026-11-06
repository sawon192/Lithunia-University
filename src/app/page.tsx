import { SiteHeader } from "@/components/site-shell";
import { UniversityDirectory } from "@/components/university-directory";
import { collegeCount, institutions, posterNotes, sources, universityCount, VERIFIED_ON } from "@/lib/research";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, CircleHelp, ClipboardCheck, Globe2, GraduationCap, MapPin, ShieldCheck, Sparkles, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const savedSlugs: string[] = [];

  return (
    <>
      <SiteHeader savedCount={savedSlugs.length} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-rule" /> THE 2027 / 28 ADMISSIONS EDITION</div>
              <h1 id="hero-title">A clearer path<br />to <em>Lithuania.</em></h1>
              <p className="hero-lead">University admissions, without the guesswork. Verified, source-linked guidance for students applying from Bangladesh.</p>
              <div className="hero-buttons"><a href="#universities" className="button button-gold">Explore universities <ArrowUpRight size={18} /></a><Link href="/methodology" className="button button-outline">How we verify <ArrowRight size={17} /></Link></div>
              <div className="hero-trust"><span className="hero-trust-icon"><ShieldCheck size={20} strokeWidth={1.7} /></span><span><strong>Official sources, clearly cited</strong><small>Last researched {VERIFIED_ON} · Policies checked for Bangladesh</small></span></div>
            </div>
            <div className="hero-visual">
              <Image src="/images/vilnius-old-town.jpg" alt="Historic St. Catherine's Church and the Vilnius skyline in Lithuania" fill priority sizes="(max-width: 850px) 100vw, 50vw" className="hero-image" />
              <div className="hero-photo-overlay" />
              <div className="hero-photo-top"><span className="hero-photo-flag"><i /><i /><i /></span> A NEW HORIZON, LITHUANIA</div>
              <div className="hero-photo-bottom"><span><MapPin size={16} /> VILNIUS OLD TOWN</span><strong>54.6872° N&nbsp; 25.2797° E</strong></div>
              <div className="hero-float"><span className="hero-float-star">✦</span><span><small>START YOUR JOURNEY</small><strong>September 2027</strong></span></div>
            </div>
          </div>
        </section>

        <div className="stats-strip"><div className="container stats-inner"><div><strong>{institutions.length.toString().padStart(2, "0")}</strong><span>Institutions researched</span></div><span className="stats-divider" /><div><strong>{universityCount}</strong><span>Universities</span></div><span className="stats-divider" /><div><strong>{collegeCount}</strong><span>Colleges</span></div><span className="stats-divider" /><div className="stats-last"><BadgeCheck size={21} /><span>Every important claim<br />links to its source</span></div></div></div>

        <section className="welcome-section container">
          <div className="welcome-left"><div className="section-kicker"><span>01</span> THE RESEARCH DESK</div><h2>Make the decision<br /><em>with confidence.</em></h2><p>We separate what a university has actually published from what still needs confirmation. No assumed deadlines. No invented fee waivers. Just a practical starting point for your application.</p></div>
          <div className="welcome-note"><span className="note-icon"><TriangleAlert size={22} strokeWidth={1.6} /></span><div><strong>A note about the poster</strong><p>A promotional flyer is not an admission notice. Some 2027 dates are published; others are not. Look for the status labels and official links in every university profile.</p><Link href="/methodology">See our verification standard <ArrowRight size={15} /></Link></div></div>
        </section>

        <section className="universities-section" id="universities"><div className="container">
          <div className="section-heading-row"><div><div className="section-kicker"><span>02</span> EXPLORE THE UNIVERSITIES</div><h2>Find the right <em>institution.</em></h2><p>Every university and college named on the Lithuania 2027 poster, researched separately. Search and compare what matters most to a Bangladeshi applicant.</p></div><div className="section-heading-side"><span className="tiny-spark">✳</span><span>RESEARCHED, NOT GUESSED<br />{VERIFIED_ON.toUpperCase()}</span></div></div>
          <UniversityDirectory initialSavedSlugs={savedSlugs} />
        </div></section>

        <section className="pathway-section"><div className="container"><div className="section-heading-row pathway-heading"><div><div className="section-kicker"><span>03</span> THE BANGLADESH LENS</div><h2>Three things worth<br /><em>checking first.</em></h2></div><p>Requirements can change not just by university, but by your qualification, chosen degree and programme.</p></div>
          <div className="pathway-grid">
            <div className="pathway-card"><span className="pathway-number">01 / DOCUMENTS</span><div className="pathway-icon"><ClipboardCheck size={24} strokeWidth={1.6} /></div><h3>Is your qualification accepted?</h3><p>SSC and HSC are explicitly named at several institutions. But HSC GPA, Alim treatment, extra university transcripts and degree length are not the same everywhere — and colleges often publish a flat percentage instead.</p><Link href="/universities/vilnius-university">See an example <ArrowUpRight size={16} /></Link></div>
            <div className="pathway-card"><span className="pathway-number">02 / LANGUAGE</span><div className="pathway-icon"><Globe2 size={24} strokeWidth={1.6} /></div><h3>Does MOI replace a test?</h3><p>Sometimes, with conditions. At LSU, English-medium prior study alone does not remove the published test requirement. At ISM, a waiver depends on committee approval.</p><Link href="/universities/lithuanian-sports-university">Compare the rules <ArrowUpRight size={16} /></Link></div>
            <div className="pathway-card"><span className="pathway-number">03 / ENTRANCE TESTS</span><div className="pathway-icon"><BookOpen size={24} strokeWidth={1.6} /></div><h3>Which test do you need?</h3><p>OMPT is confirmed at only three universities. Kauno kolegija and SMK use their own competence or English tests instead, and most colleges publish no entrance test at all.</p><Link href="/universities/vytautas-magnus-university">Explore OMPT details <ArrowUpRight size={16} /></Link></div>
          </div>
        </div></section>

        <section className="colleges-section container" id="colleges"><div className="section-heading-row"><div><div className="section-kicker"><span>04</span> POSTER CHECKS</div><h2>Three things the <em>flyer got wrong.</em></h2><p>We researched every name on the poster. Three entries needed correcting before any student application is based on them.</p></div><span className="colleges-count">{institutions.length} INSTITUTIONS CHECKED <span>↗</span></span></div>
          <div className="poster-notes">{posterNotes.map((note, index) => <div className="poster-note" key={note.title}><span className="poster-note-index">{String(index + 1).padStart(2, "0")}</span><div className="poster-note-body"><span className="poster-note-flag"><TriangleAlert size={13} /> NEEDS CORRECTION</span><h3>{note.title}</h3><p>{note.body}</p><div className="poster-note-links">{note.slug && <Link href={`/universities/${note.slug}`}>Read the profile <ArrowRight size={15} /></Link>}{note.source && <a href={sources[note.source].url} target="_blank" rel="noreferrer">Official source <ArrowUpRight size={15} /></a>}</div></div></div>)}</div>
          <div className="colleges-footnote"><p>The remaining {institutions.length - posterNotes.length} institutions are listed under their own profiles. Where a college has not yet published its 2027 intake dates, that is stated on its profile rather than filled in with an assumption.</p></div>
        </section>

        <section className="closing-banner"><div className="container closing-inner"><div><div className="section-kicker light-kicker"><span>05</span> RESEARCH WITH CLARITY</div><h2>From question marks<br />to <em>next steps.</em></h2><p>Save promising universities, compare their official requirements, and revisit live sources before submitting an application or paying a fee.</p><div className="closing-buttons"><Link href="/shortlist" className="button button-gold">View your shortlist <ArrowUpRight size={17} /></Link><Link href="/methodology" className="closing-text-link">Our research method <ArrowRight size={17} /></Link></div></div><div className="closing-graphic" aria-hidden="true"><div className="closing-orbit orbit-one" /><div className="closing-orbit orbit-two" /><div className="closing-orbit orbit-three" /><div className="closing-center"><GraduationCap size={55} strokeWidth={1.1} /><span>YOUR NEXT<br />CHAPTER</span></div><span className="orbit-star orbit-star-one">✦</span><span className="orbit-star orbit-star-two">✳</span></div></div></section>
        <div className="bottom-caveat container"><CircleHelp size={17} /><p>This guide is research support, not an offer of admission. University pages and programme rules take precedence. <Link href="/methodology">Understand how the information was verified <ArrowDown size={14} /></Link></p></div>
      </main>
    </>
  );
}
