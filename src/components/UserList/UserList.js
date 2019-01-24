import React from 'react';
import { Table } from 'reactstrap';
import { UserListItem } from '../UserListItem';
import PropTypes from 'prop-types';

import './UserList.css';

const UserList = props => {
  const { users, onDelete, onUpdata } = props;

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name Lastname</th>
          <th className="text-right mr-3">Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserListItem
            key={user.id}
            user={user}
            onDelete={onDelete}
            onUpdata={onUpdata}
          />
        ))}
      </tbody>
    </Table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdata: PropTypes.func.isRequired,
};

export default UserList;
