import mercadopage from "mercadopago";
import { Op } from "sequelize";
import { mercadopagoConfig } from "../helpers/mercadopago.config.js";
import db from "../config/sequelize.js";


export const createSubscripcion = async (req, res) => {
  const { payer_email, dni, transaction_amount, first_name, celnumber } =
    req.body;
  const subscripcion_months = 12;

  if (
    !payer_email ||
    !transaction_amount ||
    !subscripcion_months ||
    !first_name ||
    !celnumber ||
    !dni
  ) {
    console.log("Faltan campos obligatorios en la solicitud");
    return res
      .status(400)
      .json({ message: "Faltan campos obligatorios en la solicitud" });
  } else {    

    mercadopagoConfig();

    try {
      const result = await mercadopage.preapproval.create({
        reason: process.env.SUBSCRIPCION_REASON,
        payer_email,
        auto_recurring: {
          frequency: 1,
          frequency_type: process.env.FREQUENCY_TYPE,         
          transaction_amount: parseInt(transaction_amount),
          currency_id: process.env.CURRENCY_ID,
        },
        back_url: "https://cedes-donations.vercel.app/thanks",
        status: "pending",
      });
      

      if (result.body) {
        await db.Donation.create({
          subscripcion_id: result.body.id, // Utiliza el ID de la preaprobación como identificador
          status: "pending",
          reason: process.env.SUBSCRIPCION_REASON,
          summarized: {},
          payer_id: result.body.payer_id, // Utiliza el ID del pagador
          back_url: result.body.init_point, // Utiliza la URL de inicio de la preaprobación
          collector_id: process.env.COLECTOR_ID,
          application_id: result.body.application_id,
          date_created: result.body.date_created,
          last_modified: result.body.last_modified,
          init_point: result.body.init_point,
          payer_first_name: first_name,
          dni: dni,
          celnumber: celnumber,          
          payer_email: payer_email, // Agrega el correo del pagador
          transaction_amount: transaction_amount, // Agrega el monto de la transacción
          subscripcion_months: subscripcion_months, // Agrega la duración de la suscripción
        });
      }

      res.json(result.body);
    } catch (error) {
      console.log(error);
    }
  }
};

export const findSubscripcion = async (req, res) => {

  mercadopagoConfig();

  try {
    const response = await fetch(
      `${process.env.API_MERCADO_PAGO_BASE_URL}collector_id=${process.env.COLECTOR_ID}&status=authorized`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const suscripcion_id = data.results.map(({ id }) => id);

      const donations = await db.Donation.findAll({
        attributes: [
          "subscripcion_id",
          "status",
          "reason",
          "summarized",
          "payer_id",
          "back_url",
          "collector_id",
          "application_id",
          "date_created",
          "last_modified",
          "init_point",          
          "payer_first_name",
          "celnumber",
          "payer_email",
          "transaction_amount",
          "subscripcion_months",
          "dni",
        ],
        where: {
          subscripcion_id: {
            [Op.in]: suscripcion_id,
          },
        },
      });

      const donationData = donations.map((donation) => ({
        subscripcion_id: donation.subscripcion_id,
        status: donation.status,
        reason: donation.reason,
        summarized: donation.summarized,
        payer_id: donation.payer_id,
        back_url: donation.back_url,
        collector_id: donation.collector_id,
        application_id: donation.application_id,
        date_created: donation.date_created,
        last_modified: donation.last_modified,
        init_point: donation.init_point,        
        payer_first_name: donation.payer_first_name,
        dni: donation.dni,
        celnumber: donation.celnumber,
        payer_email: donation.payer_email,
        transaction_amount: donation.transaction_amount,
        subscripcion_months: donation.subscripcion_months,
      }));

      console.log(donationData);
      res.json(donationData);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
 
};

export const cancelSubscripcion = async (req, res) => {
  const { subscripcion_id } = req.body;

  if (!subscripcion_id) {
    return res.status(400).json({ message: "Faltan el id de la subscripcion" });
  } else {
    mercadopagoConfig();

    try {
      const result = await mercadopage.preapproval.cancel(subscripcion_id);

      res.json(result.body);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something goes wrong" });
    }
  }
};

export const pauseSubscripcion = async (req, res) => {
  const { subscripcion_id } = req.body;

  if (!subscripcion_id) {
    return res.status(400).json({ message: "Faltan el id de la subscripcion" });
  } else {
    mercadopagoConfig();

    try {
      const result = await mercadopage.preapproval.pause(subscripcion_id);

      res.json(result.body);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Can not pause a cancelled subscripcion" });
    }
  }
};
export const reactiveSubscripcion = async (req, res) => {
  const { subscripcion_id } = req.body;

  if (!subscripcion_id) {
    return res.status(400).json({ message: "Subscription id is missing" });
  } else {
    mercadopagoConfig();

    try {
      const result = await mercadopage.preapproval.update(subscripcion_id);

      res.json(result.body);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Cannot re-active a cancelled subscription" });
    }
  }
};


