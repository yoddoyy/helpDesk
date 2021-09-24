const model = {}

module.exports = model

model.getTicket = async (trx,id) => {
  let row = await trx('ticket').where({id:id})
  return row
}

model.listTicket = async function (trx,query){
    let rows = await trx.raw(`${query}`).then(rows=>rows[0])
    return rows
}

model.addTicket = async (trx,ticket) =>{
    await trx('ticket').insert(ticket)
    return 0
}

model.updateTicket = async function (trx,ticket){
    await trx('ticket').update({title:ticket.title,description:ticket.description,contract_info:ticket.contract_info
    ,status:ticket.status}).where({id:ticket.id})
    return 0
}