const {readFile, writeFile} = require('fs')
//const {readFile, writeFile} = require('fs').promises
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

//getText('./Content/First.txt').then(result=>{console.log(result)}).catch(err=>{console.log(err)})

const start = async()=>{
    //Without exception handing it may have some error so putting in try catch
    try{
    const first = await readFilePromise('./Content/First.txt', 'utf8')
    const second = await readFilePromise('./Content/Second.txt', 'utf8')
    await writeFilePromise('./PromiseAsyncAwait.txt', `This is resolved: ${first},${second}`,{flaf: 'a'})
    console.log(first, second);
    }catch(err){
        console.log(err);
    }
}

start()