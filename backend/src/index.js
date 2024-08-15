const express = require("express");
require("./db/connection");
const placeRouter = require("./routers/place");
const cors = require('cors');

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.use(cors());
server.use(placeRouter);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
