const http = require('http')
const {readFileSync} = require('fs')

//Get All Files and we dont want to put inside create server as it will read every time it reloads
const homePage = readFileSync('./2. Express/Files/index.html')
/*
    Even html file is linked with css, images etc it will still not rendered until it is pointed
    out from server
*/
const homeStyles = readFileSync('./2. Express/Files/styles.css')
const homeImage = readFileSync('./2. Express/Files/logo.svg')
const homeLogic = readFileSync('./2. Express/Files/browser-app.js')

const server = http.createServer((request, response)=>{
    const url = request.url
    if(url === '/'){
        response.writeHead(200, {"Content-Type":"text/html"})
        response.write(homePage);
    }else if(url === '/about'){
        response.writeHead(200, {"Content-Type":"text/html"})
        response.write('<h1>About Page</h1>');
    }else if(url === '/styles.css'){
        response.writeHead(200, {"Content-Type":"text/css"})
        response.write(homeStyles);
    }else if(url === '/logo.svg'){
        response.writeHead(200, {"Content-Type":"image/svg+xml"})
        response.write(homeImage);
    }else if(url === '/browser-app.js'){
        response.writeHead(200, {"Content-Type":"text/javascript"})
        response.write(homeLogic);
    }else{
        response.writeHead(404, {"Content-Type":"text/html"})
        response.write('<h1>Error Page! 404</h1>');
    }
    response.end()
})

server.listen(8080)