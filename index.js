const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
var app = express();

const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: "postgres://postgres:shimarov6929@localhost/assignment2"
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('pages/index')});
app.get('/hello', (req,res) => { res.render('pages/hello')});
app.get('/assignment2', (req,res) => { res.render('pages/tokemon')});

app.post('/add', (req,res) => {
  console.log(req);
  var name = req.body.name;
  var weight = req.body.weight;
  var height = req.body.height;
  var fly = req.body.fly;
  var fight = req.body.fight;
  var fire = req.body.fire;
  var water = req.body.water;
  var electric = req.body.electric;
  var frozen = req.body.frozen;
  var total = parseInt(weight)+parseInt(height)+parseInt(fly)+parseInt(fight)+parseInt(fire)+parseInt(water)+parseInt(electric)+parseInt(frozen);
  var trainer = req.body.trainer;
  //res.send(`${name} is added`);
  pool.query(`INSERT INTO Tokemon (name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer) VALUES ('${name}', ${weight}, ${height}, ${fly}, ${fight}, ${fire}, ${water}, ${electric}, ${frozen}, ${total}, '${trainer}')`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("tokemon added");
    var results = {'nameAdd': req.body.name };
    //console.log(results);
    res.render('pages/add', results)
});
    // var results = {'rows': result.rows };
    // console.log(results);
    // res.render('pages/add', name)
});

app.post('/deleteTokemon', (req,res) => {
  console.log(req);
  var deleteTokemon = req.body.deleteTokemon;
  pool.query(`DELETE FROM Tokemon WHERE name = '${deleteTokemon}'`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("tokemon deleted");
    var results = {'nameDelete': req.body.deleteTokemon };
    //console.log(results);
    res.render('pages/deleteTokemon', results)
  });
});

app.post('/showTokemon', (req,res) => {
  console.log(req);
  pool.query(`SELECT * FROM Tokemon`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("all tokemons showed");
    var results = {'rows': result.rows };
    console.log(results);
    res.render('pages/showTokemon', results)
  });
});

app.post('/showOneTokemon', (req,res) => {
  //console.log(req);

  pool.query(`SELECT * FROM Tokemon`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("all tokemons showed");
    // var nameFind = {'nameF': req.body.nameFind};
    var results = {'rowAll': result.rows, 'nameF': req.body.nameFind };
    //console.log(results);
    res.render('pages/showOneTokemon', results)


  });
});


app.post('/changeTokemon', (req,res) => {
  //console.log(req);
  var columnChange = req.body.columnChange;
  var valueChange = req.body.valueChange;
  var nameChange = req.body.nameChange;
  console.log(columnChange);
  console.log(valueChange);
  console.log(nameChange);

  pool.query(`UPDATE Tokemon SET ${columnChange} = ${valueChange} WHERE name = '${nameChange}'`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("info is changed");
    // var nameFind = {'nameF': req.body.nameFind};
    // res.send(`${columnChange} is chaged to ${valueChange} for '${nameChange}'`);
    var results = {'col': columnChange, 'val': valueChange, 'nam': nameChange};
    //console.log(results);
    res.render('pages/changeTokemon', results)
  });
});






// app.get('/users', (req,res) => {
//   var getUsersQuery = `SELECT * FROM assignment2`;
//   console.log(getUsersQuery);
//   pool.query(getUsersQuery, (error, result) => {
//     if (error)
//       res.end(error);
//     var results = {'rows': result.rows };
//     console.log(results);
//     res.render('pages/users', results)
//   });
// });
// app.get('/users/:id', (req,res) => {
//   console.log(req.params.id);
//   var userIDQuery = `SELECT * FROM assignment2 WHERE uid=${req.params.id}`;
// });
// app.post('/login', (req, res) => {
//   //console.log('post');
//   var name = req.body.user;
//   var password = req.body.pwd;
//   res.send(`Hello, ${name}.  You have password ${password}`);
// });
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
