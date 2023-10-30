import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useNavigate } from "react-router-dom";

const Category = () => {

  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="flex justify-center font-unbounded text-4xl font-black text-[#284b63]">
          "BOOK CATEGORIES"
        </h1>
      </div>
      <div className="container mx-auto flex justify-center mt-10 mb-20" onClick={() => handleNavigate("/booklist")}>
        <div className="grid grid-cols-3 auto-rows-auto gap-6 ">
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://2.bp.blogspot.com/-yGfIIrw1cqc/VImD59UcN-I/AAAAAAAAAPU/kUp-BNhW3Ks/s1600/explosion.jpg"
                alt="Hollywood Sign on The Hill"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Action
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://images.ctfassets.net/qpn1gztbusu2/2sEq4wHQk4Vbj4pJP7Dlo9/9fb20ca821203b0a35847998c1a41cff/chinese-style-fantasy-scene.jpg"
                alt="Palm Springs Road"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Fantasy
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Jan-Steen-Beware-of-Luxury-1663.jpg"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                History
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Mystery
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Romance
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col  rounded-lg  bg-[#3C6E71] hover:bg-gray-700">
            <a href="#!">
              <img
                className="object-cover rounded-lg md:h-full md:w-full  md:rounded-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 font-poppins text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Science-Fiction
              </h5>
              <p className="mb-4 text-base font-DMSans text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Category;
