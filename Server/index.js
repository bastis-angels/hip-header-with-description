const express = require('express');
const app = express();
const port = 3000;

const Camps = require('../database-mongodb/Camp.js')

app.get('/:campsiteId', (req, res) => {
  console.log(req.params)
    Camps.find({ newId: req.params.campsiteId}, (err, camps)=> {
        if (err){
          res.send(err)
        }else {
          res.send(camps)
        }
      });   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
