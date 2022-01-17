const express = require("express")
const app = express()
// const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const path = require('path')


//db config
const connectDB = require('./config/db')
const path = require('path');
//connect to db
connectDB();

//middleWare

app.use(express.json({ extended: false }));

//routes
app.use('/api/todos', require("./routes/todos"));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


//check environment equal to production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    //load index.html with path.resolve
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

}
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`)
})