import React from 'react';

const GenericTable = ({ data, columns, actions = [], keyField = "id" }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 border border-gray-300">
                {col.label}
              </th>
            ))}
            {actions.length > 0 && <th className="px-4 py-2 border border-gray-300">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[keyField]} className="border-t border-gray-300">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 border border-gray-300">
                  {item[col.key]}
                </td>
              ))}

              {actions.length > 0 && (
                <td className="px-4 py-2 border border-gray-300 space-x-2">
                  {actions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => action.onClick(item)}
                      className="text-blue-600 hover:underline"
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
