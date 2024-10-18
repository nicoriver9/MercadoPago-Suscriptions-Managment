import { useEffect, useState } from "react";
import { Donation } from "./Donation";
import { fetchDataDonations } from "../helpers/fetchDataDonations";
import { SearchPage } from "./SearchPage";

export const DonationsList = ({ token }) => {
  const [originalDonationsData, setOriginalDonationsData] = useState([]); // Estado para el array original de donaciones
  const [donationsData, setDonationsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const donations = await fetchDataDonations(token);
      setOriginalDonationsData(donations);
      donations ? setDonationsData(donations) : [];
    };
    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredResults = [...originalDonationsData].filter((item) => {
        return item.auto_recurring.transaction_amount == searchTerm;
      });
      setDonationsData(filteredResults);
    } else {
      setDonationsData(originalDonationsData);
    }
  };

  return (
    <div className="container w-full mt-4 p-4">
      <div className="max-w-screen-md mx-auto">
        <SearchPage onSearch={handleSearch} />
        <div className="table-container mt-4">
          <div className="table-header-group">
            <div className="table-row text-center text-white">
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600 hidden">
                ID
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Nombre y Apellido
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Email
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                DNI
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Teléfono
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Monto
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Fecha de Inicio
              </div>
              <div className="table-cell font-semibold px-4 py-2 bg-blue-600">
                Fecha de Fin
              </div>
            </div>
          </div>
          {donationsData.map((donations) => {
            return <Donation key={donations.id} donations={donations} />;
          })}
        </div>
      </div>
    </div>
  );
};
