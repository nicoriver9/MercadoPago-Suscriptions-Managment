import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export const SearchPage = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Llama a la función de búsqueda si se presiona Enter
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress} // Agrega el manejador de eventos para Enter
        className="p-2 border-2 border-gray-500 rounded focus:outline-none bg-white text-gray-900"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Buscar
      </button>
    </div>
  );
};
