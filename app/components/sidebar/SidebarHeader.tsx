// components/sidebar/SidebarHeader.tsx

type SidebarHeaderProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

const SidebarHeader = ({ searchValue, onSearchChange }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-3 group">
      <h2 className="text-[33px] font-semibold whitespace-nowrap">Patients</h2>
      <div
        className="flex-1 overflow-hidden transition-[max-width,opacity] duration-200 max-w-0 opacity-0 group-hover:max-w-[220px] group-hover:opacity-100"
      >
        <input
          type="search"
          placeholder="Search patients"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          className="w-full rounded-full border border-mint/60 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 transition focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/40 pointer-events-none group-hover:pointer-events-auto"
        />
      </div>
      <button
        type="button"
        aria-label="Toggle search"
        className="text-gray-400 border-0 bg-transparent p-0"
      >
        🔍
      </button>
    </div>
  );
}


export default SidebarHeader;
