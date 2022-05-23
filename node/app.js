const express = require('express')
const cors = require('cors')

const app = express()
const port = 80

app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
  res.send('LALALAA')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
