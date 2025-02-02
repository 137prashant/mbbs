import Image from "next/image";
import MedicalCollege from "../../public/harvard-university-cambridge-usa 2.png";
import college from "../../public/college.jpeg";

export default function MedicalUniversities() {
  const universities = [
    {
      id: 1,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
      image: MedicalCollege, // Replace with actual image path
    },
    {
      id: 2,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
      image: MedicalCollege, // Replace with actual image path
    },
    {
      id: 3,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
      image: MedicalCollege, // Replace with actual image path
    },
  ];

  return (
    <section className="relative bg-[#437f7d] py-12 px-6">
      <div className=" inset-0 absolute  ">
        <Image
          src={college}
          alt="college"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="text-center mb-8">
        <h2 className="text-[16px] md:text-4xl font-bold text-white flex justify-center items-center">
          <span className="mb-[7px]">Explore</span>
          <div className="flex flex-col items-center text-[#1cb5bd] mx-[5px]">
            <span>Medical Universities</span>
            <span className="h-[3px] bg-[#1cb5bd] w-full"></span>
          </div>
          <span>in Uzbekistan</span>
        </h2>
        <p className="text-white text-[14px] md:text-lg mt-2">
          We are affiliated with these medical universities
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {universities.map((uni) => (
          <div
            key={uni.id}
            className="relative max-w-[410px] p-7 bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <Image
                src={uni.image}
                className=" object-cover"
              />
              <div className="border-t-8 absolute top-[200px] left-[5px] border-2 border-[#1cb5bd] rounded-lg flex flex-row items-center bg-white py-3 px-3  ">
                <div className="rounded-full border-2 border-[#1cb5bd] p-1">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4.84375L19.4525 5.1175L6.95375 11.25L6.25 11.6013V13.75H33.75V11.6013L33.0462 11.25L20.5463 5.1175L20 4.84375ZM20 7.65625L27.3438 11.25H12.6562L20 7.65625ZM8.75 15V27.5H7.5V30H32.5V27.5H31.25V15H28.75V27.5H26.25V15H23.75V27.5H21.25V15H18.75V27.5H16.25V15H13.75V27.5H11.25V15H8.75ZM5 31.25V33.75H35V31.25H5Z"
                      fill="#1CB5BD"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold ml-2 text-gray-800">
                  {uni.name}
                </h3>
              </div>
            </div>
            <div className="">
              <p className="text-gray-800 text-lg font-bold mt-12 pl-3">
                Fee Structure:{" "}
                <span className="text-gray-600 font-normal">{uni.fee}</span>
              </p>
              <p className="text-gray-800 mt-3 text-lg font-bold pl-3">
                Duration:{" "}
                <span className="text-gray-600 font-normal">
                  {uni.duration}
                </span>
              </p>
              <div className="h-[1px] bg-slate-300 mt-4 w-full"></div>
              <div className="flex justify-between mt-4">
                <button className="bg-white text-[#1cb5bd] border border-[#1cb5bd] px-10 py-3 rounded-xl hover:text-teal-600 hover:border-teal-600">
                  Read More
                </button>
                <button className="bg-[#1cb5bd] text-white px-10 py-3 rounded-xl hover:bg-teal-600">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
