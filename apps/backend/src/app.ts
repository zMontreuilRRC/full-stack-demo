import express, {Express} from "express";

const app: Express = express();

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

export default app;