import express from "express";
import Home from "./client/components/Home";
import { renderToString } from "react-dom/server";
import React from "react";
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  console.log("hello");
  const html = `
    <html>
      <head>
      </head>
      <body>
      <div id = "root">${content}</div>
      <script src = 'bundle.js'></script>
      </body>
    </html>

  `;
  res.send(html);
});
app.listen(3000, () => console.log("server running successfully"));
