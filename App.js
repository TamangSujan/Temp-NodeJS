const {readFile} = require('fs')

readFile('./Content/First.txt', 'utf8', (err,result)=>{
    if(err){
        return
    }else{
        console.log(result);
    }
})
