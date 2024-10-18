import { Link, useNavigate } from "react-router-dom";
import logocedes from "../../assets/logocedes1.png";
import { useEffect } from "react";

export const ThanksPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Limpia el timeout cuando el componente se desmonta
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="flex h-screen justify-center items-center flex-col bg-black bg-opacity-50">
      <h1 className="text-5xl text-white font-bold mb-20 bg-transparent">
        Muchas gracias por su donación
      </h1>
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
    </div>
  );
};
