// components/sidebar/PatientList.tsx
import PatientRow from "./PatientRow";

const PatientList = ({ patients }: { patients: any[] }) => {
  return (
    <div className="flex-1 overflow-y-auto pr-1 space-y-1">
      {patients.map((patient) => (
        <PatientRow key={patient.name} patient={patient} />
      ))}
    </div>
  );
}

export default PatientList
