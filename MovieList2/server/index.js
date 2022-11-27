const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const router = require('./routes.js')
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static('client/dist'));
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})