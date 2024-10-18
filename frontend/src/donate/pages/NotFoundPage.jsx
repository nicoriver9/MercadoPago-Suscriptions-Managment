import logocedes from "../../assets/logocedes1.png";
import { Link } from "react-router-dom";
import { LuUnplug } from "react-icons/lu";

export const NotFoundPage = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col bg-black bg-opacity-50">
      <div className="text-6xl text-white mb-6 font-bold">
        <LuUnplug />
      </div>
      <h1 className="text-6xl text-white font-bold bg-transparent">
        Oooooops!!
      </h1>
      <div className="text-6xl text-white font-bold my-6 bg-transparent"></div>
      <h2 className="text-4xl text-white font-bold mb-20 bg-transparent">
        Algo Falló
      </h2>
      <Link
        to="/"
        className="flex items-center text-white text-lg font-bold bg-transparent"
      >
        <img
          src={logocedes}
          alt="CEDES logo"
          className="w-12 h-10 mr-2 bg-transparent"
        />
        FUNDACIÓN CEDES
      </Link>
    </div>
  );
};
