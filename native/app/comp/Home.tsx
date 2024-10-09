import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground,Alert } from 'react-native';
import { TextInput, Button, Text, HelperText, Card } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function UserManagement({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        Alert.alert('Error', result.message || 'Failed to submit user details');
        return;
      }

      Alert.alert('Success', 'User registration successful!');

      // Reset the form fields to empty strings
      reset({
        name: '',
        email: '',
        phone: '',
        password: ''
      });

      // Navigate to the SuccessPage after form submission
      navigation.navigate('SuccessPage');
    } catch (error) {
      Alert.alert('Error', 'An error occurred while registering.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Registration</Text>

            <Controller
              control={control}
              name="name"
              rules={{ required: 'Name is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    label="Name"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    error={!!errors.name}
                  />
                  {errors.name && (
                    <HelperText type="error" visible={errors.name}>
                      {errors.name.message}
                    </HelperText>
                  )}
                </>
              )}
            />

            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email address',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    label="Email"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    keyboardType="email-address"
                    error={!!errors.email}
                  />
                  {errors.email && (
                    <HelperText type="error" visible={errors.email}>
                      {errors.email.message}
                    </HelperText>
                  )}
                </>
              )}
            />

            <Controller
              control={control}
              name="phone"
              rules={{
                required: 'Phone number is required',
                minLength: {
                  value: 10,
                  message: 'Phone number must be at least 10 digits',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    label="Phone Number"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    keyboardType="phone-pad"
                    error={!!errors.phone}
                  />
                  {errors.phone && (
                    <HelperText type="error" visible={errors.phone}>
                      {errors.phone.message}
                    </HelperText>
                  )}
                </>
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    label="Password"
                    mode="outlined"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    error={!!errors.password}
                  />
                  {errors.password && (
                    <HelperText type="error" visible={errors.password}>
                      {errors.password.message}
                    </HelperText>
                  )}
                </>
              )}
            />

            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00008B',
  },
});

