// import React, { useState } from 'react';
// import { TextInput, Button, Alert, StyleSheet, View } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { updateUser } from '../services/api';

// export default function EditUser({ route, navigation }) {
//   const { user } = route.params; // Assuming user data is passed as route params
//   const [loading, setLoading] = useState(false);
//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       password: user.password,
//     },
//   });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       await updateUser(data);
//       Alert.alert('Success', 'User updated successfully!');
//       reset();
//       navigation.goBack(); // Navigate back after successful update
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Controller
//         control={control}
//         name="name"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Name"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="email"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Email"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="phone"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Phone"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="password"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Password"
//             secureTextEntry
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Button onPress={handleSubmit(onSubmit)} loading={loading} style={styles.button}>
//         Update User
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   input: {
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 20,
//   },
// });


// import React, { useState } from 'react';
// import { TextInput, Button, Alert, StyleSheet, View } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { updateUser } from '../services/api';

// export default function EditUser({ route, navigation }) {
//   const { user } = route.params || {}; // Use fallback to avoid undefined error
//   const [loading, setLoading] = useState(false);

//   // Ensure user is defined
//   if (!user) {
//     return <View><Text>No user data available</Text></View>;
//   }

//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       password: user.password,
//     },
//   });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       await updateUser(data);
//       Alert.alert('Success', 'User updated successfully!');
//       reset();
//       navigation.goBack(); // Navigate back after successful update
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Controller
//         control={control}
//         name="name"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Name"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="email"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Email"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="phone"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Phone"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="password"
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             label="Password"
//             secureTextEntry
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             style={styles.input}
//           />
//         )}
//       />
//       <Button onPress={handleSubmit(onSubmit)} title="Update User" disabled={loading} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   input: {
//     marginBottom: 20,
//   },
// });
