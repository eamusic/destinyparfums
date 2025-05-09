const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const usersRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');
// const dashboardRoutes = require('./routes/dashboard');
// const loginRoutes = require('./routes/login');


app.set('case sensitive routing', true);
app.set('appName', 'Destiny Perfumeria');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public',express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(morgan('dev')); // Log requests to the console

app.use(homeRoutes);
/*app.use(usersRoutes);
app.use(loginRoutes);
app.use(dashboardRoutes);*/

app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} is running on port ${app.get('port')}`);
});