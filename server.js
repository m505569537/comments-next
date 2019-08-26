const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require('pusher')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const pusher = new Pusher({
  appId: '849475',
  key: '810359f5a0cdaad46767',
  secret: '12ca151bd5b7d783ba2e',
  cluster: 'ap3',
  encrypted: true
})

app.post('/add-review', function (req, res) {
  pusher.trigger('rotten-pepper', 'new-movie-review', req.body)
  res.sendStatus(200)
})

app.listen(port, function () {
  console.log('Node app is running at localhost:' + port)
})