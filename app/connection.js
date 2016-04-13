import promiseMysql from 'promise-mysql'

// Use POOL to reuse connections
const mysqlPool = promiseMysql.createPool({
  host: `localhost`,
  user: `root`,
  password: ``,
  database: `dad-test`,
  connectionLimit: 10
})

export default {
  query (queryString) {
    console.log(`Query: "${queryString}"`)
    return mysqlPool.query(...arguments)
  }
}
