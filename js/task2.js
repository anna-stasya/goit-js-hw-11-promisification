//todo____ Перепиши функцию toggleUserState() так, чтобы она не использовала 
//todo_____callback - функцию callback, а принимала всего два параметра allUsers и 
//todo_____userName и возвращала промис.



const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const logger = updatedUsers => console.table(updatedUsers);

//через промисы

const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
        resolve(allUsers.map(user =>
     user.name === userName ? { ...user, active: !user.active } : user,
   ));
    })
}

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);


//через callback 

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
