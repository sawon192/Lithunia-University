import { BookmarkButton } from "@/components/bookmark-button";
import { SiteHeader } from "@/components/site-shell";
import { getInstitution, researchSections, sources, institutions, statusLabels, VERIFIED_ON } from "@/lib/research";
import type { Fact, Institution, SourceKey } from "@/lib/research";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check, Clock3, ExternalLink, FileCheck2, GraduationCap, Heart, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const institution = getInstitution(slug);
  return { title: institution ? `${institution.name} · 2027 Admission Research` : "Institution not found", description: institution ? `Official-source admission research for ${institution.name}: Bangladesh eligibility, 2027 deadlines, fees, programmes and entrance tests.` : undefined };
}

function SourcePills({ keys }: { keys?: SourceKey[] }) {
  if (!keys?.length) return null;
  return <span className="fact-sources">{keys.map((key) => <a key={key} href={sources[key].url} target="_blank" rel="noopener noreferrer" title={sources[key].label}><ExternalLink size={12} /> {sources[key].label}</a>)}</span>;
}

function FactItem({ item }: { item: Fact }) {
  return <div className={`fact-item fact-${item.status ?? "published"}`}><div className="fact-text">{item.text}</div><SourcePills keys={item.sources} /></div>;
}

const roleLabel: Record<Institution["category"], string> = { university: "UNIVERSITY RESEARCH PROFILE", college: "COLLEGE RESEARCH PROFILE" };

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = getInstitution(slug);
  if (!university) notFound();
  const saved = false; // The client reads the browser-only shortlist from localStorage.
  const index = institutions.findIndex((item) => item.slug === university.slug);
  const next = institutions[(index + 1) % institutions.length];
  const category = university.category ?? "university";

  return <>
    <SiteHeader />
    <main className="detail-page" style={{ "--detail-accent": university.accent } as CSSProperties}>
      <section className="detail-hero"><div className="container">
        <div className="detail-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#universities">Universities</Link><span>/</span><strong>{university.abbreviation}</strong></div>
        <div className="detail-hero-main"><div className="detail-hero-copy"><div className="detail-eyebrow"><span className="detail-index">{String(index + 1).padStart(2, "0")} / {institutions.length.toString().padStart(2, "0")}</span><span className="detail-eyebrow-line" /> {roleLabel[category]}</div><h1>{university.name}</h1><p>{university.description}</p><div className="detail-hero-actions"><BookmarkButton slug={university.slug} initialSaved={saved} variant="full" /><a href="#research-table" className="detail-jump">Explore the research <ArrowRight size={17} /></a></div></div><div className="detail-emblem" aria-hidden="true"><div className="detail-emblem-inner">{university.initial}</div><span>EST. RESEARCH<br />2027 / 28</span></div></div>
        <div className="detail-hero-bottom"><span><MapPin size={15} /> {university.city}, Lithuania</span><span><Clock3 size={15} /> Last researched {VERIFIED_ON}</span><span className={`detail-status status-${university.status}`}><span className="status-light" />{statusLabels[university.status]}</span></div>
      </div></section>

      <div className="detail-subnav"><div className="container"><a href="#overview">Overview</a><a href="#research-table">The 8-point research</a><a href="#programmes">Programmes</a><a href="#bangladesh">Bangladesh lens</a><a href="#official-sources">Official sources</a></div></div>

      <div className="container detail-layout" id="overview">
        <aside className="detail-sidebar"><div className="sidebar-card"><span className="sidebar-label">AT A GLANCE <span>↗</span></span><div className="sidebar-line"><span>Application fee</span><strong>{university.feeSummary}</strong></div><div className="sidebar-line"><span>Bangladesh deadline</span><strong>{university.deadlineSummary}</strong></div><div className="sidebar-line"><span>OMPT / test</span><strong>{university.omptSummary}</strong></div><div className="sidebar-line"><span>City</span><strong>{university.city}</strong></div><div className="sidebar-warning"><ShieldCheck size={17} /><span>Dates and prices are labelled by the year actually published. Review the linked source before paying.</span></div></div><div className="sidebar-helper"><BookOpen size={18} /><div><strong>How to read this report</strong><p>Each detail links to its official source. Amber means an older or undated publication; grey means not officially confirmed.</p></div></div><Link className="sidebar-back" href="/#universities"><ArrowLeft size={16} /> All universities</Link></aside>

        <div className="detail-main"><div className="detail-intro"><div className="section-kicker"><span>THE FACTS</span> SOURCE-LED REPORT</div><h2>Everything to know <em>before you apply.</em></h2><p>The requested eight admission areas, checked against official university and programme pages. The table is a research snapshot, not a substitute for the live application portal.</p><div className="detail-legend"><span><i className="legend-published" /> Officially published</span><span><i className="legend-earlier" /> Earlier / year not fixed</span><span><i className="legend-unconfirmed" /> Not officially confirmed</span></div></div>

        <section id="research-table" className="table-section" aria-labelledby="table-title"><div className="table-title-row"><h3 id="table-title">Admission research table</h3><span>01 — 08</span></div><div className="research-table-wrap"><table className="research-table"><thead><tr><th scope="col">No.</th><th scope="col">Required information</th><th scope="col">Verified details & official sources</th></tr></thead><tbody>{researchSections.map((section, rowIndex) => <tr key={section.key}><td className="table-number">{String(rowIndex + 1).padStart(2, "0")}</td><th scope="row">{section.title}</th><td className="table-details">{university.facts[section.key].map((item, factIndex) => <FactItem key={`${section.key}-${factIndex}`} item={item} />)}</td></tr>)}</tbody></table></div><p className="table-footnote"><BadgeCheck size={16} /> Last checked {VERIFIED_ON}. Where the university has not published an exact 2027 rule, it is marked “Not officially confirmed”.</p></section>

        <section id="programmes" className="detail-section"><div className="detail-section-heading"><div><div className="section-kicker"><span>EXPLORE</span> PROGRAMMES</div><h2>Programme <em>spotlight.</em></h2><p>Selected, source-linked examples — not a claim that these are the complete university catalogue. Use the official catalogue links below for every available programme.</p></div><span className="detail-section-symbol"><GraduationCap size={27} /></span></div><div className="programme-table-wrap"><table className="programme-table"><thead><tr><th>Programme / level</th><th>Duration · language</th><th>Intake</th><th>Published tuition</th><th>Source</th></tr></thead><tbody>{university.featuredProgrammes.map((programme) => <tr key={programme.name}><td><strong>{programme.name}</strong><span className="programme-level">{programme.level}</span></td><td>{programme.duration}<small>{programme.language}</small></td><td>{programme.intake}</td><td className="programme-fee">{programme.tuition}</td><td><a href={sources[programme.source].url} target="_blank" rel="noopener noreferrer" aria-label={`Official source for ${programme.name}`}><ArrowUpRight size={18} /></a></td></tr>)}</tbody></table></div></section>

        <section id="bangladesh" className="detail-section bangladesh-section"><div className="section-kicker"><span>FOR YOU</span> BANGLADESH APPLICANT LENS</div><h2>What this means <em>for you.</em></h2><div className="bangladesh-box"><div className="bd-box-head"><span className="bd-flag"><i /><i /></span><div><span>ELIGIBILITY SNAPSHOT</span><h3>Bangladesh student eligibility</h3></div></div><p>{university.eligibility}</p><div className="bd-box-note"><FileCheck2 size={16} /> Eligibility is conditional, not an admission guarantee. Check qualification recognition and your chosen programme.</div></div><div className="detail-two-col"><div className="detail-list-card"><span className="mini-heading"><Check size={17} /> BEST AVAILABLE PROGRAMMES</span><p>Research-based suggestions for matching backgrounds; not official recommendations or guaranteed offers.</p><ul>{university.bestFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="detail-list-card"><span className="mini-heading"><Heart size={17} /> IMPORTANT ADMISSION NOTES</span><div className="notes-list">{university.importantNotes.map((item, noteIndex) => <FactItem key={noteIndex} item={item} />)}</div></div></div></section>

        <section id="official-sources" className="detail-section official-section"><div className="section-kicker"><span>PROOF</span> THE ORIGINAL DOCUMENTS</div><h2>Official <em>sources.</em></h2><p>Open the university's own pages to verify your exact programme, citizenship category and intake before submitting or paying.</p><div className="official-links">{university.officialLinks.map((key) => <a key={key} href={sources[key].url} target="_blank" rel="noopener noreferrer"><span><ExternalLink size={17} />{sources[key].label}</span><ArrowUpRight size={19} /></a>)}</div></section>
        </div>
      </div>

      <div className="container detail-next"><div><span>NEXT UNIVERSITY <span>→</span></span><Link href={`/universities/${next.slug}`}>{next.name} <ArrowUpRight size={22} /></Link></div><Link href="/#universities" className="detail-next-all">Browse all {institutions.length} <ArrowRight size={17} /></Link></div>
    </main>
  </>;
}
