import React from 'react'
import { type UserListProps } from '../../types/livechat.interfaces'

const UserList: React.FC<UserListProps> = ({ users, handleUserListClick }) => {
  return (
    <ul>
      {users !== null && users.docs.length > 0
        ? (
            users.docs.map((u) => (
          <li key={u._id} style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src={`/${u.image}`}
              style={{
                width: '50px',
                height: '50px',
                marginBottom: '10px'
              }}
            />
            <a
              href="#"
              className="userList"
              data-id={u._id}
              onClick={() => {
                handleUserListClick(u._id)
              }}
            >
              {u.fullName}
              <span style={{ color: 'gray', fontSize: '12px' }}>
                {' '}
                ({u.email}){' '}
              </span>
            </a>

            <span style={{ color: 'green' }}>
              {u.is_online === '1' ? 'En línea' : 'Desconectado'}
            </span>
          </li>
            ))
          )
        : (
        <p>Not users available</p>
          )}
    </ul>
  )
}

export default UserList
