import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { UserInfoModal } from '../UserInfoModal';
import { UserEditModal } from '../UserEditModal';
import PropTypes from 'prop-types';

import './UserListItem.css';

const UserListItem = class extends Component {
  state = {
    userInfoModal: false,
    userEditModal: false,
  };

  infoModalToggle = () => {
    this.setState(state => ({
      userInfoModal: !state.userInfoModal,
    }));
  };

  editModalToggle = () => {
    this.setState(state => ({
      userEditModal: !state.userEditModal,
    }));
  };

  render() {
    const { user, onDelete, onUpdata } = this.props;
    const { name } = user;
    const { infoModalToggle, editModalToggle } = this;
    const { userInfoModal, userEditModal } = this.state;

    return (
      <>
        <tr onClick={infoModalToggle} className="list-item">
          <td>{name}</td>
          <td className="text-right">
            <Button
              outline
              color="warning"
              className="mr-2"
              onClick={editModalToggle}
            >
              Edit
            </Button>
            <Button outline color="danger" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
          </td>
        </tr>
        <UserInfoModal
          modal={userInfoModal}
          modalToggle={infoModalToggle}
          {...user}
        />
        <UserEditModal
          modal={userEditModal}
          modalToggle={editModalToggle}
          onUpdata={onUpdata}
          {...user}
        />
      </>
    );
  }
};

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdata: PropTypes.func.isRequired,
};

export default UserListItem;
