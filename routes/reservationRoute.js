// import express from "express";
// import send_reservation from "../controller/reservation.js";

// const router = express.Router();

// router.post("/send", send_reservation);

// export default router;
import express from "express";

const router = express.Router();

router.post("/send", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test route",
  });
});

export default router;
