const iconClassName = "h-4 w-4";

type NavItemProps = {
  icon: string;
  label: string;
  active?: boolean;
};

const NavItem = ({ icon, label, active }: NavItemProps) => {
  return (
    <button
      className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm transition
        ${active ? "bg-[#01F0D0]" : "hover:bg-[#01F0D0]"}`}
    >
      <img src={icon} alt={label} className={iconClassName} />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-[18px] z-50 px-[18px]">
      <nav className="mx-auto flex h-[72px] max-w-[1564px] items-center justify-between rounded-[70px] border border-gray-200 bg-white px-8">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/TestLogo.svg"
            alt="TechCare"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation items */}
        <div className="mx-10 flex flex-1 items-center justify-center gap-16 text-[#072635]">
          <NavItem icon="/home_icon.svg" label="Overview" />
          <NavItem icon="/patient_icon.svg" label="Patients" active />
          <NavItem icon="/calendar_icon.svg" label="Schedule" />
          <NavItem icon="/chat_icon.svg" label="Message" />
          <NavItem icon="/credit_card_icon.svg" label="Transactions" />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-8 text-[#072635]">
          <div className="flex items-center gap-3 pr-4">
            <img
              src="/senior-woman1.png"
              alt="doctor"
              className="rounded-full object-cover"
              width={50}
              height={50}
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">
                Dr. Jose Simmons
              </div>
              <div className="text-xs text-gray-500">
                General Practitioner
              </div>
            </div>
          </div>

          <div className="h-6 w-px bg-gray-200" />

          <button className="text-gray-500 hover:text-gray-700">
            <img src="/settings_icon.svg" alt="settings" className={iconClassName} />
          </button>

          <button>
            <img src="/more_vert_icon.svg" alt="more" className={iconClassName} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
