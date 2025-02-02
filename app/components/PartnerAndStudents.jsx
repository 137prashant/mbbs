import Image from "next/image";
import logo1 from "../../public/image 44.png";
import logo2 from "../../public/image 43.png";
import logo3 from "../../public/image 45.png";
import logo4 from "../../public/image 42.png";
import profile1 from "../../public/Ellipse 1520.png";
import profile2 from "../../public/Ellipse 1521.png";
import profile3 from "../../public/Ellipse 1522.png";

const PartnersAndStudents = () => {
  const partners = [logo1, logo2, logo3, logo4];

  const students = [
    {
      name: "John Doe",
      course: "MBBS",
      review:
        "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
      rating: 5,
      image: profile1,
    },
    {
      name: "Smitha Doe",
      course: "MBBS",
      review:
        "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
      rating: 4,
      image: profile2,
    },
    {
      name: "Jaquline Doe",
      course: "MBBS",
      review:
        "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
      rating: 5,
      image: profile3,
    },
  ];
  return (
    <>
      <div className="border border-t-8 border-[#16a8af] pt-[50px] mb-[40px] mx-[40px]">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners <span className="text-[#16a8af]">Universities</span>
          </h2>
          <p className="text-black mt-2">
            We are affiliated with these medical universities
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[100px] mb-16">
          {partners.map((partner, index) => (
            <Image key={index} src={partner} alt="Partner Logo" className=" " />
          ))}
        </div>
      </div>
      <section className="py-12 pt-0 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Happy <span className="text-[#16a8af] underline">Students</span>
          </h2>
          <p className="text-black mt-2 mb-[40px]">
            Hear What Our Students Have to Say
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {students.map((student, index) => (
            <div
              key={index}
              className="relative mt-[50px] bg-white p-6 rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={student.image}
                alt={student.name}
                className="absolute top-0 rounded-full border-4 border-white -mt-12"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-10">
                {student.name}
              </h3>
              <p className="text-gray-500 text-sm">{student.course}</p>
              <p className="text-gray-600 mt-2">{student.review}</p>
              <div className="mt-4 text-[#16a8af]">
                {"★".repeat(student.rating)} {"☆".repeat(5 - student.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PartnersAndStudents;
