var express = require('express')
var  app = express()
var fs = require('fs') ;
app.use(express.static('.'));
var path = '/sys/class/gpio/gpio19/value' ; 
var off  = false ; 

app.get('/', function (req, res) {
  res.send('Hello World!') ; 
  res.end() ; 
})

app.get('/changeState', function(req , res){
  if(off){
    fs.writeFileSync(path ,1 ,'utf8') ; 
    off =false; 
  }else{
    fs.writeFileSync(path ,0,'utf8') ; 
    off = true;
  }
  console.log('it works') ; 
  res.end() ; 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})