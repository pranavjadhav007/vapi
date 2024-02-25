import ErrorHandler from "../middlewares/error.js";
import { Vengeance } from "../models/reservation.js";


const send_reservation = async (req, res, next) => {
  const { name, collegeName,  service, gender,email, age } = req.body;
  if (!name || !collegeName || !email || !service || !gender || !age) {
    return next(new ErrorHandler("Please Fill Entire Form!", 400));
  }

  try {
    await Vengeance.create({ name, collegeName, email, service, gender, age });
    res.status(201).json({
      success: true,
      message: "Entry Successfully Registered!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    return next(error);
  }
};


export default send_reservation;

