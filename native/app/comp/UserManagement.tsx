import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ phone: '', password: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/allusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const startEditing = (user) => {
    setEditingUserId(user._id);
    setEditedUser({ phone: user.phone, password: '' });
  };

  const updateUser = async () => {
    if (!editedUser.phone) return;
    try {
      const updateData = { phone: editedUser.phone };
      if (editedUser.password) {
        updateData.password = editedUser.password;
      }
      const response = await axios.put(`http://localhost:5000/api/users/${editingUserId}`, updateData);
      if (response.data && response.data._id) {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === editingUserId ? response.data : user))
        );
        setEditingUserId(null);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const cancelEdit = () => {
    setEditingUserId(null);
  };

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Management</Text>

      {/* Search Box */}
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search by name"
        style={styles.input}
      />

      {/* Table Headers */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.headerText}>Phone</Text>
        <Text style={styles.headerText}>Password</Text>
        <Text style={styles.headerText}>Actions</Text>
      </View>

      {/* User Data List */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => (item._id ? item._id.toString() : item.email)}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cellText}>{item.name}</Text>
            <Text style={styles.cellText}>{item.email}</Text>

            {/* Editable fields for phone */}
            {editingUserId === item._id ? (
              <>
                <TextInput
                  value={editedUser.phone}
                  onChangeText={(text) => setEditedUser({ ...editedUser, phone: text })}
                  style={styles.inputEditable}
                  keyboardType="numeric"
                />
                <TextInput
                  value={editedUser.password}
                  onChangeText={(text) => setEditedUser({ ...editedUser, password: text })}
                  style={styles.inputEditable}
                  secureTextEntry
                  placeholder="New password"
                />
              </>
            ) : (
              <>
                <Text style={styles.cellText}>{item.phone}</Text>
                <Text style={styles.cellText}>******</Text>
              </>
            )}

            <View style={styles.actions}>
              {editingUserId === item._id ? (
                <>
                  <TouchableOpacity onPress={updateUser} style={styles.actionButton}>
                    <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={cancelEdit} style={styles.actionButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity onPress={() => startEditing(item)} style={styles.actionButton}>
                    <Icon name="edit" size={20} color="blue" />
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteUser(item._id)} style={styles.actionButton}>
                    <Icon name="trash" size={20} color="red" />
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        )}
        style={{ marginTop: 20, flexGrow: 0 }}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 14, // Smaller font size for headers
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
  },
  cellText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14, // Smaller font size for cells
    marginVertical: 5, // Margin to prevent overlap
  },
  inputEditable: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap', // Allow actions to wrap
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  editText: {
    color: 'blue',
    marginLeft: 5,
  },
  saveText: {
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cancelText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  deleteText: {
    color: 'red',
    marginLeft: 5,
  },
});

export default App;
