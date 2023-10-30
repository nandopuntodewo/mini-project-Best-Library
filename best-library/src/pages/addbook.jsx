import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/adminNav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const AddBookForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookUrl, setBookUrl] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [bookLocation, setBookLocation] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBook, setEditingBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const categoryOptions = [
    "Action",
    "Fantasy",
    "History",
    "Mystery",
    "Romance",
    "Science Fiction",
  ];

  const locationOptions = [
    "Rack 1",
    "Rack 2",
    "Rack 3",
    "Rack 4",
    "Rack 5",
    "Rack 6",
  ];

  useEffect(() => {
    axios
      .get("https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/")
      .then((response) => {
        setBooks(response.data);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !bookTitle ||
      !bookAuthor ||
      !bookUrl ||
      !bookCategory ||
      !bookLocation
    ) {
      // Validasi agar tidak ada data yang kosong
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      cover: bookUrl,
      category: bookCategory,
      Location: bookLocation,
    };

    if (isEditing) {
      axios
        .put(
          `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/${editingBook.id}`,
          newBook
        )
        .then((response) => {
          setBooks((prevBooks) => {
            const updatedBooks = prevBooks.map((book) =>
              book.id === response.data.id ? response.data : book
            );
            return updatedBooks;
          });
          setEditingBook(null);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error("Error updating book:", error);
        });
    } else {
      axios
        .post(
          "https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/",
          newBook
        )
        .then((response) => {
          setBooks([...books, response.data]);

          // SweetAlert untuk memberi tahu bahwa buku berhasil ditambahkan
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "The book has been added.",
          });
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
    }

    setBookTitle("");
    setBookAuthor("");
    setBookUrl("");
    setBookCategory("");
    setBookLocation("");
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setBookTitle(book.title);
    setBookAuthor(book.author);
    setBookUrl(book.cover);
    setBookCategory(book.category);
    setBookLocation(book.Location);
    setIsEditing(true);
  };

  const handleDelete = (book) => {
    axios
      .delete(
        `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Books/${book.id}`
      )
      .then((response) => {
        setBooks(books.filter((b) => b.id !== book.id));
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AdminNavbar />
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-poppins font-bold flex justify-center text-gray-800">
            {isEditing ? "Edit Book" : "Add New Book"}
          </h1>

          <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8">
            <div className="mb-4">
              <label
                htmlFor="bookTitle"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Book Title:
              </label>
              <input
                type="text"
                id="bookTitle"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bookAuthor"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Book Author:
              </label>
              <input
                type="text"
                id="bookAuthor"
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bookUrl"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Book Cover (URL):
              </label>
              <input
                type="text"
                id="bookUrl"
                value={bookUrl}
                onChange={(e) => setBookUrl(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bookCategory"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Book Category:
              </label>
              <select
                id="bookCategory"
                value={bookCategory}
                onChange={(e) => setBookCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryOptions.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="bookLocation"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Book Location:
              </label>
              <select
                id="bookLocation"
                value={bookLocation}
                onChange={(e) => setBookLocation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="" disabled>
                  Select a location
                </option>
                {locationOptions.map((Location, index) => (
                  <option key={index} value={Location}>
                    {Location}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#284b63] text-white px-4 py-2 rounded-md hover:bg-[#3C6E71]"
              >
                {isEditing ? "Update Book" : "Add Book"}
              </button>
            </div>
          </form>
          <div className="container mt-8">
            <table className="table-auto border-separate font-poppins rounded-lg">
              <thead className="bg-[#284b63] rounded-lg border-gray-200 text-white">
                <tr>
                  <th className="w-1/5 border">Book Code</th>
                  <th className="w-1/5 border">Title</th>
                  <th className="w-1/5 border">Author</th>
                  <th className="w-1/5 border">Cover</th>
                  <th className="w-1/5 border">Category</th>
                  <th className="w-1/5 border">Location</th>
                  <th className="w-1/5 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="border p-3">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  books.map((book) => (
                    <tr key={book.id}>
                      <td className="border p-3">{book.id}</td>
                      <td className="border p-3">{book.title}</td>
                      <td className="border p-3">{book.author}</td>
                      <td className="border p-3">{book.cover}</td>
                      <td className="border p-3">{book.category}</td>
                      <td className="border p-3">{book.Location}</td>
                      <td className="border border-black p-3">
                        <button
                          className="text-blue-600 hover:underline mr-2"
                          onClick={() => handleEdit(book)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(book)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBookForm;
