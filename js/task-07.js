console.log(`Task 07`);

import users from './users.js';

const calculateTotalBalance = users => {
  return users
    .map(user => user.balance)
    .reduce((acum, value) => acum + value, 0);
};

console.log(calculateTotalBalance(users)); // 20916
