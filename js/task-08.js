console.log(`Task 08`);

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => {
      user.friends.forEach(friend => friend === friendName);
    })
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
