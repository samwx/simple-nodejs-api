import connection from './connection'

export default {
  getUsers (){
    return connection.query('SELECT * FROM users')
  },

  getUser (id){
    return connection.query('SELECT * FROM users U WHERE U.id = ' + id)
  },

  createUser (data){
    return connection.query(`INSERT INTO users (name) VALUES ('${data.name}')`)
  }
}
