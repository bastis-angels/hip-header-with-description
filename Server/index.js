const express = require('express');

const Camps = require('../database-mongodb/Camp.js');

const app = express();

const port = 3000;

// middlewear
app.use(express.static('Client'));

app.get('/campsites/:siteId', (req, res) => {
  Camps.find({ newId: req.params.siteId }).then((err, camps) => {
    if (err) {
      res.send(err);
    } else {
      res.send(camps);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
