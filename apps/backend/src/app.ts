import express, {Express} from "express";
import morgan from "morgan";
import setupSwagger from "../config/swagger";
import termRoutes from "./api/v1/routes/termRoutes";

const app: Express = express();

// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

// invoke swagger middleware for serving docs in /api-docs
setupSwagger(app);

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

app.use("/api/v1", termRoutes);

export default app;