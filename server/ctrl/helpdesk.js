const helpdeskModel = require('../model/helpdesk')

const ctrl = {}

module.exports = ctrl

ctrl.listTicket = async function(req, res) {
    try {     
        let where  
        if(req.body.status==undefined||req.body.status==''){
            where = `where 1=1`
        }else{
            where = `where status = '${req.body.status}'`
        }
        let query = `select * from ticket
            ${where} `
        let rows = await helpdeskModel.listTicket(req.db,query)


        res.send({
            status: true,
            data: rows
        })
    } catch (e) {
        res.send({
            error: e.message,
            status: false, 
        })
    }
}

ctrl.getTicket = async function(req, res) {
    try {        
        let ticket = await helpdeskModel.getTicket(req.db,req.body.id)

        res.send({
            status: true,
            data: ticket
        })
    } catch (e) {
        res.send({
            error: e.message,
            status: false, 
        })
    }
}

ctrl.addTicket = async function(req, res){
    try {
        if(req.body.id===0){
            await helpdeskModel.addTicket(req.db,req.body)
        }        

        res.send({
            status: true,
        })
    } catch (e) {
        res.send({
            error: e.message,
            status: false, 
        })
    }
}
