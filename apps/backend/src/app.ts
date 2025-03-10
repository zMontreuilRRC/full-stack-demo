import express, {Express} from "express";

const app: Express = express();

app.get("/", (_req, res) => {
    res.send("Hello, world!");
});

export default app;