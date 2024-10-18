// import { createToken } from '../helpers/createToken.js';
import { TokenValidation } from '../helpers/verifyToken.js';

export const authenticate = async (req, res, next) => {
  if (!req.header('token')) {    
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  if (TokenValidation(req, res)) {    
    next();
  } else {
    return res.status(403).json({ message: "Token no válido" });
  }
};