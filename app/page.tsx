import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.png"}
            height={1000}
            width={1000}
            alt="CareSync"
            className="h-10 mb-12 w-fit"
          />

          <PatientForm />

          <div className="flex justify-between mt-20 text-14-regular">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CareSync
            </p>
            <Link href={"/?admin=true"} className="text-green-500 ">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={"/assets/images/onboarding-img.png"}
        height={1000}
        width={1000}
        alt="Patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
