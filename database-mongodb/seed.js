const database  = require('./index.js');
const Camp = require('./Camp.js');
const faker = require('faker');

var sampleData = []
for (var i = 0; i< 100; i++) {
    var sampleObject = {
        host: faker.name.findName(),
        hostImage: faker.image.imageURL(), 
        body: faker.lorem.paragraph(),
        campers: [{ 
            name: faker.name.firstName(), 
            image: faker.image.imageURL(), 
            votes: faker.random.boolean()
        }]
     };
     sampleData.push(sampleObject);
};

const insertSampleCamps = function() {
    Camp.create(sampleData)
      .then(() => database.disconnect());
  };
  
insertSampleCamps();