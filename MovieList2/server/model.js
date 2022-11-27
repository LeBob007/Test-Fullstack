const db = require('./db.js')

const get = (cb) => {
  db.query('SELECT * FROM movies', cb)
}

const post = (reqBody, cb) => {
  db.query(`SELECT title FROM movies WHERE title="${reqBody.title}"`, (err, data) => {
    if (err) {
      cb(err)
    } else {
      if (data.length === 0) {
        db.query(`INSERT INTO movies (title) VALUES ("${reqBody.title}")`, cb)
      } else {
        cb(null, data)
      }
    }
  })
}

const update = (reqBody, cb) => {
  db.query(`UPDATE movies SET watched= NOT watched WHERE title="${reqBody.title}"`, cb)
}

module.exports = {
  get,
  post,
  update
}