//For middle ware function, it should have next
const authorize = (request, response, next)=>{
    const {user} = request.query
    console.log(request.query);
    if(user==='john'){
        request.user = {name: 'john', id: 3}
        next()
    }else{
        response.status(401).send('Unauthorized')
    }
}

module.exports = authorize