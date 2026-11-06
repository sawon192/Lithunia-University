"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

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

export function BookmarkButton({ slug, initialSaved, variant = "icon", onChange }: {
  slug: string;
  initialSaved: boolean;
  variant?: "icon" | "full";
  onChange?: (saved: boolean) => void;
}) {
  const [saved, setSaved] = useState(initialSaved);

  useEffect(() => {
    const sync = () => setSaved(readShortlist().includes(slug));
    sync();
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [slug]);

  function toggle() {
    const current = readShortlist();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(next.includes(slug));
      window.dispatchEvent(new Event(CHANGE_EVENT));
      onChange?.(next.includes(slug));
    } catch {
      // Browser storage may be unavailable in private/restricted browsing modes.
    }
  }

  return (
    <span className="bookmark-wrap">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={saved}
        aria-label={saved ? "Remove from shortlist" : "Add to shortlist"}
        title={saved ? "Remove from shortlist" : "Add to shortlist"}
        className={`bookmark-button ${variant === "full" ? "bookmark-full" : "bookmark-icon"} ${saved ? "is-saved" : ""}`}
      >
        <Heart size={18} strokeWidth={1.8} fill={saved ? "currentColor" : "none"} />
        {variant === "full" && <span>{saved ? "Saved to shortlist" : "Save to shortlist"}</span>}
      </button>
    </span>
  );
}
