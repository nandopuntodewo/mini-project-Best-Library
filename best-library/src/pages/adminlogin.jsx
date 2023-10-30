import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //pengecekan email dan kata sandi
    if (email === "nando@gmail.com" && password === "password") {
      // Email dan kata sandi benar, arahkan ke halaman /admin/addbook
      navigate("/admin/addbook");
    } else {
      // Email atau kata sandi salah, menampilkan pesan kesalahan
      alert("Email or password is incorrect");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-[#3C6E71] rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white font-unbounded">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold font-poppins text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 font-poppins text-gray-800 bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 max-w-[94%]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold font-poppins text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 max-w-[94%]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleLogin} // Panggil fungsi handleLogin saat tombol Login diklik
              className="w-full font-poppins font-semibold px-4 py-2 tracking-wide text-[#3C6E71] transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
