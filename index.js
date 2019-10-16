const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
var app = express();

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
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
  pool.query(`INSERT INTO Tokemon (name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer) VALUES ('${name}', ${weight}, ${height}, ${fly}, ${fight}, ${fire}, ${water}, ${electric}, ${frozen}, ${total}, '${trainer}')`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("Tokemon is added");
    var results = {'nameAdd': req.body.name };
    res.render('pages/add', results)
});
});

app.post('/deleteTokemon', (req,res) => {
  var deleteTokemon = req.body.deleteTokemon;
  pool.query(`DELETE FROM Tokemon WHERE name = '${deleteTokemon}'`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("Tokemon is deleted");
    var results = {'nameDelete': req.body.deleteTokemon };
    res.render('pages/deleteTokemon', results)
  });
});

app.post('/showTokemon', (req,res) => {
  pool.query(`SELECT * FROM Tokemon`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("All tokemons are showed");
    var results = {'rows': result.rows };
    res.render('pages/showTokemon', results)
  });
});

app.post('/showOneTokemon', (req,res) => {
  pool.query(`SELECT * FROM Tokemon`, (err, result)=> {
    if (err)
      res.end(err);
    console.log("One Tokemon is showed");
    var results = {'rowAll': result.rows, 'nameF': req.body.nameFind };
    res.render('pages/showOneTokemon', results)
  });
});

app.post('/showOneTokemonMore', (req,res) => {
  pool.query(`SELECT * FROM Tokemon `, (err, result)=> {
    if (err)
      res.end(err);
    console.log("One Tokemon is showed");
    var resultsMore = {'rowAllMore': result.rows, 'nameFMore': req.body.nameFMore };
    res.render('pages/showOneTokemonMore', resultsMore)
  });
});


app.post('/changeTokemon', (req,res) => {
  var columnChange = req.body.columnChange;
  var valueChange = req.body.valueChange;
  var nameChange = req.body.nameChange;
  if(columnChange == "trainer"){
    pool.query(`UPDATE Tokemon SET ${columnChange} = '${valueChange}' WHERE name = '${nameChange}'`, (err, result)=> {
      if (err)
        res.end(err);
      console.log("Tokemon is changed");
      var results = {'col': columnChange, 'val': valueChange, 'nam': nameChange};
      res.render('pages/changeTokemon', results)
    });
  }
  else{
    pool.query(`UPDATE Tokemon SET total = ((SELECT total FROM Tokemon WHERE name = '${nameChange}') - (SELECT ${columnChange} FROM Tokemon WHERE name = '${nameChange}')) WHERE name = '${nameChange}'; UPDATE Tokemon SET ${columnChange} = '${valueChange}' WHERE name = '${nameChange}'; UPDATE Tokemon SET total = ((SELECT total FROM Tokemon WHERE name = '${nameChange}') + ${valueChange}) WHERE name = '${nameChange}'`, (err, result)=> {
      if (err)
        res.end(err);
      console.log("Tokemon is changed");
      var results = {'col': columnChange, 'val': valueChange, 'nam': nameChange};
      res.render('pages/changeTokemon', results)
    });
  }
});

app.post('/dreamTeam', (req,res) => {
  pool.query(`SELECT * FROM Tokemon ORDER BY total DESC LIMIT 3;`, (err, result)=> {
    console.log(req);
    if (err)
      res.end(err);
    console.log("The champion is showed");
    var results = {'rows': result.rows };
    res.render('pages/dreamTeam', results)
    });
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
