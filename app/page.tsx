import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { getPatients } from "./lib/patients";

export default async function Page() {
  const patients = await getPatients();

  return (
    <div className="min-h-screen bg-bg pt-[120px]">
      <Navbar />
      <main className="px-6 pb-6 flex gap-6">
        <Sidebar patients={patients} />

        {/* Center panel */}
        <div className="flex-1 rounded-xl bg-white" />

        {/* Right panel */}
        <div className="w-[320px] rounded-xl bg-white" />
      </main>
    </div>
  );
}
