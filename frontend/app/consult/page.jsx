import React from "react";
import Image from "next/image";
import Therapist from "../../public/1.png";
import Psych from "../../public/2.png";
// import { title } from "process";

const Page = () => {
  const doctors = [
    {
      image: Psych,
      title: "Name: Dr. Ram Hari Prasai",
      qualification: "Qualification: MBBS, MD (Neuropsychiatrist)",
      expertise: "Expertise: Substance Abuse",
      clinic: "Clinic: HAMS Hospital",
    },
    {
      image: Psych,
      title: "Name: Dr. Ram Hari Prasai",
      qualification: "Qualification: MBBS, MD (Neuropsychiatrist)",
      expertise: "Expertise: Substance Abuse",
      clinic: "Clinic: HAMS Hospital",
    },
    {
      image: Psych,
      title: "Name: Dr. Ram Hari Prasai",
      qualification: "Qualification: MBBS, MD (Neuropsychiatrist)",
      expertise: "Expertise: Substance Abuse",
      clinic: "Clinic: HAMS Hospital",
    },
  ];

  return (
    <div className="flex items-start justify-around mt-10  ">
      <div className="flex flex-col items-center w-1/2">
        <span className="text-sky-500 text-2xl font-bold mb-10">
          Nearby Therapists
        </span>
        {doctors.map((doctor) => (
          <div
            className="flex justify-center items-center  my-4 w-full   gap-6"
            key={doctor.title}
          >
            <span className="w-1/5 ">
              <Image
                src={doctor.image}
                width="200"
                height="200"
                alt="doctor"
                className="rounded-full"
              />
            </span>

            <div className="flex flex-col   w-2/5">
              <span className="font-semibold">{doctor.title}</span>

              <span>{doctor.clinic}</span>
              <span>{doctor.expertise}</span>
              <button className="bg-sky-500 text-white w-1/2 p-1 rounded-full mt-2 hover:bg-sky-600">
                Book A Session
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center w-1/2">
        <span className="text-sky-500 text-2xl font-bold">
          Nearby Psychiatrists
        </span>
      </div>
    </div>
  );
};

export default Page;