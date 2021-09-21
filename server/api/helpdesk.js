const express = require('express')
const bodyParser = require('body-parser')
const helpdeskCtrl = require('../ctrl/helpdesk')

const router = express.Router()

module.exports = router

router.get('/listTicket',[bodyParser.json()], helpdeskCtrl.listTicket)
router.get('/getTicket',[bodyParser.json()], helpdeskCtrl.getTicket)
router.post('/addTicket',[bodyParser.json()], helpdeskCtrl.addTicket)