import Image from "next/image";
import pano from "../../public/pana.png";
const Form = () => {
    return (
      <div className="bg-[#a0f5fa] flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        {/* SVG Placeholder */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
          <div className="  rounded-md flex items-center justify-center">
            <Image src={pano} alt="pano" />
          </div>
        </div>
  
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-6 text-center md:text-left">
            Get Personalized Guidance for Your MBBS Journey
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <div className="flex items-center gap-2 col-span-1 md:col-span-2 md:col-start-1">
              <select
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Your Mobile No."
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <input
              type="text"
              placeholder="Current City"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="w-[180px] bg-button-gradient md:col-span-2  hover:bg-sky-600 text-white font-medium p-3 rounded-md transition"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Form;