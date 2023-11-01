import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from 'sweetalert2';

const Loan = () => {
  const [bookCode, setBookCode] = useState("");
  const [memberId, setMemberId] = useState("");

  const checkBookCodeAndMemberId = async (bookCode, memberId) => {
    try {
      const bookResponse = await axios.get(
        `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/${bookCode}`
      );

      const memberResponse = await axios.get(
        `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/${memberId}`
      );

      if (bookResponse.data && memberResponse.data) {
        return true; // Kedua nilai ditemukan
      } else {
        return false; // Salah satu atau kedua tidak ditemukan
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data dari API:", error);
      return false; // Tangani kesalahan saat melakukan permintaan API
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validasi input kosong
    if (!bookCode || !memberId) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Isi kedua input sebelum mengirimkan formulir',
      });
      return;
    }
  
    const isBookCodeAndMemberIdValid = await checkBookCodeAndMemberId(
      bookCode,
      memberId
    );
  
    if (isBookCodeAndMemberIdValid) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data ditemukan, Anda dapat meminjam buku',
      });
      setBookCode(""); // Mengosongkan input
      setMemberId(""); // Mengosongkan input
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Book code atau member ID tidak ditemukan atau terdapat kesalahan',
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="">
          <h1 className="text-4xl font-unbounded font-bold flex justify-center mt-36 text-[#284b63]">
            Let's Read!
          </h1>
          <form
            className="mx-auto block p-6 w-2/6 bg-white border border-gray-200 rounded-xl shadow dark:bg-[#3C6E71] dark:border-gray-700 overflow-hidden"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white flex justify-center font-poppins ">
              Book Loans Form
            </h2>
            <div className="mb-4 mx-auto flex justify-center flex-col">
              <label
                className="text-gray-700 dark:text-white"
                htmlFor="bookCode"
              >
                Book Code:
              </label>
              <input
                type="text"
                id="bookCode"
                value={bookCode}
                onChange={(event) => setBookCode(event.target.value)}
                className="w-300 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4 mx-auto flex justify-center flex-col">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="memberId"
              >
                Member ID:
              </label>
              <input
                type="password"
                id="memberId"
                value={memberId}
                onChange={(event) => setMemberId(event.target.value)}
                className="w-300 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center mx-auto font-poppins font-semibold px-4 py-2 bg-white text-[#3C6E71] rounded-md shadow hover-bg-[#ececec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Loan;
