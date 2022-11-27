const router = require('express').Router()
const db = require('./db.js')

router.get('/movies', (req, res) => {
  db.get((err, data) => {
    if(err) {
      res.status(404).send('Error getting')
    } else {
      res.status(200).send(data)
    }
  })
})

router.post('/movies', (req, res) => {
  console.log(req.body)
  db.post(req.body, (err, data) => {
    if(err) {
      res.status(500).send('Error posting')
    } else {
      res.status(201).send('Success posting')
    }
  })
})

router.patch('/movies', (req, res) => {
  db.patch(req.body, (err, data) => {
    if (err) {
      res.status(500).send('Error patching')
    } else {
      res.status(204).send('Success patching')
    }
  })
})

module.exports = router