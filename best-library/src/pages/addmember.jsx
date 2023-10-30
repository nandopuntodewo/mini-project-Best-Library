import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/adminNav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const AddMemberForm = () => {
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingMember, setEditingMember] = useState(null); // State untuk member yang akan diedit
  const [isEditing, setIsEditing] = useState(false); // State untuk menampilkan/menyembunyikan formulir edit

  useEffect(() => {
    axios
      .get("https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/")
      .then((response) => {
        setMembers(response.data);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!memberName) {
      // Validasi agar tidak ada data yang kosong
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    const newMember = {
      id: memberId,
      name: memberName,
    };

    if (isEditing) {
      axios
        .put(
          `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/${editingMember.id}`,
          newMember
        )
        .then((response) => {
          setMembers((prevMembers) => {
            const updatedMembers = prevMembers.map((member) =>
              member.id === response.data.id ? response.data : member
            );
            return updatedMembers;
          });
          setEditingMember(null);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error("Error updating member:", error);
        });
    } else {
      axios
        .post(
          "https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/",
          newMember
        )
        .then((response) => {
          setMembers([...members, response.data]);

          // SweetAlert untuk memberi tahu bahwa member berhasil ditambahkan
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "The member has been added.",
          });
        })
        .catch((error) => {
          console.error("Error adding member:", error);
        });
    }

    // Bersihkan input setelah submit
    setMemberId("");
    setMemberName("");
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setMemberId(member.id); 
    setMemberName(member.name); 
    setIsEditing(true);
  };

  const handleDelete = (member) => {
    axios
      .delete(
        `https://651e992e44a3a8aa4768a55d.mockapi.io/api/v1/Member/${member.id}`
      )
      .then((response) => {
        setMembers(members.filter((m) => m.id !== member.id));
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AdminNavbar />
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-poppins font-bold flex justify-center text-gray-800">
            {isEditing ? "Edit Member" : "Add New Member"}
          </h1>

          <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8">
            <div className="mb-4">
              <label
                htmlFor="memberName"
                className="block font-poppins text-gray-700 text-sm font-bold mb-2"
              >
                Member Name:
              </label>
              <input
                type="text"
                id="memberName"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#284b63] text-white px-4 py-2 rounded-md hover:bg-[#3C6E71]"
              >
                {isEditing ? "Update Member" : "Add Member"}
              </button>
            </div>
          </form>
          <div className="container mt-8">
            <table className="table-auto border-separate font-poppins rounded-lg">
              <thead className="bg-[#284b63] rounded-lg border-gray-200 text-white">
                <tr>
                  <th className="w-1/2 border">Member ID</th>
                  <th className="w-1/2 border">Member Name</th>
                  <th className="w-1/5 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="3" className="border p-3">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  members.map((member) => (
                    <tr key={member.id}>
                      <td className="border p-3">{member.id}</td>
                      <td className="border p-3">{member.name}</td>
                      <td className="border border-black p-3">
                        <button
                          className="text-blue-600 hover:underline mr-2"
                          onClick={() => handleEdit(member)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(member)}
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

export default AddMemberForm;
