import { opine } from "./deps.ts";

const app = opine();

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.listen(1993);
