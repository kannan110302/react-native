// // UserScreen.tsx
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, FlatList, Alert, StyleSheet } from 'react-native';
// import { initializeDatabase, addUser, getUsers, updateUser, deleteUser } from './database';

// const UserScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [users, setUsers] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   useEffect(() => {
//     // Initialize database and load users when the component mounts
//     initializeDatabase(() => {
//       loadUsers();
//     });
//   }, []);

//   const loadUsers = () => {
//     getUsers((data) => {
//       setUsers(data);
//     });
//   };

//   const handleAddUser = () => {
//     if (name && email) {
//       addUser(name, email, (success) => {
//         if (success) {
//           Alert.alert('Success', 'User added successfully');
//           setName('');
//           setEmail('');
//           loadUsers(); // Refresh the list
//         } else {
//           Alert.alert('Error', 'Failed to add user');
//         }
//       });
//     } else {
//       Alert.alert('Validation Error', 'Please fill in both fields');
//     }
//   };

//   const handleUpdateUser = () => {
//     if (selectedUserId && name && email) {
//       updateUser(selectedUserId, name, email, (success) => {
//         if (success) {
//           Alert.alert('Success', 'User updated successfully');
//           setSelectedUserId(null);
//           setName('');
//           setEmail('');
//           loadUsers(); // Refresh the list
//         } else {
//           Alert.alert('Error', 'Failed to update user');
//         }
//       });
//     } else {
//       Alert.alert('Validation Error', 'Select a user and fill in both fields');
//     }
//   };

//   const handleDeleteUser = (id) => {
//     deleteUser(id, (success) => {
//       if (success) {
//         Alert.alert('Success', 'User deleted successfully');
//         loadUsers(); // Refresh the list
//       } else {
//         Alert.alert('Error', 'Failed to delete user');
//       }
//     });
//   };

//   const handleSelectUser = (user) => {
//     setSelectedUserId(user.id);
//     setName(user.name);
//     setEmail(user.email);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.userItem}>
//       <Text style={styles.userText}>
//         {item.name} - {item.email}
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Edit" onPress={() => handleSelectUser(item)} color="green" />
//         <Button title="Delete" onPress={() => handleDeleteUser(item.id)} color="red" />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Management</Text>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//       />
//       <Button
//         title={selectedUserId ? 'Update User' : 'Add User'}
//         onPress={selectedUserId ? handleUpdateUser : handleAddUser}
//         color={selectedUserId ? 'green' : 'blue'}
//       />

//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         style={styles.userList}
//       />
//     </View>
//   );
// };

// export default UserScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//   },
//   userList: {
//     marginTop: 20,
//   },
//   userItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   userText: {
//     fontSize: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 5,
//     justifyContent: 'space-between',
//     width: 100,
//   },
// });
