const express = require('express');
let cors = require("cors");
const usersRoutes = require('./routes/users-routes');

const app = express();


const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use(usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
