const model = {}

module.exports = model

model.getTicket = async (trx,id) => {
  let data = await trx.raw(`select id,title,contract_info,description,status
  ,ADDTIME(DATE_FORMAT(update_at,"%Y-%m-%d %H:%i:%s"),"7:00:00") update_at
  from ticket where id = ${id}`).then(data=>data[0][0])
  return data
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