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
          <h1 className="text-center text-5xl font-serif italic mt-3 text-black">
            Who we are?
          </h1>
          <h1 className="text-center text-5xl font-serif italic mt-3 text-black">
            Outdoor Adventurers
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

        <div className="bg-white">
          <h1 className="bg-white h-20">dd</h1>
          {/* <h1 className="text-black text-center font-serif italic text-6xl mt-20">
            Daniella Featured Keynote
          </h1>
          <p className="text-center text-black text-5xl italic font-serif mt-9">
            An exceptional iaculis massa imperdiet tortor pharetra velit feugiat
            mauris tempus aliquam .
          </p> */}
          <div className="box-container mt-10 ">
            <div className="box">
              <div className="bottom-part space-x-5 ">
                <h1 className="italic text-4xl text-black font-serif text-center">
                  Our Mission
                </h1>
                <p className="text-black mt-5 font-serif">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  autem natus laborum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Deleniti deserunt nobis officiis tempora
                  nulla sed laborum laboriosam eaque fugiat debitis saepe, Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                  laboriosam!
                </p>
              </div>
              <div className="top-part justify-items-start">
                <Image
                  className=" space-x-4 rounded-lg  mt-3"
                  src="/outdoor-image-02.jpg" // Path to your image
                  alt="My Image"
                  width={800} // Desired width of the image
                  height={500} // Desired height of the image
                />
              </div>
            </div>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              {/* <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1> */}
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-white p-8 rounded">
                    <h1 className="text-3xl text-black font-serif italic mb-3">
                      Extraordinary Experiences:
                    </h1>
                    <p className="leading-relaxed mb-6">
                      Synth chartreuse iPhone lomo cray raw denim brunch
                      everyday carry neutra before they sold out fixie 90s
                      microdosing. Tacos pinterest fanny pack venmo, post-ironic
                      heirloom try-hard pabst authentic iceland.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-white p-8 rounded">
                    <h1 className="text-3xl text-black font-serif italic mb-3">
                      Our Core Values:
                    </h1>
                    <p className="leading-relaxed mb-6">
                      Synth chartreuse iPhone lomo cray raw denim brunch
                      everyday carry neutra before they sold out fixie 90s
                      microdosing. Tacos pinterest fanny pack venmo, post-ironic
                      heirloom try-hard pabst authentic iceland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
               
                <span className=" text-2xl text-black font-serif italic">Adventurers.com</span>
              </a>
              <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
                © 2020 Tailblocks —
               
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-black">
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
                <a className="ml-3 text-black">
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
                <a className="ml-3 text-black">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-black">
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
          </footer>
        </div>
      </div>
    </header>
  );
}
