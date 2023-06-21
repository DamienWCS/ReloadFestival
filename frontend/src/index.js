const express = require("express");
const app = express();
const port = 8000; // Utilisez un port différent, par exemple 8000

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
