const express = require('express');
// const expressSession = require('express-session');
const app = express();
const route = require('./routes');
// const models = require('./models');
const PORT = 3000;
const db = require('./db/db');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);
// app.use(
//   expressSession({
//     secret: 'anrdaiamwab',
//     // cookie: {
//     //   maxAge: 1000 * 60 * 60, // 1 hour
//     // },
//   })
// );

// require('./controllers')(app);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// models.sequelize
//   .authenticate()
//   .then(() => {
//     console.log('connected');
//     app.listen(PORT, () => {
//       console.log('Server is running on port', PORT);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
