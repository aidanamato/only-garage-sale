const db = require('./connection');
const faker = require('faker');

const { User, Event } = require('../models');

db.once('open', async () => {
  await Event.deleteMany();
  await User.deleteMany();

  // seed users
  const userData = [];

  for (let i = 0; i < 200; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password();
    const zipCode = faker.address.zipCode();

    userData.push({ firstName, lastName, email, password, zipCode });
  }

  await User.collection.insertMany(userData);
  const users = await User.find();

  // seed events
  const tagsArr = [
    'Furniture', 'Electronics', 'Kitchen', 'Appliances', 'Arts and Crafts', 'Clothing', 'Garden and Outdoors', 'Pet', 'Tools', 'Jewelry', 'Toys'
  ];
  for (let i = 0; i < 100; i++) {
    const title = faker.lorem.words();

    const { firstName, lastName } = users[Math.floor(Math.random() * users.length)];

    const location = faker.address.streetAddress();
    let startTime;
    let endTime;
    const images = [];
    const tags = [];
    
    const date1 = faker.datatype.datetime();
    const date2 = faker.datatype.datetime();

    if (date2 > date1) {
      startTime = date1
      endTime = date2;
    } else {
      startTime = date2;
      endTime = date1;
    }

    console.log(startTime, endTime);

    for (let i = 0; i < (Math.floor(Math.random() * 3) + 1); i++) {
      images.push({
        url: faker.image.imageUrl()
      });
    }

    for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
      const tag = tagsArr[Math.floor(Math.random() * tagsArr.length)];
      
      if (!tags.find(tagMatch => tag === tagMatch )) {
        tags.push({
          name: tag
        });
      }
    }

    const event = await Event.create(
      { title, firstName, lastName, location, startTime, endTime }
    );
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: event._id },
      { $push: { 
          images: { $each: images },
          tags: { $each: tags }
        } 
      }
    );
  }

  console.log('Done seeding!');
  process.exit(0);
});