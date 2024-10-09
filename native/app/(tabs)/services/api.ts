// export const getAllUsers = async () => {
//     const response = await fetch('http://localhost:5000/api/allusers');
//     const data = await response.json();
//     return data;
//   };
  
//   export const updateUser = async (userData) => {
//     const response = await fetch(`http://localhost:5000/api/users/${userData.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
  
//     if (!response.ok) {
//       throw new Error('Failed to update user');
//     }
  
//     return await response.json();
//   };
  
//   export const deleteUser = async (id: string) => {
//     await fetch(`http://localhost:5000/api/users/${id}`, {
//       method: 'DELETE',
//     });
//   };
  