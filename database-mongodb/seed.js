const faker = require('faker');
const data = require('./index.js');
const Camp = require('./Camp.js');

data.db.on('error', console.error.bind(console, 'connection error:'));
data.db.once('open', () => {
  console.log('connected i am connected');
});

const sampleData = [];
for (let i = 0; i < 100; i += 1) {
  const sampleObject = {
    newId: i,
    host: faker.name.findName(),
    hostImage: faker.image.avatar(),
    body: faker.lorem.paragraphs(),
    campers: [{
      name: faker.name.firstName(),
      image: faker.image.avatar(),
      votes: faker.random.boolean(),
    }],
  };
  sampleData.push(sampleObject);
}

const insertSampleCamps = () => {
  Camp.create(sampleData)
    .then(() => data.database.disconnect()).catch(err => (err));
};

insertSampleCamps();
