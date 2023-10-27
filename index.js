const express = require('express');
// const expressSession = require('express-session');
const app = express();
const route = require('./routes');
const PORT = 3000;

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

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
