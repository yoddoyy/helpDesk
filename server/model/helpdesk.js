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

model.addTicket = async (trx,param) =>{
    await trx('ticket').insert(param)
    return 0
}
