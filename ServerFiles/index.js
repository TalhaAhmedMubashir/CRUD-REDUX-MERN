import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import cors from 'cors';


const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    console.log('processing request for "' + req.url + '"....');
    next();
});

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
