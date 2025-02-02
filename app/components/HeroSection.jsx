import Image from "next/image";
import doctor from "../../public/doctor.png";
import whatsapp from "../../public/Whatsapp.png";
import college from "../../public/college.jpeg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#498489] text-white">
      {/* Background Image */}
      <div className=" inset-0 absolute  ">
        <Image
          src={college}
          alt="college"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="absolute top-[40%] left-[-45px] transform -rotate-90 sm:visible invisible">
        <button className="bg-teal-400 hover:bg-teal-500 px-6 py-3 rounded-lg font-semibold">
          Apply Now
        </button>
      </div>
      <div>
        <Image
          src={whatsapp}
          alt="whatsapp"
          className="absolute bottom-[-40px] z-20 right-3"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12 lg:flex lg:items-center h-[525px]">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="flex items-center">
            <div className="w-[7px] h-[350px] bg-[#45e5ee]"></div>
            <div className="ml-4">
              <h1 className="text-4xl lg:text-[3rem] font-semibold leading-[1.2]">
                Pursue <span className="text-darkGreen">MBBS</span> In{" "}
                <span className="text-darkGreen">Uzbekistan</span>
                Top Universities
              </h1>
              <ul className="mt-6 space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2860)">
                        <path
                          d="M11.1438 0.183594C4.99892 0.183594 0 5.18252 0 11.3274C0 17.4723 4.99892 22.4712 11.1438 22.4712C17.2887 22.4712 22.2876 17.4723 22.2876 11.3274H19.7803C19.7803 16.0895 15.9059 19.9638 11.1438 19.9638C6.38169 19.9638 2.50736 16.0895 2.50736 11.3274C2.50736 6.56528 6.38169 2.69095 11.1438 2.69095V0.183594ZM18.0158 2.5823L11.0463 11.2847L7.78952 8.61574L5.93036 10.8779L10.3331 14.4885C10.4827 14.6119 10.6553 14.7043 10.8409 14.7602C11.0266 14.8162 11.2215 14.8347 11.4143 14.8145C11.6072 14.7944 11.7941 14.7361 11.9642 14.6429C12.1342 14.5498 12.2841 14.4238 12.4049 14.2721L20.3022 4.41267L18.0158 2.5823Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2860">
                          <rect
                            width="22.2876"
                            height="22.2876"
                            fill="white"
                            transform="translate(0 0.183594)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Low-cost medical education starting from INR 5 Lacs*
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2860)">
                        <path
                          d="M11.1438 0.183594C4.99892 0.183594 0 5.18252 0 11.3274C0 17.4723 4.99892 22.4712 11.1438 22.4712C17.2887 22.4712 22.2876 17.4723 22.2876 11.3274H19.7803C19.7803 16.0895 15.9059 19.9638 11.1438 19.9638C6.38169 19.9638 2.50736 16.0895 2.50736 11.3274C2.50736 6.56528 6.38169 2.69095 11.1438 2.69095V0.183594ZM18.0158 2.5823L11.0463 11.2847L7.78952 8.61574L5.93036 10.8779L10.3331 14.4885C10.4827 14.6119 10.6553 14.7043 10.8409 14.7602C11.0266 14.8162 11.2215 14.8347 11.4143 14.8145C11.6072 14.7944 11.7941 14.7361 11.9642 14.6429C12.1342 14.5498 12.2841 14.4238 12.4049 14.2721L20.3022 4.41267L18.0158 2.5823Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2860">
                          <rect
                            width="22.2876"
                            height="22.2876"
                            fill="white"
                            transform="translate(0 0.183594)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  No Donation & Capitation fees
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2860)">
                        <path
                          d="M11.1438 0.183594C4.99892 0.183594 0 5.18252 0 11.3274C0 17.4723 4.99892 22.4712 11.1438 22.4712C17.2887 22.4712 22.2876 17.4723 22.2876 11.3274H19.7803C19.7803 16.0895 15.9059 19.9638 11.1438 19.9638C6.38169 19.9638 2.50736 16.0895 2.50736 11.3274C2.50736 6.56528 6.38169 2.69095 11.1438 2.69095V0.183594ZM18.0158 2.5823L11.0463 11.2847L7.78952 8.61574L5.93036 10.8779L10.3331 14.4885C10.4827 14.6119 10.6553 14.7043 10.8409 14.7602C11.0266 14.8162 11.2215 14.8347 11.4143 14.8145C11.6072 14.7944 11.7941 14.7361 11.9642 14.6429C12.1342 14.5498 12.2841 14.4238 12.4049 14.2721L20.3022 4.41267L18.0158 2.5823Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2860">
                          <rect
                            width="22.2876"
                            height="22.2876"
                            fill="white"
                            transform="translate(0 0.183594)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Practice in India & across the world
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2860)">
                        <path
                          d="M11.1438 0.183594C4.99892 0.183594 0 5.18252 0 11.3274C0 17.4723 4.99892 22.4712 11.1438 22.4712C17.2887 22.4712 22.2876 17.4723 22.2876 11.3274H19.7803C19.7803 16.0895 15.9059 19.9638 11.1438 19.9638C6.38169 19.9638 2.50736 16.0895 2.50736 11.3274C2.50736 6.56528 6.38169 2.69095 11.1438 2.69095V0.183594ZM18.0158 2.5823L11.0463 11.2847L7.78952 8.61574L5.93036 10.8779L10.3331 14.4885C10.4827 14.6119 10.6553 14.7043 10.8409 14.7602C11.0266 14.8162 11.2215 14.8347 11.4143 14.8145C11.6072 14.7944 11.7941 14.7361 11.9642 14.6429C12.1342 14.5498 12.2841 14.4238 12.4049 14.2721L20.3022 4.41267L18.0158 2.5823Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2860">
                          <rect
                            width="22.2876"
                            height="22.2876"
                            fill="white"
                            transform="translate(0 0.183594)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Worldwide accepted the degree
                </li>
              </ul>
            </div>
          </div>
          <button className="mt-6 ml-4 bg-teal-400 hover:bg-teal-500  px-6 py-3 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="bg-darkGreen rounded-t-full absolute bottom-0 lg:right-12 lg:block hidden  z-9 h-[366px] w-[375px]"></div>
          <div className="absolute bottom-0 lg:right-12 lg:block hidden  z-10 ">
            <Image src={doctor} alt="Doctor" width={375} />
          </div>
          <div className="absolute top-[130px] right-[320px] lg:flex  bg-white text-darkGreen p-4 rounded-lg shadow-md hidden items-center">
            <div>
              <span className="font-semibold">2400+</span> <br />
              Happy Students
            </div>
            <div className="ml-4">
              ⭐⭐⭐⭐⭐ <br />
              (4.7 Stars)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
