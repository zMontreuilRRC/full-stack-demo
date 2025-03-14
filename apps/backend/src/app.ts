import express, {Express} from "express";
import morgan from "morgan";

const app: Express = express();

// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

export default app;