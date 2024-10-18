import { AiFillHeart } from "react-icons/ai";

export const ButtonDonatePage = ({ isLoading }) => {
  return (
    <div className="flex justify-center">
      <div>
        <span className="ml-1">
          {isLoading ? (
            <div className="flex items-center">
              <span className="loading loading-spinner loading-md mb-6 text-white"></span>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-violet-700 text-white p-4 rounded-full w-40 hover:bg-violet-900 hover:text-white my-1 mb-2 font-bold flex items-center justify-center"
            >
              <div className="flex">
                <AiFillHeart className="w-6 h-6 mr-1 mt-1" />
                DONAR
              </div>
            </button>
          )}
        </span>
      </div>
    </div>
  );
};
