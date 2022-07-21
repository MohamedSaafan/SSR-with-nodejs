import express from "express";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res, next) => {
  const store = createStore();
  // some logic to initialize and load data into the store
  const html = renderer(req, store);
  res.send(html);
  next();
});
app.get("/", (req, res) => {
  const html = renderer(req);
  res.send(html);
});
app.listen(3000, () => console.log("server running successfully"));
