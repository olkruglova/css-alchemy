const express = require('express');
const cors = require("cors");
const guidesRoute = require('./routes/guides');

const app = express();
const PORT = 8080;

app.use(cors());

app.use('/guides', guidesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});