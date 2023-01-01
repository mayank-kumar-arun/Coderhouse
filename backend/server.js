require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const DbConnect = require("./database");
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cookieParser());
const corsOption = {
	credentials: true,
	origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
app.use("/storage", express.static("storage"));

const PORT = process.env.PORT || 5500;
app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
DbConnect();
app.get("/", (req, res) => {
	return res.send("Hello from express Js");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
