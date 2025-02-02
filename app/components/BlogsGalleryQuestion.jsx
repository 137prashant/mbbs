"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilepic from "../../public/image 37.png";
import profilepic1 from "../../public/image 40.png";
const BlogsGalleryQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full">
      {/* Blog Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold">
          Our Latest <span className="text-[#1cb5bd]">Blogs</span>
        </h2>
        <p className="text-gray-600">
          Empowering Future Doctors with Valuable Information!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="border border-[#1cb5bd] rounded-lg shadow-md max-w-sm p-4"
            >
              <div className="  mb-4">
                <Image src={profilepic} className="" alt="profilepic" />
              </div>
              <h3 className="font-semibold text-start">
                5 Reasons to Study MBBS in Russia
              </h3>
              <p className="text-sm text-start text-gray-600">
                Discover why Uzbekistan is the perfect destination for aspiring
                doctors with affordable fees and globally recognized degrees.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-gray-500 text-sm">Tracey Wilson</span>
                <span className="text-gray-400 ml-auto text-sm">
                  Dec 26, 2024
                </span>
              </div>
              <button className="mt-4 bg-[#1cb5bd] text-white px-4 py-2 rounded-lg">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold">
          Recent Photo <span className="text-[#1cb5bd]">Gallery</span>
        </h2>
        <p className="text-gray-600 text-sm">
          Celebrating Achievements, One Click at a Time!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="rounded-lg">
              <Image src={profilepic1} alt="profilepic" />
            </div>
          ))}
        </div>
        <button className="mt-4 text-[#1cb5bd]">View More</button>
      </section>

      {/* FAQ Section */}
      <section className="text-center my-8 py-12 px-4 sm:px-8 md:px-16  lg:px-[300px]">
        <h2 className="text-3xl font-bold">
          Frequently <span className="text-[#1cb5bd]">Asked Questions</span>
        </h2>
        <p className="text-gray-600">
          Celebrating Achievements, One Click at a Time!
        </p>
        <div className="mt-6 space-y-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold flex justify-between items-center"
              >
                <span>
                  Q. Is an MBBS degree from Georgia recognized globally?
                </span>
                <span>
                  {openIndex === index ? (
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2757)">
                        <path
                          d="M15.3618 6.57802L14.2395 5.46497L8.29157 10.9879L2.68926 5.11466L1.50154 6.15765L8.22151 13.298L15.3618 6.57802Z"
                          fill="#16A8AF"
                        />
                      </g>
                      <g clip-path="url(#clip1_4_2757)">
                        <path
                          d="M15.1494 13.5746L14.0271 12.4616L8.07916 17.9845L2.47686 12.1112L1.28914 13.1542L8.0091 20.2946L15.1494 13.5746Z"
                          fill="#16A8AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2757">
                          <rect
                            width="15.4074"
                            height="15.4074"
                            fill="white"
                            transform="translate(16.2969 1.21094) rotate(91.7372)"
                          />
                        </clipPath>
                        <clipPath id="clip1_4_2757">
                          <rect
                            width="15.4074"
                            height="15.4074"
                            fill="white"
                            transform="translate(16.0845 8.20752) rotate(91.7372)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2744)">
                        <path
                          d="M5.68789 1.24219L4.60938 2.39774L10.3101 8.17552L4.60938 13.9533L5.68789 15.1089L12.6212 8.17552L5.68789 1.24219Z"
                          fill="#16A8AF"
                        />
                      </g>
                      <g clip-path="url(#clip1_4_2744)">
                        <path
                          d="M12.6879 1.24219L11.6094 2.39774L17.3101 8.17552L11.6094 13.9533L12.6879 15.1089L19.6212 8.17552L12.6879 1.24219Z"
                          fill="#16A8AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2744">
                          <rect
                            width="15.4074"
                            height="15.4074"
                            fill="white"
                            transform="translate(0.296875 0.472656)"
                          />
                        </clipPath>
                        <clipPath id="clip1_4_2744">
                          <rect
                            width="15.4074"
                            height="15.4074"
                            fill="white"
                            transform="translate(7.29688 0.472656)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 ml-[-56px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsGalleryQuestion;
