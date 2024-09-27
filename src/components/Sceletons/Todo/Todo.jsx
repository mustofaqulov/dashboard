import "./Todo.css";

export function TodoSceleton() {
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
        <span className="skeleton skeleton-text"></span>
      </td>
      <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
        <span className="skeleton skeleton-input"></span>
      </td>
      <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
        <span className="skeleton skeleton-text"></span>
      </td>
      <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
        <span className="skeleton skeleton-button"></span>
      </td>
    </tr>
  );
}
