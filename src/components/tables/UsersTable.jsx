import {
  FiEdit,
  FiUserX,
} from "react-icons/fi";

import DataTable from "./DataTable";

const UsersTable = ({
  users,
  onEdit,
  onSuspend,
}) => {
  return (
    <DataTable
      columns={[
        "Photo",
        "Name",
        "Email",
        "Role",
        "Status",
        "Actions",
      ]}
    >
      {users?.map(user => (
        <tr
          key={user._id}
          className="border-b border-white/5"
        >
          <td className="px-6 py-4">
            <img
              src={user.photo}
              alt={user.name}
              className="
                h-14
                w-14
                rounded-full
                object-cover
              "
            />
          </td>

          <td className="px-6 py-4 text-white">
            {user.name}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {user.email}
          </td>

          <td className="px-6 py-4 text-cyan-400">
            {user.role}
          </td>

          <td className="px-6 py-4">
            <span
              className={`
                rounded-full
                px-4
                py-2
                text-sm
                ${
                  user.status ===
                  "active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }
              `}
            >
              {user.status}
            </span>
          </td>

          <td className="px-6 py-4">
            <div className="flex gap-3">
              <button
                onClick={() =>
                  onEdit(user)
                }
                className="
                  rounded-xl
                  bg-cyan-500
                  p-3
                  text-white
                "
              >
                <FiEdit />
              </button>

              <button
                onClick={() =>
                  onSuspend(user)
                }
                className="
                  rounded-xl
                  bg-red-500
                  p-3
                  text-white
                "
              >
                <FiUserX />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default UsersTable;