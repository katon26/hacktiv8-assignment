// import React, { useEffect, useState } from 'react';

// export default function Users() {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((data) => setUsers(data))
//     })

//     return(
//         <table class="table table-striped">
//             <thead>
//                 <tr class="table-dark">
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Username</th>
//                     <th scope="col">Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user, index) => (
//                 <tr key={user.id}>
//                     <th scope="row">{index + 1}</th>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                 </tr>        
//                 ))}
//             </tbody>
//         </table>
//     )
// }

