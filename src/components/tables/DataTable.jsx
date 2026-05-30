const DataTable = ({
  columns = [],
  children,
}) => {
  return (
    <div
      className="
        overflow-x-auto
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      <table className="table w-full">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map(column => (
              <th
                key={column}
                className="
                  px-6
                  py-5
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-gray-300
                "
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;