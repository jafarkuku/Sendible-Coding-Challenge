import express from 'express'
import config from './config'

const server = express() //initiaiting express
server.set('view engine', 'ejs') //set the template egine to ejs

server.get('/', (req, res) => {
  res.render('index', {
    content : "..."
  });
}); //setting the index route

server.use(express.static('public'));

server.listen(config.port, ()=>{
  console.info('Express listening on port',config.port)
})
