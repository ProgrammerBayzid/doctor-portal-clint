import React from 'react'

const SingleUser = ({ user, index }) => {

    const { name, email } = user;
    console.log(user);
    return (

        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>  {name}</td>
                <td>{email}</td>
            </tr>

        </tbody>

    )
}

export default SingleUser
