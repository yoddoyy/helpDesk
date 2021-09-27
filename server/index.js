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
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(config.server.port, () => {
  console.log('server listen on', config.server.port)
})
