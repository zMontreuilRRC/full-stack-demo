import express, {Express} from "express";
import morgan from "morgan";
import setupSwagger from "../config/swagger";
import termRoutes from "./api/v1/routes/termRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";

const app: Express = express();

// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));
app.use(express.json());

//add errorhandler middleware

// invoke swagger middleware for serving docs in /api-docs
setupSwagger(app);

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

app.use("/api/v1", termRoutes);
app.use(errorHandler); //errorhandler catches errors as last element in middleware chain
// occurs when "next" is invoked

export default app;