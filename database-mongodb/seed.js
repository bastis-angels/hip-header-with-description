const database = require('./index.js');
const Camp = require('./Camp.js');
const faker = require('faker');

var sampleData = [];
for (var i = 0; i < 100; i++) {
    var sampleObject = {
        newId: i,
        host: faker.name.findName(),
        hostImage: faker.image.avatar(), 
        body: faker.lorem.paragraphs(),
        campers: [{ 
            name: faker.name.firstName(), 
            image: faker.image.avatar(), 
            votes: faker.random.boolean()
        }]
     };
     sampleData.push(sampleObject);
};

const insertSampleCamps = function() {
    Camp.create(sampleData)
      .then(() => database.disconnect()).catch((err) => console.log(err));
  };
  
insertSampleCamps();