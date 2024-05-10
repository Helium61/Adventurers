import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="    text-white body-font">
    <div className="header-bg ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-4xl font-serif italic">Adventure.com</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/home" className="mr-5 hover:text-gray-900 text-black">Home</Link>
          <Link href="/services" className="mr-5 hover:text-gray-900 text-black">Services</Link>
          <Link href="/project" className="mr-5 hover:text-gray-900 text-black">Project</Link>
          <Link href="/gallery" className="mr-5 hover:text-gray-900 text-black">Gallery</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 text-black">Contact</Link>
        </nav>
        
      </div>
      <div>
        <h1 className="text-center text-black font-serif italic text-4xl mt-20"></h1>
        {/* <h1 className="text-center text-5xl font-serif italic mt-3 text-black">
          Who we are?
        </h1> */}
        <h1 className="text-center text-5xl font-serif italic mt-3 text-black">
          Contact Us...?
        </h1>
      </div>

      <h1 className="text-center text-white text-3xl italic font-serif mt-28">
        Stay Connected
      </h1>
      <div className="flex justify-center items-center">
        <span className="inline-flex mt-2 mb-2  justify-center">
          <a className="text-white">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 ">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6 mt-5">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form
              noValidate=""
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 mt-14"
            >
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder=""
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-blue-600 dark:bg-gray-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder=""
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-blue-600 dark:bg-gray-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-blue-600 dark:bg-gray-100"
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-blue-600 dark:text-gray-50 focus:dark:ring-blue-600 hover:dark:ring-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </header>
  );
}
