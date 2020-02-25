import users from './users.js';

console.log(`Task 01`);

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head'
// , 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log(`Task 02`);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(`Task 03`);

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
// };

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log(`Task 04`);

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log(`Task 05`);

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}

console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}

console.log(`Task 06`);

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => min < user.age && user.age < max);
// };

const getUsersWithAge = (users, min, max) =>
  users.filter(user => min < user.age && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(`Task 07`);

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.log(`Task 08`);

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

console.log(`Task 09`);

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// };

const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log(`Task 10`);

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .reduce((acc, skill) => {
//       if (!acc.includes(skill)) {
//         acc.push(skill);
//       }
//       return acc.sort();
//     }, []);
// };

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((acc, skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc.sort();
    }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
//'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//'tempor', 'velit', 'veniam' ]
