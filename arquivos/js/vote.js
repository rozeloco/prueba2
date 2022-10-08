const fs = require('fs');
const voting = JSON.parse(fs.readFileSync('./arquivos/voting.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const delVote = (_id) => {
	voting.splice(_id,0)
    fs.writeFileSync(`./arquivos/voting.json`, JSON.stringify(voting))
    fs.unlinkSync(`./arquivos/vote/${_id}.json`)
    fs.unlinkSync(`./arquivos/${_id}.json`)
}

const addVote = async(_id,_value1,_value2,_value3,enviar) => {
	voting.push(_id)
    fs.writeFileSync(`./arquivos/${_id}.json`,'[]')
    fs.writeFileSync(`./arquivos/vote/${_id}.json`,'[]')
    fs.writeFileSync('./arquivos/voting.json', JSON.stringify(voting)) 
    await sleep(2000)
    let votes = JSON.parse(fs.readFileSync(`./arquivos/vote/${_id}.json`))  
    votes.push({
    reason: _value1 ? _value1 : '-',
    votes: _value2.trim() +'@s.whatsapp.net',
    durasi: _value3 
    })  
    fs.writeFileSync(`./arquivos/vote/${_id}.json`, JSON.stringify(votes)) 
    setTimeout(async function() {
	let vote = JSON.parse(fs.readFileSync(`./arquivos/${_id}.json`))
    let tru = vote.filter(a => a.voting == '✅')
    let fals = vote.filter(a => a.voting == '❌')
    enviar(`*votación Terminada*\n\n*Aqui esta el resultado*\n*votos*\n✅ = ${tru.length}\n❌ = ${fals.length}`)
    fs.unlinkSync(`./arquivos/vote/${_id}.json`)
    fs.unlinkSync(`./arquivos/${_id}.json`)
    fs.writeFileSync(`./arquivos/voting.json`, JSON.stringify(voting)) 
    }, _value3 * 60 * 1000);
}

module.exports = {
	delVote,
	addVote,
}