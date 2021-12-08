const express = require('express');
const app = express();


//middleware that fires on every request that comes in, if there is a request it will use it in body
app.use(express.json())


app.use('/bounty', require('./routes/bountyRouter'));
app.use('/bounty2', require('./routes/bountyRouter2'))
app.use('/todoList', require('./routes/todoRouter'))

app.listen(5000, () => {
    console.log(`Server Fired Up on PORT ${5000}`)
})
