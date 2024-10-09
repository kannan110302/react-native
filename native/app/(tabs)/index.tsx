// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome kannann!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });



// import React, { useState } from 'react';
// import { View, StyleSheet, Alert } from 'react-native';
// import { TextInput, Button, Text, HelperText, Card } from 'react-native-paper';
// import { useForm, Controller } from 'react-hook-form';

// export default function UserForm() {
//   const [loading, setLoading] = useState(false);
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:6000/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (response.ok) {
//         Alert.alert('Success', 'User details submitted successfully');
//         reset(); // Reset form fields
//       } else {
//         Alert.alert('Error', 'Failed to submit user details');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to submit user details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.title}>User Registration</Text>

//           {/* Name Input */}
//           <Controller
//             control={control}
//             name="name"
//             rules={{ required: 'Name is required' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Name"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   error={!!errors.name}
//                 />
//                 {errors.name && (
//                   <HelperText type="error" visible={errors.name}>
//                     {errors.name.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           {/* Email Input */}
//           <Controller
//             control={control}
//             name="email"
//             rules={{
//               required: 'Email is required',
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Enter a valid email address',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Email"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   keyboardType="email-address"
//                   error={!!errors.email}
//                 />
//                 {errors.email && (
//                   <HelperText type="error" visible={errors.email}>
//                     {errors.email.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           {/* Phone Number Input */}
//           <Controller
//             control={control}
//             name="phone"
//             rules={{
//               required: 'Phone number is required',
//               minLength: {
//                 value: 10,
//                 message: 'Phone number must be at least 10 digits',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Phone Number"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   keyboardType="phone-pad"
//                   error={!!errors.phone}
//                 />
//                 {errors.phone && (
//                   <HelperText type="error" visible={errors.phone}>
//                     {errors.phone.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           {/* Password Input */}
//           <Controller
//             control={control}
//             name="password"
//             rules={{
//               required: 'Password is required',
//               minLength: {
//                 value: 6,
//                 message: 'Password must be at least 6 characters long',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Password"
//                   mode="outlined"
//                   secureTextEntry
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   error={!!errors.password}
//                 />
//                 {errors.password && (
//                   <HelperText type="error" visible={errors.password}>
//                     {errors.password.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           {/* Submit Button */}
//           <Button
//             mode="contained"
//             onPress={handleSubmit(onSubmit)}
//             style={styles.button}
//             loading={loading}
//             disabled={loading}
//           >
//             Submit
//           </Button>
//         </Card.Content>
//       </Card>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   card: {
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#6200ee',
//   },
// });


// import React, { useState } from 'react';
// import { View, StyleSheet,ImageBackground, Alert } from 'react-native';
// import { TextInput, Button, Text, HelperText, Card } from 'react-native-paper';
// import { useForm, Controller } from 'react-hook-form';

// export default function UserForm() {
//   const [loading, setLoading] = useState(false);
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // Helper functions for email and phone validation
//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email)
// ;
//   };

//   const validatePhone = (phone: string) => {
//     const re = /^\d{10}$/;
//     return re.test(phone);
//   };

//   const onSubmit = async (data: { name: any; email: any; phone: any; password: any; }) => {
//     const { name, email, phone, password } = data;
  
//     // Perform additional validation like in the second form
//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Invalid email format.');
//       return;
//     }
  
//     if (!validatePhone(phone)) {
//       Alert.alert('Error', 'Phone number must be 10 digits.');
//       return;
//     }
  
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, password }),
//       });
  
//       const result = await response.json();
  
//       if (!response.ok) {
//         Alert.alert('Error', result.message || 'Failed to submit user details');
//         return;
//       }
  
//       Alert.alert('Success', 'User registration successful!');
//       reset({
//         name: '',
//         email: '',
//         phone: '',
//         password: ''
//       }); // Reset form fields to empty strings
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while registering.');
//     } finally {
//       setLoading(false);
//     }
//   };

// return (
//   <ImageBackground
//     source={{ uri: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' }} // Replace with any random image URL
//     style={styles.background}
//   >
//     <View style={styles.container}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.title}>Registration</Text>

//           <Controller
//             control={control}
//             name="name"
//             rules={{ required: 'Name is required' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Name"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   error={!!errors.name}
//                 />
//                 {errors.name && (
//                   <HelperText type="error" visible={errors.name}>
//                     {errors.name.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           <Controller
//             control={control}
//             name="email"
//             rules={{
//               required: 'Email is required',
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Enter a valid email address',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Email"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   keyboardType="email-address"
//                   error={!!errors.email}
//                 />
//                 {errors.email && (
//                   <HelperText type="error" visible={errors.email}>
//                     {errors.email.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           <Controller
//             control={control}
//             name="phone"
//             rules={{
//               required: 'Phone number is required',
//               minLength: {
//                 value: 10,
//                 message: 'Phone number must be at least 10 digits',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Phone Number"
//                   mode="outlined"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   keyboardType="phone-pad"
//                   error={!!errors.phone}
//                 />
//                 {errors.phone && (
//                   <HelperText type="error" visible={errors.phone}>
//                     {errors.phone.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           <Controller
//             control={control}
//             name="password"
//             rules={{
//               required: 'Password is required',
//               minLength: {
//                 value: 6,
//                 message: 'Password must be at least 6 characters long',
//               },
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <TextInput
//                   label="Password"
//                   mode="outlined"
//                   secureTextEntry
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   style={styles.input}
//                   error={!!errors.password}
//                 />
//                 {errors.password && (
//                   <HelperText type="error" visible={errors.password}>
//                     {errors.password.message}
//                   </HelperText>
//                 )}
//               </>
//             )}
//           />

//           <Button
//             mode="contained"
//             onPress={handleSubmit(onSubmit)}
//             style={styles.button}
//           >
//             Submit
//           </Button>
//         </Card.Content>
//       </Card>
//     </View>
//   </ImageBackground>
// );
// }

// const styles = StyleSheet.create({
// background: {
//   flex: 1,
//   resizeMode: 'cover',
//   justifyContent: 'center',
// },
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   padding: 20,
// },
// card: {
//   padding: 20,
//   borderRadius: 10,
//   elevation: 5,
//   backgroundColor: '#fff',
// },
// title: {
//   fontSize: 24,
//   fontWeight: 'bold',
//   marginBottom: 20,
//   textAlign: 'center',
// },
// input: {
//   marginBottom: 15,
// },
// button: {
//   marginTop: 20,
//   backgroundColor: '#00008B',
// },
// });


// import React, { useState } from 'react';
// import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
// import { TextInput, Button, Text, HelperText, Card } from 'react-native-paper';
// import { useForm, Controller } from 'react-hook-form';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import UserForm from '../pages/UserForm'; // Corrected import statement
// import UserDetails from '../pages/UserDetails';
// import EditUser from '../pages/EditUser';

// // Rename the locally declared UserForm to avoid duplication
// function UserRegistrationForm() {
//   const [loading, setLoading] = useState(false);
//   const { control, handleSubmit, reset, formState: { errors } } = useForm();

//   // Helper functions for email and phone validation
//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const validatePhone = (phone: string) => {
//     const re = /^\d{10}$/;
//     return re.test(phone);
//   };

//   const onSubmit = async (data: { name: any; email: any; phone: any; password: any }) => {
//     const { name, email, phone, password } = data;

//     // Perform additional validation
//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Invalid email format.');
//       return;
//     }

//     if (!validatePhone(phone)) {
//       Alert.alert('Error', 'Phone number must be 10 digits.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, password }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         Alert.alert('Error', result.message || 'Failed to submit user details');
//         return;
//       }

//       Alert.alert('Success', 'User registration successful!');
//       reset({
//         name: '',
//         email: '',
//         phone: '',
//         password: ''
//       });
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while registering.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.title}>Registration</Text>

//             <Controller
//               control={control}
//               name="name"
//               rules={{ required: 'Name is required' }}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <>
//                   <TextInput
//                     label="Name"
//                     mode="outlined"
//                     onBlur={onBlur}
//                     onChangeText={onChange}
//                     value={value}
//                     style={styles.input}
//                     error={!!errors.name}
//                   />
//                   {errors.name && (
//                     <HelperText type="error" visible={errors.name}>
//                       {errors.name.message}
//                     </HelperText>
//                   )}
//                 </>
//               )}
//             />

//             <Controller
//               control={control}
//               name="email"
//               rules={{
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: 'Enter a valid email address',
//                 },
//               }}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <>
//                   <TextInput
//                     label="Email"
//                     mode="outlined"
//                     onBlur={onBlur}
//                     onChangeText={onChange}
//                     value={value}
//                     style={styles.input}
//                     keyboardType="email-address"
//                     error={!!errors.email}
//                   />
//                   {errors.email && (
//                     <HelperText type="error" visible={errors.email}>
//                       {errors.email.message}
//                     </HelperText>
//                   )}
//                 </>
//               )}
//             />

//             <Controller
//               control={control}
//               name="phone"
//               rules={{
//                 required: 'Phone number is required',
//                 minLength: {
//                   value: 10,
//                   message: 'Phone number must be at least 10 digits',
//                 },
//               }}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <>
//                   <TextInput
//                     label="Phone Number"
//                     mode="outlined"
//                     onBlur={onBlur}
//                     onChangeText={onChange}
//                     value={value}
//                     style={styles.input}
//                     keyboardType="phone-pad"
//                     error={!!errors.phone}
//                   />
//                   {errors.phone && (
//                     <HelperText type="error" visible={errors.phone}>
//                       {errors.phone.message}
//                     </HelperText>
//                   )}
//                 </>
//               )}
//             />

//             <Controller
//               control={control}
//               name="password"
//               rules={{
//                 required: 'Password is required',
//                 minLength: {
//                   value: 6,
//                   message: 'Password must be at least 6 characters long',
//                 },
//               }}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <>
//                   <TextInput
//                     label="Password"
//                     mode="outlined"
//                     secureTextEntry
//                     onBlur={onBlur}
//                     onChangeText={onChange}
//                     value={value}
//                     style={styles.input}
//                     error={!!errors.password}
//                   />
//                   {errors.password && (
//                     <HelperText type="error" visible={errors.password}>
//                       {errors.password.message}
//                     </HelperText>
//                   )}
//                 </>
//               )}
//             />

//             <Button
//               mode="contained"
//               onPress={handleSubmit(onSubmit)}
//               style={styles.button}
//               loading={loading}
//               disabled={loading}
//             >
//               Submit
//             </Button>
//           </Card.Content>
//         </Card>
//       </View>
//     </ImageBackground>
//   );
// }

// // Stack Navigator setup
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="UserForm">
//         {/* Use the renamed component here */}
//         <Stack.Screen name="UserForm" component={UserRegistrationForm} options={{ title: 'Register' }} />
//         <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} />
//         <Stack.Screen name="EditUser" component={EditUser} options={{ title: 'Edit User' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // StyleSheet
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   card: {
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#00008B',
//   },
// });




// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import UserForm from './pages/UserForm'; // Ensure correct import path
// import UserDetails from './pages/UserDetails';
// import EditUser from './pages/EditUser';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="UserForm">
//         <Stack.Screen name="UserForm" component={UserForm} options={{ title: 'Register' }} />
//         <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} />
//         <Stack.Screen name="EditUser" component={EditUser} options={{ title: 'Edit User' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
