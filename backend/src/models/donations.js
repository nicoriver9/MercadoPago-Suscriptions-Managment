import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Asegúrate de ajustar la ruta

export const DonationModel = (sequelize, DataTypes) => {

  const Donation = sequelize.define('Donation', {
    subscripcion_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
    },
    summarized: {
      type: DataTypes.JSON,
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    back_url: {
      type: DataTypes.STRING, // Campo para almacenar la URL de inicio
    },
    collector_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    application_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE, // Asegúrate de que sea compatible con la fecha de la API
    },
    last_modified: {
      type: DataTypes.DATE, // Asegúrate de que sea compatible con la fecha de la API
    },
    init_point: {
      type: DataTypes.STRING, // Campo para almacenar la URL de inicio
    },
    payer_first_name: {
      type: DataTypes.STRING,
    },
    celnumber: {
      type: DataTypes.STRING,
    },
    payer_last_name: {
      type: DataTypes.STRING,
    },
    payer_email: {
      type: DataTypes.STRING, // Campo para almacenar el correo del pagador
    },
    transaction_amount: {
      type: DataTypes.DECIMAL(10, 2), // Asegúrate de ajustar el tipo de datos y precisión según tus necesidades
    },
    subscripcion_months: {
      type: DataTypes.INTEGER,
    },
    dni: {
      type: DataTypes.STRING,
    },
  });

  return Donation;
}
