import express from "express";
import "babel-polyfill";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res, next) => {
  const store = createStore();
  // some logic to initialize and load data into the store
  matchRoutes(Routes, req.path).map((item) => {
    console.log(item, "from item");
    const { route } = item;
    return route.loadData ? route.loadData() : null;
  });
  const html = renderer(req, store);

  res.send(html);
});

app.listen(3000, () => console.log("server running successfully"));
