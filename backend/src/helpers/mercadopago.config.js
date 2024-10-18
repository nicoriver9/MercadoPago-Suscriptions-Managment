import mercadopage from "mercadopago";

import { MERCADOPAGO_API_KEY } from "../config.js";

export const mercadopagoConfig = () =>{
    return mercadopage.configure({    
        access_token: MERCADOPAGO_API_KEY,
      });    
}
  