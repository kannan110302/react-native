// // database.tsx
// import * as SQLite from 'expo-sqlite';

// // Open the database (if not exists, it will be created)
// const db = SQLite.openDatabase('UserDatabase.db');

// // Create a function to initialize the table
// export const initializeDatabase = (callback) => {
//   db.transaction(
//     (tx) => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);'
//       );
//     },
//     (error) => {
//       console.log('Error creating table', error);
//     },
//     () => {
//       console.log('Table created or already exists');
//       if (callback) callback();
//     }
//   );
// };

// // Function to add a new user
// export const addUser = (name, email, callback) => {
//   db.transaction(
//     (tx) => {
//       tx.executeSql(
//         'INSERT INTO Users (name, email) VALUES (?, ?);',
//         [name, email],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             console.log('User added successfully');
//           } else {
//             console.log('Failed to add user');
//           }
//         }
//       );
//     },
//     (error) => {
//       console.log('Error adding user', error);
//       if (callback) callback(false);
//     },
//     () => {
//       if (callback) callback(true);
//     }
//   );
// };

// // Function to fetch all users
// export const getUsers = (callback) => {
//   db.transaction((tx) => {
//     tx.executeSql('SELECT * FROM Users;', [], (tx, results) => {
//       const users = [];
//       for (let i = 0; i < results.rows.length; i++) {
//         users.push(results.rows.item(i));
//       }
//       callback(users);
//     });
//   });
// };

// // Function to update a user
// export const updateUser = (id, name, email, callback) => {
//   db.transaction(
//     (tx) => {
//       tx.executeSql(
//         'UPDATE Users SET name = ?, email = ? WHERE id = ?;',
//         [name, email, id],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             console.log('User updated successfully');
//           } else {
//             console.log('Failed to update user');
//           }
//         }
//       );
//     },
//     (error) => {
//       console.log('Error updating user', error);
//       if (callback) callback(false);
//     },
//     () => {
//       if (callback) callback(true);
//     }
//   );
// };

// // Function to delete a user
// export const deleteUser = (id, callback) => {
//   db.transaction(
//     (tx) => {
//       tx.executeSql(
//         'DELETE FROM Users WHERE id = ?;',
//         [id],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             console.log('User deleted successfully');
//           } else {
//             console.log('Failed to delete user');
//           }
//         }
//       );
//     },
//     (error) => {
//       console.log('Error deleting user', error);
//       if (callback) callback(false);
//     },
//     () => {
//       if (callback) callback(true);
//     }
//   );
// };
