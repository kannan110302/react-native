// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, ScrollView, Alert } from 'react-native';
// import { Card, Button, Text } from 'react-native-paper';
// import { getAllUsers, deleteUser } from '../services/api';

// export default function UserDetails({ navigation }) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await getAllUsers();
//       setUsers(response);
//     } catch (error) {
//       Alert.alert('Error', 'Failed to fetch users');
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await deleteUser(id);
//       Alert.alert('Success', 'User deleted successfully');
//       fetchUsers(); // Refresh the list
//     } catch (error) {
//       Alert.alert('Error', 'Failed to delete user');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {users.map(user => (
//         <Card key={user._id} style={styles.card}>
//           <Card.Content>
//             <Text>Name: {user.name}</Text>
//             <Text>Email: {user.email}</Text>
//             <Text>Phone: {user.phone}</Text>
//             <Button onPress={() => navigation.navigate('EditUser', { user })}>Edit</Button>
//             <Button onPress={() => handleDelete(user._id)} mode="contained" style={styles.deleteButton}>
//               Delete
//             </Button>
//           </Card.Content>
//         </Card>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   card: {
//     marginBottom: 15,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//   },
// });
