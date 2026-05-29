const TableSkeleton = ({
  rows = 6,
}) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            {[...Array(6)].map((_, i) => (
              <th
                key={i}
                className="p-5"
              >
                <div className="h-4 animate-pulse rounded bg-white/10" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(rows)].map(
            (_, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-white/5"
              >
                {[...Array(6)].map(
                  (_, colIndex) => (
                    <td
                      key={colIndex}
                      className="p-5"
                    >
                      <div className="h-4 animate-pulse rounded bg-white/10" />
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;