const express = require("express");
const cors = require("cors");

const toursRouter = require("./routers/tours");

const PORT = 4000;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routers
app.use("/tours", toursRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
