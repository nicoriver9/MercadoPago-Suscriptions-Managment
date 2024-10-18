import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logocedes from "../../assets/logocedes1.png";
import { FaUserLock } from "react-icons/fa6";

export const Navbar = ({ buttonAction }) => {
  return (
    <nav className="">
      <div className="container mx-auto px-2 bg-gradient-to-b">
        <div className="flex items-center justify-between py-4 bg-gradient-to-b">
          <Link
            to="/"
            className="flex items-center text-white text-2xl font-bold bg-transparent"
          >
            <img
              src={logocedes}
              alt="CEDES logo"
              className="w-12 h-10 mr-2 bg-transparent"
            />
            FUNDACIÓN CEDES
          </Link>
          <div className="md:flex md:items-center md:space-x-4 text-white font-medium bg-transparent">
            {buttonAction === "login" ? (
              <Link
                to="/login"
                className="py-3 px-2 bg-blue-900 hover:bg-sky-700 rounded-2xl flex items-center justify-center"
              >
                <span className="hidden md:inline">Administrador</span>
                <span className="md:hidden">
                  <FaUserLock className="h-6 w-6" />
                </span>
              </Link>
            ) : buttonAction === "logout" ? (
              <Link
                to="/"
                className="p-3 bg-blue-900 hover:bg-sky-700 rounded-2xl"
              >
                Salir
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  buttonAction: PropTypes.oneOf(["login", "logout", "none"]).isRequired,
};
