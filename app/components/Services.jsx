import Image from "next/image";
import card1 from "../../public/two.png";
import card2 from "../../public/one.png";
import card3 from "../../public/Card 03.png";
import card4 from "../../public/Card 5.png";
import card5 from "../../public/Card 6.png";
import card6 from "../../public/Card 4.png";

const Services = () => {

  const services = [
  {
    title: 'Admission',
    description: 'Get the guaranteed admission to top university.',
    image: card1,
  },
  {
    title: 'Airport Pickup',
    description: 'Get picked up at airport by our representative.',
    image: card2,
  },
  {
    title: 'Visa Process',
    description: 'Fill the visa applications followed by universities guidelines.',
    image: card3,
  },
  {
    title: 'Documentation',
    description: 'Verification of legalized documents.',
    image: card4,
  },
  {
    title: 'Accommodation',
    description: 'Stay in the dormitories with a safe environment.',
    image: card5,
  },
  {
    title: 'Free Counseling',
    description: 'Get free counseled by our reputed experts.',
    image: card6,
  },
];
  
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16  lg:px-32 bg-gradient-to-r from-sky-100 to-sky-400">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Valuable <span className="text-[#1eaeb6] underline">Services</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Image src={service.image} alt={service.title}  />
            <h3 className="text-xl font-semibold mt-4 text-[#1cb5bd]">{service.title}</h3>
            <p className="text-black mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;