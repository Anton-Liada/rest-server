const express = require('express');
const { faker } = require('@faker-js/faker');
const _ = require('lodash');

// USERS-------------------------------

const Users = [];

function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    gender: faker.name.sex(),
    followers: [],
  };
}

Array.from({ length: 10 }).forEach(() => {
  Users.push(createRandomUser());
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomUser(arr) {
  const findRandomUser = arr[Math.floor(Math.random() * arr.length)];

  return findRandomUser;
}

function getRandomConnections(arr, num) {
  const userById = _.map(arr, 'userId');
  const shuffledUsersById = [...userById].sort(() => 0.5 - Math.random());
  const randomConnections = [...new Set(shuffledUsersById.slice(0, num))];

  return randomConnections;
}

function fillRandomFollowers(arr) {
  let count = arr.length;

  while (count >= 0) {
    count -= 1;
    const randomUser = getRandomUser(arr);

    if (!randomUser.followers.length) {
      randomUser.followers.push(
        ...getRandomConnections(arr, getRandomNumber(0, 150)),
      );
    }
  }
}

fillRandomFollowers(Users);

// console.log(Users.map(item => item))
// console.log(Users.map(item => item.followers.length))
// console.log('-------------', Users[2])

// USERS-------------------------------
const test = [
  {
    userId: 'cb154e5d-3e96-495c-97ec-34651e937aab',
    username: 'Katlyn.Zieme36',
    gender: 'male',
    followers: [],
  },
  {
    userId: '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
    username: 'Monique_Gleichner78',
    gender: 'male',
    followers: [],
  },
  {
    userId: 'e6164b3b-8595-4995-8578-6070778bcf65',
    username: 'Dejuan.Cole',
    gender: 'female',
    followers: [
      'bee6412e-0826-402c-ace2-df7783418c9f',
      '398ebc80-acda-4af4-bd67-ee2db219a0f6',
      'cb154e5d-3e96-495c-97ec-34651e937aab',
      'd95c727b-b5ea-4fc1-8819-630469527fad',
      '14b8b8eb-0719-4836-bedf-956dec881304',
      'b3f4ba9c-08ad-4585-bacf-992bab374d69',
      '3a48e796-2510-45c0-bdd1-e13bc1ae6ef3',
      '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
      '3b13b671-31be-4c9c-acec-8c2c89c3acde',
      'e6164b3b-8595-4995-8578-6070778bcf65',
    ],
  },
  {
    userId: 'b3f4ba9c-08ad-4585-bacf-992bab374d69',
    username: 'Burnice75',
    gender: 'female',
    followers: [
      '14b8b8eb-0719-4836-bedf-956dec881304', ////////
      'd95c727b-b5ea-4fc1-8819-630469527fad',
      '398ebc80-acda-4af4-bd67-ee2db219a0f6',
      '3a48e796-2510-45c0-bdd1-e13bc1ae6ef3',
      'b3f4ba9c-08ad-4585-bacf-992bab374d69',
      'e6164b3b-8595-4995-8578-6070778bcf65',
      '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
      'cb154e5d-3e96-495c-97ec-34651e937aab',
      'bee6412e-0826-402c-ace2-df7783418c9f',
      '3b13b671-31be-4c9c-acec-8c2c89c3acde',
    ],
  },
  {
    userId: '398ebc80-acda-4af4-bd67-ee2db219a0f6',
    username: 'Seamus52',
    gender: 'male',
    followers: [],
  },
  {
    userId: 'd95c727b-b5ea-4fc1-8819-630469527fad', ////////  2
    username: 'Vernon7',
    gender: 'male',
    followers: [
      '398ebc80-acda-4af4-bd67-ee2db219a0f6',
      '3a48e796-2510-45c0-bdd1-e13bc1ae6ef3',
      '3b13b671-31be-4c9c-acec-8c2c89c3acde',
      '14b8b8eb-0719-4836-bedf-956dec881304',
      'bee6412e-0826-402c-ace2-df7783418c9f',
      'e6164b3b-8595-4995-8578-6070778bcf65',
      'b3f4ba9c-08ad-4585-bacf-992bab374d69',
      '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
      'cb154e5d-3e96-495c-97ec-34651e937aab',
    ],
  },
  {
    userId: '14b8b8eb-0719-4836-bedf-956dec881304', //////
    username: 'Sandra.Beer',
    gender: 'female',
    followers: [
      'd95c727b-b5ea-4fc1-8819-630469527fad', ///
      'cb154e5d-3e96-495c-97ec-34651e937aab',
      '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
      '398ebc80-acda-4af4-bd67-ee2db219a0f6',
      'bee6412e-0826-402c-ace2-df7783418c9f',
      'e6164b3b-8595-4995-8578-6070778bcf65',
      'b3f4ba9c-08ad-4585-bacf-992bab374d69',
      '14b8b8eb-0719-4836-bedf-956dec881304',
      '3b13b671-31be-4c9c-acec-8c2c89c3acde',
      '3a48e796-2510-45c0-bdd1-e13bc1ae6ef3',
    ],
  },
  {
    userId: 'bee6412e-0826-402c-ace2-df7783418c9f',
    username: 'Lue_Bernier3',
    gender: 'male',
    followers: [
      'd95c727b-b5ea-4fc1-8819-630469527fad', ////
      'b3f4ba9c-08ad-4585-bacf-992bab374d69',
      '14b8b8eb-0719-4836-bedf-956dec881304',
      'e6164b3b-8595-4995-8578-6070778bcf65',
      '0f81bef8-4ea1-4b86-845e-ff28fce7882e',
    ],
  },
  {
    userId: '3b13b671-31be-4c9c-acec-8c2c89c3acde',
    username: 'Aaliyah75',
    gender: 'male',
    followers: [],
  },
  {
    userId: '3a48e796-2510-45c0-bdd1-e13bc1ae6ef3',
    username: 'Wilhelmine53',
    gender: 'female',
    followers: [],
  },
];

console.log(test.map(user => user.followers.find(friend => friend)))

// console.log(test.map(user => test.filter(friend => user.name === friend.friend)))

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send(Users);
});

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
