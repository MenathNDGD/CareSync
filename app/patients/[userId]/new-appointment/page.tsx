import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.png"}
            height={1000}
            width={1000}
            alt="CareSync"
            className="h-10 mb-12 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
            setOpen={() => {}} // INFO: No need to set open
          />

          <p className="copyright mt-10 py-12">© 2024 CareSync</p>
        </div>
      </section>

      <Image
        src={"/assets/images/appointment-img.png"}
        height={1000}
        width={1000}
        alt="Appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
