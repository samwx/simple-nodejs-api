import express from 'express'
import user from './user.js'

const error = {
  internalServerError (error, req, res) {
    res.status(500)
    res.json({ error })
  }
}

const api = {
  index (req, res){
    const msg = `Ta tranquilo, ta favoravel!`
    res.json({ msg })
  },

  users (req, res){
    const users = user.getUsers()

    users.then(users => {
      console.log(users);
      res.json({
        results: users
      });
    }).catch(err => error.internalServerError(err, req, res));
  }
}

const PORT = process.env.PORT || 3000
const app = express()
/**
 * Routes
 */
app.get(`/`, api.index);
app.get(`/users`, api.users);

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`);
});
