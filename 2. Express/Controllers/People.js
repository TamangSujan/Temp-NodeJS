let {people} = require('../../Data')

const getPeople = (request, response)=>{
    response.status(200).json({success: true,data: people})
}

const createPerson = (request, response)=>{
    const {name} = request.body
    if(!name){
        return response.status(400).json({success:false, msg:'Please provide name value'})
    }
    response.status(201).json({success: true, person:name})
}

const createPersonPostman = (request, response)=>{
    const {name} = request.body
    if(!name){
        return response.status(400).json({success: false, msg: 'Please provide name value'})
    }
    response.status(201).json({success: true, data: [...people, name]})
}

const updatePerson = (request, response)=>{
    const {id} = request.params
    const {name} = request.body
    
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return response.status(400).json({success: false, msg: `No person with ${id}`})
    }


    //Map means look out
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    response.status(200).json({success: true, data: newPeople})
}

const deletePerson = (request, response)=>{
    const {id} = request.params
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return response.status(400).json({success: false, msg: `No person with ${id}`})
    }
    //To filter out means to remove
    const newPeople = people.filter((person)=>person.id!==Number(id))
    response.status(200).json({success: true, data: newPeople})
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}