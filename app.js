import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "true",
  });
});

app.use("/api/v1/reservation", reservationRouter);
app.get("/api/reservation", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "Route Connected"
})})
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})

export default app;
