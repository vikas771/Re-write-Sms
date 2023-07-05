import React from 'react'

const table = () => {
  return (
    <div>
      <h2>Hello </h2>
      <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      {/* <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody> */}
      <tbody>
        <td>Dewas</td>
        <td>Indore</td>
        <td>Ujjain</td>
      </tbody>
    </table>
    </div>
  )
}

export default table
