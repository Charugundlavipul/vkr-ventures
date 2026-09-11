const defaultCanopyIdxUrl =
  "https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=224d3725";

const idxUrl =
  process.env.NEXT_PUBLIC_CANOPY_IDX_URL?.trim() || defaultCanopyIdxUrl;

export function PropertySearch() {
  return (
    <div className="overflow-hidden border border-white/12 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.25)]">
      <iframe
        className="min-h-[760px] w-full bg-white max-md:min-h-[680px]"
        loading="lazy"
        src={idxUrl}
        title="Search current North Carolina homes for sale"
      />
      <p className="bg-[#f6f1e9] px-5 py-3 text-center text-xs leading-relaxed text-ink/58">
        Listing information is supplied through an authorized Canopy MLS participant IDX display.
        Information is deemed reliable but is not guaranteed.
      </p>
    </div>
  );
}
