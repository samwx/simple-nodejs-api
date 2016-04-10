var express    = require('express'),
    connection = require('./connection.js'),
    user       = require('./user.js');
    app        = express();


/**
 *
 * Get request
 *
 */
app.get('/', function(req, res){
  connection.startConnection();

  /* Set application/json header */
	res.set({ 'Content-Type': 'application/json' });

  /* Send hello world msg*/
	res.json({msg: 'Hello world!'});
});

app.get('/users', function(req, res){
  var users = user.getUsers();

  /* Set application/json header */
  res.set({ 'Content-Type': 'application/json' });

  /* Send hello world msg*/
  console.log(users);
  res.json({results: users});
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
