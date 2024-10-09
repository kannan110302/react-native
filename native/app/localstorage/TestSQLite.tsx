// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import * as SQLite from 'expo-sqlite';

// const TestSQLite = () => {
//   useEffect(() => {
//     const db = SQLite.openDatabase('TestDatabase.db');
//     db.transaction(tx => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS Test (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);',
//         [],
//         () => console.log('Table created successfully'),
//         (tx, error) => console.log('Error creating table', error)
//       );
//     });
//   }, []);

//   return (
//     <View>
//       <Text>Testing SQLite</Text>
//     </View>
//   );
// };

// export default TestSQLite;
