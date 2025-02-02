import Image from "next/image";
import doctorImg from "../../public/doctor img.png";
import student from "../../public/Rectangle.png";
import graduated from "../../public/Graduated.png";
import education from "../../public/Education.png";
import visa from "../../public/Rectangle1.png";
const WhyUzbekistanMedi = () => {
  const stats = [
    {
      id: 1,
      icon: student, // Replace with actual icons or images
      number: "12+",
      description: "Years of expertise",
    },
    {
      id: 2,
      icon: graduated, // Replace with actual icons or images
      number: "1500+",
      description: "Satisfied students counselled",
    },
    {
      id: 3,
      icon: education, // Replace with actual icons or images
      number: "10",
      description: "Universities affiliated with us!",
    },
    {
      id: 4,
      icon: visa, // Replace with actual icons or images
      number: "100+",
      description: "Visa Assistance",
    },
  ];
  return (
    <>
    <div className="bg-white p-6 md:p-12 lg:flex lg:items-center lg:justify-between">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6 pr-0 md:pr-16">
        <h2 className="text-2xl md:text-4xl font-bold">
          Why <span className="text-[#1cb5bd]">Uzbekistan Medi?</span>
        </h2>
        <div className="space-y-4">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="text-teal-500">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5026 41.125L9.79427 33.6833V21.9333L1.96094 17.625L23.5026 5.875L45.0443 17.625V33.2917H41.1276V19.7792L37.2109 21.9333V33.6833L23.5026 41.125ZM23.5026 24.8708L36.9172 17.625L23.5026 10.3792L10.088 17.625L23.5026 24.8708ZM23.5026 36.6698L33.2943 31.3823V23.9896L23.5026 29.375L13.7109 23.9896V31.3823L23.5026 36.6698Z"
                  fill="#1CB5BD"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">
                Guaranteed Admission with Low Fees
              </h3>
              <p className="text-gray-600">
                Admission to top MBBS universities in Uzbekistan with affordable
                fees for Indian students.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="text-teal-500">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6693 35.2513H31.3359V31.3346H15.6693V35.2513ZM15.6693 27.418H31.3359V23.5013H15.6693V27.418ZM11.7526 43.0846C10.6755 43.0846 9.75347 42.7011 8.98646 41.9341C8.21944 41.1671 7.83594 40.2451 7.83594 39.168V7.83464C7.83594 6.75755 8.21944 5.8355 8.98646 5.06849C9.75347 4.30148 10.6755 3.91797 11.7526 3.91797H27.4193L39.1693 15.668V39.168C39.1693 40.2451 38.7858 41.1671 38.0188 41.9341C37.2517 42.7011 36.3297 43.0846 35.2526 43.0846H11.7526ZM25.4609 17.6263V7.83464H11.7526V39.168H35.2526V17.6263H25.4609Z"
                  fill="#1CB5BD"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">
                Complete Support for Documentation
              </h3>
              <p className="text-gray-600">
                We provide end-to-end support for the necessary documentation
                required for MBBS admissions.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="text-teal-500">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7349 37.2096H25.162V34.7617C26.7939 34.468 28.1974 33.8315 29.3724 32.8523C30.5474 31.8732 31.1349 30.4207 31.1349 28.4951C31.1349 27.1242 30.7432 25.8676 29.9599 24.7253C29.1766 23.5829 27.6099 22.5874 25.2599 21.7388C23.3016 21.086 21.947 20.5148 21.1964 20.0253C20.4457 19.5357 20.0703 18.8666 20.0703 18.018C20.0703 17.1694 20.3722 16.5003 20.976 16.0107C21.5799 15.5211 22.453 15.2763 23.5953 15.2763C24.6398 15.2763 25.4557 15.5293 26.0432 16.0352C26.6307 16.5411 27.055 17.1694 27.3161 17.9201L30.4495 16.6471C30.0905 15.5048 29.4295 14.5093 28.4667 13.6607C27.5038 12.8121 26.4349 12.3388 25.2599 12.2409V9.79297H21.8328V12.2409C20.2009 12.5999 18.928 13.318 18.0141 14.3951C17.1002 15.4721 16.6432 16.6798 16.6432 18.018C16.6432 19.552 17.092 20.7923 17.9896 21.7388C18.8872 22.6853 20.2988 23.5013 22.2245 24.1867C24.2807 24.9374 25.7087 25.6065 26.5083 26.194C27.308 26.7815 27.7078 27.5485 27.7078 28.4951C27.7078 29.5721 27.3243 30.3636 26.5573 30.8695C25.7903 31.3754 24.8682 31.6284 23.7911 31.6284C22.7141 31.6284 21.7594 31.2938 20.9271 30.6247C20.0948 29.9556 19.4828 28.952 19.0911 27.6138L15.8599 28.8867C16.3168 30.4534 17.0267 31.7181 17.9896 32.681C18.9524 33.6438 20.2009 34.3048 21.7349 34.6638V37.2096ZM23.4974 43.0846C20.7884 43.0846 18.2425 42.5706 15.8599 41.5424C13.4773 40.5143 11.4047 39.119 9.64219 37.3565C7.87969 35.594 6.48438 33.5214 5.45625 31.1388C4.42812 28.7562 3.91406 26.2103 3.91406 23.5013C3.91406 20.7923 4.42812 18.2464 5.45625 15.8638C6.48438 13.4812 7.87969 11.4086 9.64219 9.64609C11.4047 7.88359 13.4773 6.48828 15.8599 5.46016C18.2425 4.43203 20.7884 3.91797 23.4974 3.91797C26.2064 3.91797 28.7523 4.43203 31.1349 5.46016C33.5175 6.48828 35.5901 7.88359 37.3526 9.64609C39.1151 11.4086 40.5104 13.4812 41.5385 15.8638C42.5667 18.2464 43.0807 20.7923 43.0807 23.5013C43.0807 26.2103 42.5667 28.7562 41.5385 31.1388C40.5104 33.5214 39.1151 35.594 37.3526 37.3565C35.5901 39.119 33.5175 40.5143 31.1349 41.5424C28.7523 42.5706 26.2064 43.0846 23.4974 43.0846ZM23.4974 39.168C27.871 39.168 31.5755 37.6503 34.6109 34.6148C37.6464 31.5794 39.1641 27.8749 39.1641 23.5013C39.1641 19.1277 37.6464 15.4232 34.6109 12.3878C31.5755 9.35234 27.871 7.83464 23.4974 7.83464C19.1238 7.83464 15.4193 9.35234 12.3839 12.3878C9.34844 15.4232 7.83073 19.1277 7.83073 23.5013C7.83073 27.8749 9.34844 31.5794 12.3839 34.6148C15.4193 37.6503 19.1238 39.168 23.4974 39.168Z"
                  fill="#1CB5BD"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">Affordable Fees</h3>
              <p className="text-gray-600">
                Studying abroad becomes easy with low tuition fees and
                reasonable living costs.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="text-teal-500">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6641 27.418H31.3307V26.3409C31.3307 24.9048 30.6127 23.7461 29.1766 22.8648C27.7404 21.9836 25.8474 21.543 23.4974 21.543C21.1474 21.543 19.2543 21.9836 17.8182 22.8648C16.3821 23.7461 15.6641 24.9048 15.6641 26.3409V27.418ZM23.4974 19.5846C24.5745 19.5846 25.4965 19.2011 26.2635 18.4341C27.0306 17.6671 27.4141 16.7451 27.4141 15.668C27.4141 14.5909 27.0306 13.6688 26.2635 12.9018C25.4965 12.1348 24.5745 11.7513 23.4974 11.7513C22.4203 11.7513 21.4983 12.1348 20.7312 12.9018C19.9642 13.6688 19.5807 14.5909 19.5807 15.668C19.5807 16.7451 19.9642 17.6671 20.7312 18.4341C21.4983 19.2011 22.4203 19.5846 23.4974 19.5846ZM3.91406 43.0846V7.83464C3.91406 6.75755 4.29757 5.8355 5.06458 5.06849C5.8316 4.30148 6.75365 3.91797 7.83073 3.91797H39.1641C40.2411 3.91797 41.1632 4.30148 41.9302 5.06849C42.6972 5.8355 43.0807 6.75755 43.0807 7.83464V31.3346C43.0807 32.4117 42.6972 33.3338 41.9302 34.1008C41.1632 34.8678 40.2411 35.2513 39.1641 35.2513H11.7474L3.91406 43.0846ZM10.0828 31.3346H39.1641V7.83464H7.83073V33.5378L10.0828 31.3346Z"
                  fill="#1CB5BD"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold">
                Free Counseling & Career Guidance
              </h3>
              <p className="text-gray-600">
                We offer personalized counseling and guidance to help students
                build a successful medical career.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-[#1cb5bd] text-white font-semibold rounded-lg hover:bg-teal-600">
          Read More
        </button>
      </div>
      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-wrap gap-4 justify-center">
        <Image src={doctorImg} alt="doctor" width={600} height={500} />
      </div>
    </div>
     <section className="py-[50px] pt-[90px] bg-[#f5f5f7]">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
         {stats.map((stat) => (
           <div
             key={stat.id}
             className=" relative bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center"
           >
             <div className="absolute top-[-50px] w-[120px] h-[120px] shadow-lg bg-white text-blue-500 flex items-center justify-center rounded-full text-2xl">
               <Image src={stat.icon} alt={stat.description}  />
             </div>
             <h3 className="text-4xl mt-[50px] font-bold text-[#1cb5bd]">{stat.number}</h3>
             <p className="text-black mt-2">{stat.description}</p>
           </div>
         ))}
       </div>
     </div>
   </section>
   </>
  );
};

export default WhyUzbekistanMedi;
