"use client";

import { useMemo, useState } from "react";
import SidebarHeader from "./SidebarHeader";
import PatientList from "./PatientList";

const Sidebar = ({ patients }: { patients: any[] }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPatients = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return patients;
    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(query)
    );
  }, [patients, searchValue]);

  return (
    <aside className="w-[280px] h-[calc(100vh-48px)] bg-white rounded-xl p-4 flex flex-col overflow-hidden">
      <SidebarHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <PatientList patients={filteredPatients} />
    </aside>
  );
}

export default Sidebar;
