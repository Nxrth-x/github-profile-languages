const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (_, response) => {
  response.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3333);
