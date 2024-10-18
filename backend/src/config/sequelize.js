import Sequelize from 'sequelize';
import {AdministratorModel} from '../models/administrators.js';
import {DonationModel} from '../models/donations.js';
import mysql2 from 'mysql2'

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    dialectModule: mysql2
  }
);

// Define los modelos
const Administrator = AdministratorModel(sequelize, Sequelize);
const Donation = DonationModel(sequelize, Sequelize);

// Asocia los modelos si es necesario
// Ejemplo:
// Administrator.hasMany(Donation);
// Donation.belongsTo(Administrator);

const db = {
  Administrator,
  Donation,
  sequelize,
  Sequelize,
};

export default db;
