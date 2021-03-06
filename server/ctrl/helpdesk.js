const helpdeskModel = require('../model/helpdesk')

const ctrl = {}

module.exports = ctrl

ctrl.listTicket = async function(req, res) {
    try {     
        let where  
        let order
        if(req.body.status==undefined||req.body.status==''||req.body.status=='status'){
            where = `where 1=1`
        }else{
            where = `where status = '${req.body.status}'`
        }
        if(req.body.order==''||req.body.order==undefined){
            order = `id`
        }else if(req.body.order=='update_at'){
            order = `${req.body.order} desc`
        }else{
            order = req.body.order
        }
        let query = `select id,title,description,contract_info,status
            ,ADDTIME(DATE_FORMAT(update_at,"%Y-%m-%d %H:%i:%s"),"7:00:00") update_at 
            from ticket ${where} order by ${order} `
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

ctrl.getTicket = async function(req, res){
    try {        
        let ticket = await helpdeskModel.getTicket(req.db,req.query.id)

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

ctrl.saveTicket = async function(req, res){
    try {
        let ticket =req.body
        if(ticket.id==0||ticket.id=="0"){
            delete ticket.id
            await helpdeskModel.addTicket(req.db,ticket)
        }else{
            await helpdeskModel.updateTicket(req.db,ticket)
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
