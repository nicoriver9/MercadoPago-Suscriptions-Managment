export const Donation = ({ donations }) => {
  return (
    <div className="bg-gray-700 table-row-group text-white">
      <div className="table-row">
        <div className="table-cell px-4 py-2 hidden ...">{donations.id}</div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.payer_first_name}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.payer_email}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.dni}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.celnumber}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400 text-center">
          {donations.transaction_amount}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.date_created.toString().split("T")[0]}{" "}
          {donations.date_created.toString().split("T")[1].replace("Z", "")}
        </div>
        <div className="table-cell px-4 py-2 border-b-4 border-gray-400">
          {donations.end_date}
        </div>
      </div>
    </div>
  );
};
