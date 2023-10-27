import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [authorSearchTerm, setAuthorSearchTerm] = React.useState("");
  const [categorySearchTerm, setCategorySearchTerm] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setAuthorSearchTerm(event.target.value);
    setCategorySearchTerm(event.target.value);

    axios
      .get(
        `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/?title_contains=<span class="math-inline">{searchTerm}&author_contains=<span>{authorSearchTerm}&category_contains=<span>{categorySearchTerm}`
      )
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
      });
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(authorSearchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div>
          <h1 className="flex justify-center font-unbounded text-4xl font-black text-[#284b63]">
            BOOK LIST
          </h1>
          <input
            type="search"
            placeholder="Search books..."
            className="mx-auto mt-4 w-60 h-10 align-items-center  flex justify-center rounded-xl border border-[#284b63] p-3"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="container mx-auto flex justify-center mt-10 mb-20">
          <div className="grid grid-cols-3 auto-rows-auto gap-6">
            {filteredBooks.map((book) => {
              // Periksa apakah image tersedia
              const isImageAvailable =
                book.cover !== undefined && book.cover !== null;

              if (!isImageAvailable) {
                // Jika image tidak tersedia, tampilkan pesan "Image tidak tersedia"
                return (
                  <div key={book.id}>
                    <p>Image tidak tersedia</p>
                  </div>
                );
              } else {
                // Jika image tersedia, tampilkan data buku
                return (
                  <a
                    href="#"
                    key={book.id}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-[#8a8c99] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#3C6E71] dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg aspect-[4/6]"
                      src={book.cover}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl font-unbounded font-bold tracking-tight text-gray-900 dark:text-white">
                        {book.title}
                      </h5>
                      <p className="mb-3 font-DMSans font-bold text-white dark:text-white">
                        Author: {book.author}
                      </p>
                      <p className="mb-3 font-DMSans font-bold text-white dark:text-white">
                        Category: {book.category}
                      </p>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
