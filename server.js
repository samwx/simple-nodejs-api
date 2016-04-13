const express    = require('express');
const user       = require('./user.js');
const app        = express();

const PORT = process.env.PORT || 3000

function internalServerError (err, req, res) {
  res.status(500);
  res.json({ error: err })
}

function indexApi(req, res){
  res.json({msg: 'Ta tranquilo, ta favoravel!'});
}

function usersApi(req, res){
  const usersPromise = user.getUsers()
  
  usersPromise
    .then(function (users) {
      console.log(users);
      res.json({results: users});
    })
    .catch(function (err) {
      internalServerError(err, req, res)
    });
}

/**
 * Get request
 */
app.get('/', indexApi);
app.get('/users', usersApi);

app.listen(PORT, function(){
	console.log('Listening on port', PORT);
});
