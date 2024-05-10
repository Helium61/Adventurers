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
            <Link href="gallery" className="mr-5 hover:text-gray-900 text-black">Gallery</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900 text-black">
              Contact
            </Link>
          </nav>
          
        </div>
        <div>
          <h1 className="text-center text-black font-serif italic text-4xl mt-20"></h1>
          <h1 className="text-center text-5xl font-serif italic mt-3 text-black">
            Gallery
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
        <section className="py-6 dark:bg-gray-400 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <Image
              src="/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/felix-rostig-UmV2wr-Vbq8-unsplash.jpg"
              width={800}
              height={700}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/toomas-tartes-Yizrl9N_eDA-unsplash (1).jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/galen-crout-fItRJ7AHak8-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/dino-reichmuth-A5rCN8626Ck-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/didin-emelu-8--kuxbxuKU-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/austin-ban-juHayWuaaoQ-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="/anastasia-petrova-xu2WYJek5AI-unsplash.jpg"
              width={800}
              height={900}
            />
            <Image
              src="/didin-emelu-8--kuxbxuKU-unsplash.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
              width={800}
              height={900}
            />
          </div>
          <section className="py-6 dark:bg-gray-400 dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              <Image
                src="/camp-1-nzqd81p0v0pxax0zrz0q5hs1kan1290o6pe5altkig.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/winter-sports-03-nzqd8khsnpfnr49oq759jd19g02dc73axafuw51p20.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/winter-sports-02-nzqdabgzdltvczq7igd9of558tfynx1bhy5e1ogbh4.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/winter-sports-01-nzqdakvd9y6ql3cjzkfjdcrr6o5msw2mv8o8ug2dqw.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/water-sports-04.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/water-sports-03.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/water-sports-01.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/services-3.jpg"
                width={800}
                height={900}
              />
              <Image
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="/outdoor-image-03.jpg"
                width={800}
                height={900}
              />
              <Image
                src="/dino-reichmuth-A5rCN8626Ck-unsplash.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                width={800}
                height={900}
              />
            </div>
          </section>
        </section>
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
               
                <span className=" text-2xl text-white font-serif italic">Adventurers.com</span>
              </a>
              <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
                © 2020 Tailblocks —
               
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
          </footer>
      </div>
    </header>
  );
}
