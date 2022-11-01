// const db = require('./config/db')
// const express = require('express')

// const app = express()

// db('peoples').select('name')
//      .then(r => console.log(r))
//      .finally(() => db.destroy())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })

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
