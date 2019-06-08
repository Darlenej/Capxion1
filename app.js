
const express= require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use(bodyParser.urlencoded({ extended: true }));


// app.get ('/',function(req,res){

//     res.send('Web Notes');
// });

// Homepage route
app.get('/', (req, res) => {
    res.render('home.ejs');
  });

  // app.use('/css', express.static('css'));
  app.post('/home', (req, res) => { 
    console.log("home");
    res.redirect('/');
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
