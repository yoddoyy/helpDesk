// const express = require('express')
// const app = express()

// app.get('/',(req, res) =>{
//     res.send("Hello World")
// })

// app.listen(3001, ()=>{
//     console.log('running on port 3001')
// })
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const cors = require('cors')

const app = express()
app.use(express.static('./public'))
app.use(cors())
app.use(require('./middleware/db'))
app.use(bodyParser.json())

app.use((req, res, next) => {
  req.config = config
  next()
})

app.use('/api', require('./api'))

app.listen(config.server.port, () => {
  console.log('server listen on', config.server.port)
})
