const express = require("express");
const db = require('./config/connection');
// include our custom routes
const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// setup db connection and then start listening for requests
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
