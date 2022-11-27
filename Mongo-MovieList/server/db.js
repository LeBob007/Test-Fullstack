const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/movielist')

const movieSchema = new mongoose.Schema({
  title: String,
  watched: {type: Boolean, default: 0},
  year: {type: Number, default: 1999}
})

const Movie = mongoose.model('Movie', movieSchema)

const post = (movie, cb) => {
  Movie.create(movie).then((res) => {
    cb(null, res)
  })
}

const get = (cb) => {
  Movie.find().then((res) => {
    cb(null, res)
  })
}

const patch = (movie, cb) => {
  if (!movie.watched) {
    Movie.where({title: movie.title}).update({watched: true}).then((res) => {
      cb(null, res)
    })
  } else {
    Movie.where({title: movie.title}).update({watched: false}).then((res) => {
      cb(null, res)
    })
  }

}

module.exports = {
  post,
  get,
  patch
}
