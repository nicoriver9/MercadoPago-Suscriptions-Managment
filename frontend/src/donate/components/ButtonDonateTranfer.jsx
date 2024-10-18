import { useState, useEffect } from "react";
import { FaHandPointer, FaCopy } from "react-icons/fa";
import { PiChecksBold } from "react-icons/pi";

export const ButtonDonateTranfer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isUrlVisible, setIsUrlVisible] = useState(false);

  const handleButtonClick = () => {
    setIsUrlVisible(!isUrlVisible);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(document.getElementById("url").textContent);
    setIsCopied(true);
  };

  useEffect(() => {
    let button = document.getElementById("buttonCopy");

    const handleClick = () => {
      handleCopyClick();
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <button
        type="submit"
        onClick={handleButtonClick}
        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900 hover:text-white font-bold flex items-center justify-center mx-auto px-4"
      >
        <FaHandPointer className="w-4 h-4 mx-2" />
        <span className="ml-1">Transferencia CBU</span>
      </button>
      <div
        className={`url-container ${
          isUrlVisible ? "visible" : ""
        } bg-blue-700 text-white mt-2 rounded-lg flex items-center justify-center mx-6`}
      >
        <span id="url">
          1234567891234567891234
          <button
            id="buttonCopy"
            onClick={handleCopyClick}
            className="mx-2 w-4 h-4"
          >
            {isCopied ? <PiChecksBold /> : <FaCopy />}
          </button>
        </span>
      </div>
    </div>
  );
};
