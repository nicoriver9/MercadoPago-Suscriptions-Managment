// models/administrator.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Asegúrate de ajustar la ruta

export const AdministratorModel = (sequelize, DataTypes) => {

  const Administrator = sequelize.define('Administrator', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    active:{
      type: DataTypes.NUMBER,
      allowNull: false,
    }
    });

  return Administrator;
};


