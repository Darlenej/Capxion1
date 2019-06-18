
// const myNotes = [
//   'http is a protocol',
//   'http requests have a url, method, header, and body',
//   'I like tomatoes'
// ];

let userFeedback = [];
let userLogin =[];

const express= require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
// app.use('/css',express.static('css'));
// app.use('/js',express.static('js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('publics'));

 


// Homepage route
app.get('/home', (req, res) => {
    res.render('home.ejs');
  });

// Contact page
  app.get('/contact', (req,res) => {
    res.render('contact.ejs');
  });

  // Account page
  app.get('/account', (req,res) => {
    res.render('account.ejs');
  });

  app.get('/inspirational',(req,res)=>{
    res.render('inspirational.ejs');
  });

app.get('/family',(req,res)=>{
  res.render('family.ejs');
});
app.get('/funny',(req,res)=>{
  res.render('funny.ejs');
  
}); 

app.get('/travel',(req,res)=>{
  res.render('travel.ejs');
});

app.get('/religious',(req,res)=>{
  res.render('religious.ejs');
});

app.get('/entrepreneurial',(req,res)=>{
  res.render('entrepreneurial.ejs');
});

// User page where they can add info is getting pulled here
// app.get('/userQ', (req, res) => {
//   res.render('userQ.ejs'
//   // { notes: myNotes }
//   );
// });

// app.use('/css', express.static('css'));
// app.post('/userQ', (req, res) => { 
//   myNotes.push(req.body.note);
//   res.redirect('userQ.ejs');
// });


  // User inputs info for contacting Capxion
  app.post('/contact', (req, res) => { 
    userFeedback.push(req.body.txtName);
    userFeedback.push(req.body.txtEmail);
    userFeedback.push(req.body.txtPhone);
    userFeedback.push(req.body.txtMsg);
    // console.log(userFeedback);
    res.redirect('/contact');
  });

  // User inputs info to sign in
  app.post('/account', (req, res) => { 
    userLogin.push(req.body.login);
    userLogin.push(req.body.pwdLogin);
    // console.log(userLogin);
    res.redirect('/account');
  });

  // app.delete('/notes/:id', (req, res) => {
  //   console.log('delete route hit');
  //   console.log(req.params.id) ;
  //   // using array location retrieval method ex: arrayName[0,3]
  // myArray.splice(req.params.id, 1);
  // console.log(myNotes);
  // res.send({msg:'deleted something', index: req.params.id});

  // });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Can use an empty array to push the qoutes into the div container to display on the front pg.
// Orrrr refer to RGB Project!!! also refer back to hike website for logo connection  