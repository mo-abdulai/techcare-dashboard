// components/sidebar/PatientRow.tsx
const PatientRow = ({ patient }: { patient: any }) => {
  return (
    <div className="flex items-center gap-[20px] px-3 py-2 rounded-xl hover:bg-[#D8FCF7]">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="rounded-full object-cover"
        width={48}
        height={48}
      />

      <div className="flex-1">
        <p className="text-sm font-semibold leading-tight">
          {patient.name}
        </p>
        <p className="text-xs text-muted">
          {patient.gender}, {patient.age}
        </p>
      </div>

      <span className="text-lg text-gray-400">⋯</span>
    </div>
  );
}


export default PatientRow
