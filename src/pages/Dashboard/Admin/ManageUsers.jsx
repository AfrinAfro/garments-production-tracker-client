import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosSecure from "../../../api/axiosSecure";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axiosSecure.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id, role) => {
    try {
      await axiosSecure.put(`/api/users/${id}`, { role });
      toast.success("Role updated");
      fetchUsers();
    } catch (err) {
      toast.error("Failed");
    }
  };

  const deleteUser = async (id) => {
    await axiosSecure.delete(`/api/users/${id}`);
    toast.success("User removed");
    fetchUsers();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2 capitalize">{u.role}</td>

              <td className="p-2 flex gap-2">
                <button
                  onClick={() => updateRole(u._id, "admin")}
                  className="bg-purple-500 text-white px-2 py-1 rounded"
                >
                  Admin
                </button>

                <button
                  onClick={() => updateRole(u._id, "manager")}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Manager
                </button>

                <button
                  onClick={() => updateRole(u._id, "buyer")}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                >
                  Buyer
                </button>

                <button
                  onClick={() => deleteUser(u._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;