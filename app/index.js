import express from 'express'
import user from './user.js'

const error = {
  internalServerError (error, req, res) {
    res.status(500)
    res.json({ error })
  }
}

const api = {
  /**
   *
   * @get /index
   *
   */

  index (req, res){
    const msg = `Ta tranquilo, ta favoravel!`
    res.json({ msg })
  },

  /**
   *
   * @get /users
   *
   */
  users (req, res){
    const users = user.getUsers()

    users.then(users => {
      console.log(users)
      res.json({
        results: users
      })
    }).catch(err => error.internalServerError(err, req, res))
  },

  /**
   *
   * @get /users/:id
   *
   */
  user (req, res){
    const singleUser = user.getUser(req.params.id)

    singleUser.then(user => {
      console.log(user)
      res.json({
        result: user
      })
    }).catch(err => error.internalServerError(err, req, res))
  },

  /**
   *
   * @post /users
   *
   */
  createUser (req, res){
    const userData = {
      name: req.query.name
    }

    const createUser = user.createUser(userData)

    createUser.then(user => {
      res.json({
        msg: `User ${userData.name} created!`
      })
    }).catch(err => error.internalServerError(err, req, res))
  }
}

const PORT = process.env.PORT || 3000
const app = express()

/**
 *
 * Routes
 *
 */

 /** GET **/
app.get('/', api.index)
app.get('/users', api.users)
app.get('/users/:id', api.user)

/** POST **/
app.post('/users', api.createUser)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
});
