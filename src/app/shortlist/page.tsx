import { SiteHeader } from "@/components/site-shell";
import { UniversityDirectory } from "@/components/university-directory";
import { ArrowLeft, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Your university shortlist", description: "Keep source-linked Lithuania university admission research in a shortlist saved in this browser." };

export default function ShortlistPage() {
  const slugs: string[] = [];
  return <><SiteHeader /><main className="simple-page"><section className="simple-hero"><div className="container"><Link href="/#universities" className="simple-back"><ArrowLeft size={16} /> All universities</Link><div className="section-kicker light-kicker"><span>YOUR DESK</span> SAVED RESEARCH</div><div className="simple-hero-row"><div><h1>Your <em>shortlist.</em></h1><p>Keep the universities you want to revisit together. Compare their verified requirements before taking the next step.</p></div><div className="simple-hero-icon"><Heart size={49} strokeWidth={1.15} /></div></div></div></section><section className="container shortlist-content"><div className="shortlist-tip"><ShieldCheck size={19} /><p>Saved universities are stored only in this browser on this device. Your saved list does not change admissions rules; always follow the university's live source pages.</p></div><UniversityDirectory initialSavedSlugs={slugs} shortlistOnly /></section></main></>;
}
