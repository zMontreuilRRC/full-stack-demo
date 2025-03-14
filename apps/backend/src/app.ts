import express, {Express} from "express";
import morgan from "morgan";
import setupSwagger from "../config/swagger";

const app: Express = express();

// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

// invoke swagger middleware for serving docs in /api-docs
setupSwagger(app);

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

export default app;