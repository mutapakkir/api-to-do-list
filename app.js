
//const bodyParser = require('body-parser')
//const cors = require('cors')
//const express = require('express')
//require('dotenv').config()

//const studentRoutes = require('./routes/user-routers');

//const app = express()

//app.use(cors())
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded)()
//app.use('/api', studentRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT,() => {
  //  console.log(`Server run at http://localhost:${PORT}`);
    
//})
//const userRouter = require('./routes/user-routers')
//require('dotenv').config()
//const bodyParser = require('body-parser')
//const express = require('express')
//const app = express()
//
//const userLogger = require('./middleware/logger')
//
//app.use(bodyParser.json())
//
//app.use(userLogger)
//
//app.use('/api/student', userRouter)
//
//const port = process.env.PORT
//app.listen(port, () => {
//    console.log(`Server run at http://localhost:${port}/api/student`);
//})
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user-routers');
const userLogger = require('./middleware/logger');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(userLogger);

// Routes
app.use('/users', userRouter);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});