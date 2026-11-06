"use client";

import type { Institution } from "@/lib/research";
import { collegeCount, institutions, statusLabels, universityCount } from "@/lib/research";
import { ArrowRight, ArrowUpRight, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { BookmarkButton } from "./bookmark-button";

export function InstitutionCard({ institution, saved, onSavedChange }: { institution: Institution; saved: boolean; onSavedChange?: (saved: boolean) => void }) {
  return (
    <article className="university-card" style={{ "--card-accent": institution.accent } as CSSProperties}>
      <div className="university-card-top">
        <span className="university-emblem" aria-hidden="true"><span>{institution.initial}</span></span>
        <BookmarkButton slug={institution.slug} initialSaved={saved} onChange={onSavedChange} />
      </div>
      <div className="card-identity"><span className={`card-type ${institution.category === "college" ? "is-college" : ""}`}>{institution.category === "college" ? "COLLEGE" : "UNIVERSITY"}</span><span className="card-location"><MapPin size={13} strokeWidth={2} /> {institution.city}</span><span className="card-area">{institution.area}</span></div>
      <h3><Link href={`/universities/${institution.slug}`}>{institution.name}</Link></h3>
      <p className="card-description">{institution.description}</p>
      <div className={`research-status status-${institution.status}`}><span className="status-light" />{statusLabels[institution.status]}</div>
      <div className="card-metrics">
        <div><span>APPLICATION FEE</span><strong>{institution.feeSummary}</strong></div>
        <div><span>BANGLADESH DEADLINE</span><strong>{institution.deadlineSummary}</strong></div>
      </div>
      <div className="card-footer"><span><span className="card-footer-dot" />{institution.omptSummary}</span><Link href={`/universities/${institution.slug}`}>View research <ArrowUpRight size={17} /></Link></div>
    </article>
  );
}

const STORAGE_KEY = "go-abroad-bd-shortlist";
const CHANGE_EVENT = "go-abroad-bd-shortlist-updated";

function readShortlist(): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

type Filter = "all" | "university" | "college" | "dates" | "ompt" | "saved";
export function UniversityDirectory({ initialSavedSlugs = [], shortlistOnly = false }: { initialSavedSlugs?: string[]; shortlistOnly?: boolean }) {
  const [savedSlugs, setSavedSlugs] = useState(initialSavedSlugs);

  useEffect(() => {
    const sync = () => setSavedSlugs(readShortlist());
    sync();
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(shortlistOnly ? "saved" : "all");
  const [city, setCity] = useState("all");
  const cities = ["Vilnius", "Kaunas", "Klaipėda", "Panevėžys", "Šiauliai", "Utena", "Alytus"];

  const filtered = useMemo(() => institutions.filter((institution) => {
    const term = query.trim().toLocaleLowerCase();
    const matchesSearch = !term || `${institution.name} ${institution.abbreviation} ${institution.city} ${institution.area}`.toLocaleLowerCase().includes(term);
    const matchesCity = city === "all" || institution.city.includes(city);
    const matchesFilter = shortlistOnly || filter === "saved"
      ? savedSlugs.includes(institution.slug)
      : filter === "dates"
        ? institution.status === "dates"
        : filter === "ompt"
          ? ["vilnius-university", "vilnius-tech", "vytautas-magnus-university"].includes(institution.slug)
          : true;
    return matchesSearch && matchesCity && matchesFilter;
  }), [query, filter, city, savedSlugs, shortlistOnly]);

  function handleSaved(slug: string, saved: boolean) {
    setSavedSlugs((current) => saved ? [...new Set([...current, slug])] : current.filter((item) => item !== slug));
  }

  function reset() { setQuery(""); setFilter(shortlistOnly ? "saved" : "all"); setCity("all"); }
  const total = institutions.length;

  return (
    <div className="directory">
      {!shortlistOnly && <div className="directory-tabs" role="group" aria-label="Filter universities">
        <button type="button" className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All institutions <span>{total.toString().padStart(2, "0")}</span></button>
        <button type="button" className={filter === "university" ? "active" : ""} onClick={() => setFilter("university")}>Universities <span>{universityCount}</span></button>
        <button type="button" className={filter === "college" ? "active" : ""} onClick={() => setFilter("college")}>Colleges <span>{collegeCount}</span></button>
        <button type="button" className={filter === "dates" ? "active" : ""} onClick={() => setFilter("dates")}>2027 dates live</button>
        <button type="button" className={filter === "ompt" ? "active" : ""} onClick={() => setFilter("ompt")}>Entrance test noted</button>
        <button type="button" className={filter === "saved" ? "active" : ""} onClick={() => setFilter("saved")}>Saved <span>{savedSlugs.length}</span></button>
      </div>}
      <div className="directory-toolbar">
        <label className="directory-search"><Search size={19} strokeWidth={1.8} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search university, city or subject..." aria-label="Search universities" />{query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={16} /></button>}</label>
        <label className="directory-city"><SlidersHorizontal size={17} strokeWidth={1.8} /><span className="sr-only">Filter by city</span><select value={city} onChange={(event) => setCity(event.target.value)}><option value="all">All cities</option>{cities.map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
      </div>
      <div className="directory-result-line"><span><strong>{filtered.length.toString().padStart(2, "0")}</strong> {shortlistOnly ? "saved institutions" : filter === "college" ? "colleges found" : "institutions found"}</span><span>Official-source research · 22 institutions</span></div>
      {filtered.length ? <div className="university-grid">{filtered.map((institution) => <InstitutionCard key={institution.slug} institution={institution} saved={savedSlugs.includes(institution.slug)} onSavedChange={(saved) => handleSaved(institution.slug, saved)} />)}</div> : <div className="directory-empty"><div className="empty-symbol">✦</div><h3>{shortlistOnly || filter === "saved" ? "Your shortlist is waiting." : "No institutions match those filters."}</h3><p>{shortlistOnly || filter === "saved" ? "Explore universities and colleges, then tap the heart to keep your research in one place." : "Try another search term or clear your filters to see all institutions."}</p>{shortlistOnly || filter === "saved" ? <Link href="/#universities" className="button button-navy">Browse all institutions <ArrowRight size={17} /></Link> : <button type="button" className="button button-navy" onClick={reset}>Clear filters <ArrowRight size={17} /></button>}</div>}
    </div>
  );
}
