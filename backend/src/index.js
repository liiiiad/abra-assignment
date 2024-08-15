const express = require('express');

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json());

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})