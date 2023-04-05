import React from "react";
import Image from 'next/image'
const Hero2 = () => {
  return (
    <>
      <div className="relative px-4 mx-auto pt-16 sm:max-w-xl md:px-8 md:max-w-full lg:py-32 lg:pt-[25px] xl:px-20">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none transition-all ease-in ">
                Money follows passion and purpose.
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Money can't buy happiness, but it's a lot easier to cry in a
                Mercedes than on a bicycle.
              </p>
            </div>
            <div className="flex items-center">
              <a
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-400 transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary-500 rounded-global"
                href="#"
              >
                Get started
              </a>
              <a
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <Image
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            src="https://kitwind.io/assets/kometa/full-browser.png"
          />
        </div>
      </div>
      <section className="flex flex-col lg:flex-row justify-between items-center border-t gap-10 lg:gap-8 pt-8">
        <div className="grid grid-cols-2 md:flex md:divide-x gap-4 -mx-6 md:-mx-8">
          <div className="px-6 md:px-8">
            <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
              200
            </span>
            <span className="block text-sm md:text-base font-semibold text-center md:text-left">
              People
            </span>
          </div>
          <div className="px-6 md:px-8">
            <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
              500+
            </span>
            <span className="block text-sm md:text-base font-semibold text-center md:text-left">
              Projects
            </span>
          </div>
          <div className="px-6 md:px-8">
            <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
              250+
            </span>
            <span className="block text-sm md:text-base font-semibold text-center md:text-left">
              Customers
            </span>
          </div>
          <div className="px-6 md:px-8">
            <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
              A couple
            </span>
            <span className="block text-sm md:text-base font-semibold text-center md:text-left">
              Coffee breaks
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <span className="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">
            Social
          </span>
          <div className="w-12 h-px bg-gray-200"></div>
          <div className="flex gap-4">
            <a
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              href="#"
            >
              <span className="w-5 h-5">
                <div
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    padding: "2px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path>
                  </svg>
                </div>
              </span>
            </a>
            <a
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              href="#"
            >
              <span className="w-fit">
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
            </a>
            <a
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              href="#"
            >
              <span className="w-fit">
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
            </a>
            <a
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              href="#"
            >
              <span className="w-5 h-5">
                <div
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    padding: "2px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                  </svg>
                </div>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
