import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify';
import SingleUser from './SingleUser'

const AllUsers = () => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://doctors-portal-server-ten-alpha.vercel.app/users')
      const data = await res.json();
      return data;
    }
  });

  const handelMakeAdmin = id => {
    fetch(`https://doctors-portal-server-ten-alpha.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('AccessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make Admin Successful.');
          refetch();
        }
      })
  }


  return (
    <div className='mt-10 w-full'>
      <h1 className='text-3xl font-semibold mb-5'>All Users</h1>
      <div className='overflow-x-auto'>
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handelMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td><button className='btn btn-xs btn-danger'>Edit</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
