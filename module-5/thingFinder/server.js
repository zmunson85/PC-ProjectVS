const express = require('express');
const app = express();


//MiddleWare
app.use(express.json())

app.use('/vehicles', require('./routes/vehicleRouter'))

app.listen(5000, () => {
    console.log(`Server fired up on PORT ${5000}`)
})