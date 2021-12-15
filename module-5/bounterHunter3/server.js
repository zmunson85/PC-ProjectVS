const express = require('express');
const app = express();

app.use(express.json());

app.use('/bounties', require('./routes/bountiesRouter'));

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({ Error: err.message })
})
app.listen(5000, () => {
    console.log(`Server running on PORT ${5000}`)
})