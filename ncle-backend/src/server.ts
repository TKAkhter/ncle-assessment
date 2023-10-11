import app from "./app";

app.disable("x-powered-by");

const server = app.listen(3000, () =>
    console.log("Starting ExpressJS server on Port 3000"));

export default server;
