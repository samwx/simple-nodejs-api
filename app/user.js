import connection from './connection'

export default {
  getUsers () {
    return connection.query('SELECT * FROM users')
  }
}
