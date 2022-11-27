const model = require('./model.js')

const get = (req, res) => {
  model.get((err, data) => {
    err ? res.status(404).send('ERROR') : res.status(200).send(data)
  })
}

const post = (req, res) => {
  model.post(req.body, (err, data) => {
    err ? res.status(500).send('ERROR') : res.status(200).send(data)
  })
}

const update = (req, res) => {
  model.update(req.body, (err, data) => {
    err ? res.status(500).send('ERROR') : res.status(204).send()
  })
}

module.exports = {
  get,
  post,
  update
}