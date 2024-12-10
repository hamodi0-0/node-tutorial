const { hamodi, minna } = require("./names");

function sayHi(name){
  console.log(`hello there ${name}`);
}

//sayHi(hamodi)
//sayHi(minna)


const os = require('os');

//console.log(`Uptime of this computer is ${(os.uptime)/(3600*24)} days`);

//console.log(`total memory is ${os.totalmem} and the free memory is ${os.freemem}`);

const path = require('path');
const filePath = path.join('/content','subfolder','test.txt')
//console.log(filePath);

const base = path.basename(filePath)
//console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
//console.log(absolute);

const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write('hello there, this is the home page!')
    res.end()
    return
  }
  if(req.url === '/about'){
    res.write('This is our short history')
    res.end()
    return
  }
  res.end(
    `<h1>Oops!</>
    <p>We cant seem to find the page your looking for
    <a href="/">back home</a>`
  )
  return
})

server.listen(5000)