const express = require('express');
const cors = require('cors');
const mongooseConnectDb = require('./modules/mongoose');

const app = express();

mongooseConnectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes');
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});