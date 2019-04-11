const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const Camps = require('../database-mongodb/Camp.js');

const app = express();

const port = 3002;
// middlewear
app.use(cors());
app.use(bodyParser.json());
app.use('/listing/:id', express.static('Public'));

app.get('/campsite/:siteId', (req, res) => {
  Camps.find({ newId: req.params.siteId }).then((err, camps) => {
    if (err) {
      res.send(err);
    } else {
      res.send(camps);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
