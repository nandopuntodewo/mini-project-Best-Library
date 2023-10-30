import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

const Welcome = () => {
  const [availableBooks, setAvailableBooks] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  const fetchData = async () => {
    try {
      const booksResponse = await axios.get(
        "https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/"
      );
      console.log(booksResponse.data);
      const totalBooks = booksResponse.data.length;
      setAvailableBooks(totalBooks);

      const membersResponse = await axios.get(
        "https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/"
      );
      console.log(membersResponse.data);
      const totalMembers = membersResponse.data.length;
      setTotalMembers(totalMembers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to);
  };

  const titleStyle = {
    color: "#ffff",
    fontFamily: "Unbounded",
    fontSize: "10rem",
  };
  const contentStyle = {
    fontFamily: "Unbounded",
    fontSize: "3rem",
  };
  return (
    <div className="bg-white">
      <div className="mx-auto  w-screen h-screen bg-[#284b63] text-white flex justify-center">
        <div>
          <h1 className="text-center" style={titleStyle}>
            BEST LIBRARY
          </h1>
          <h3 className="text-4xl text-center font-poppins font-bold">
            "Immerse yourself in the world of books with Best Library."
          </h3>
        </div>
      </div>
      <div className="container mx-auto w-full text-[#3C6E71]">
        <h2 className="text-xl text-center" style={contentStyle}>
          Welcome to Best Library
        </h2>
        <h3 className="text-2xl text-center font-DMSans font-black text-[#284B63]">
          Your ultimate book library app, where you’ll find a vast collection of
          literary gems, from classics to bestsellers.
        </h3>
      </div>
      <div className="container mx-auto  flex justify-center">
        <div className="inline-grid grid-cols-3 grid-rows-1 gap-7 justify-items-center text-center mb-20">
          <div className="mb-0">
            <p className="text-4xl text-[#3C6E71] font-unbounded font-bold">
              6
            </p>
            <p className="text-base text-[#3C6E71] font-unbounded font-extrabold">
              Book Categories
            </p>
          </div>
          <div>
            <p className="text-4xl text-[#3C6E71] font-unbounded font-bold">
              {availableBooks}
            </p>
            <p className="text-base text-[#3C6E71] font-unbounded font-extrabold">
              Available Books
            </p>
          </div>
          <div className="mb-0">
            <p className="text-4xl text-[#3C6E71] font-unbounded font-bold">
              {totalMembers}
            </p>
            <p className="text-base text-[#3C6E71] font-unbounded font-extrabold">
              Happy Readers
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-10 mb-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-12">
          {/* Image 1 */}
          <div className="aspect-square">
            <img
              className="rounded-3xl "
              src="images/book1.jpg"
              alt="Image 1"
              width="480"
              height="480"
               onClick={() => handleNavigate("/bookcategory")}
              style={{
                filter: "grayscale(100%)",
              }}
            />
            <p className="text-left text-4xl font-unbounded font-extrabold text-[#353535] mt-3 mb-1">
              Book Categories
            </p>
            <p className="text-left text-xl font-DMSans font-extrabold text-[#353535] mt-0 max-w-md">
              Explore various genres, including mystery, romance, adventure, and
              more. You name it, we’ve got you covered.
            </p>
          </div>

          {/* Image 2 */}
          <div className="aspect-square">
            <img
              className="rounded-3xl"
              src="images/book2.jpg"
              alt="Image 2"
              width="480"
              height="480"
               onClick={() => handleNavigate("/booklist")}
              style={{
                filter: "grayscale(100%)",
              }}
            />
            <p className="text-left text-4xl font-unbounded font-extrabold text-[#353535] mt-2 mb-1">
              Book List
            </p>
            <p className="text-left text-xl font-DMSans font-extrabold text-[#353535] mt-0 max-w-md">
              Go wild with our extensive book list, featuring everything from
              timeless classics to the most groundbreaking bestsellers.
            </p>
          </div>

          {/* Image 3 */}
          <div className="aspect-square">
            <img
              className="rounded-3xl"
              src="images/book3.jpg"
              alt="Image 3"
              width="480"
              height="480"
               onClick={() => handleNavigate("/loans")}
              style={{
                filter: "grayscale(100%)",
              }}
            />
            <p className="text-left text-4xl font-unbounded font-extrabold text-[#353535] mt-2 mb-1">
              Book Loans
            </p>
            <p className="text-left text-xl font-DMSans font-extrabold text-[#353535] mt-0 max-w-md">
              Easily loan books and keep track of your borrowed titles, so you
              can devour literature to your heart’s content.
            </p>
          </div>

          {/* Image 4 */}
          <div className="aspect-square">
            <img
              className="rounded-3xl"
              src="images/book4.jpg"
              alt="Image 3"
              width="480"
              height="480"
               onClick={() => handleNavigate("/chatbot")}
              style={{
                filter: "grayscale(100%)",
              }}
            />
            <p className="text-left text-4xl font-unbounded font-extrabold text-[#353535] mt-2 mb-1">
              Chat Bot!
            </p>
            <p className="text-left text-xl font-DMSans font-extrabold text-[#353535] mt-0 max-w-md">
              Need book recommendations? We can help you find the right book for
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full flex justify-center text-center text-black">
        <p className="text-5xl font-unbounded font-bold max-w-5xl">
          Ready to embark on your literary adventure? Read now!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
