const defaultCanopyIdxUrl =
  "https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=224d3725";

const idxUrl =
  process.env.NEXT_PUBLIC_CANOPY_IDX_URL?.trim() || defaultCanopyIdxUrl;

export function PropertySearch() {
  return (
    <div className="overflow-hidden border border-white/12 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between gap-8 border-b border-ink/10 bg-[#f6f1e9] px-6 py-5 text-ink max-md:grid max-md:gap-4 max-md:px-4">
        <div className="grid gap-1">
          <strong className="font-display text-2xl leading-none">Narrow your search to see every match.</strong>
          <span className="max-w-[48rem] text-sm leading-relaxed text-ink/60">
            Up to 100 listings are displayed per search. Refine the location, price, bedrooms,
            or other criteria to view the full inventory in smaller result sets.
          </span>
        </div>
        <a
          className="shrink-0 border border-ink/15 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition hover:bg-ink hover:text-paper"
          href={idxUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open full search
        </a>
      </div>
      <iframe
        className="min-h-[760px] w-full bg-white max-md:min-h-[680px]"
        loading="lazy"
        src={idxUrl}
        title="Search current North Carolina homes for sale"
      />
      <p className="bg-[#f6f1e9] px-5 py-3 text-center text-xs leading-relaxed text-ink/58">
        Listing information is supplied through an authorized MLS participant display.
        Information is deemed reliable but is not guaranteed.
      </p>
    </div>
  );
}
