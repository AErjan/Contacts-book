import React, { Component } from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  Modal,
  ModalBody,
} from 'reactstrap';
import PropTypes from 'prop-types';

import './UserEditModal';

const UserEditModal = class extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    phone: '',
    address: {
      country: '',
      city: '',
      streetA: '',
    },
  };

  componentDidMount() {
    const { name, username, email, avatar, phone, address } = this.props;
    const { country, city, streetA } = address;

    this.setState({
      name,
      username,
      email,
      avatar,
      phone,
      address: {
        country,
        city,
        streetA,
      },
    });
  }

  onChange = e => {
    const { name, value } = e.target;
    if (name === 'country' || name === 'city' || name === 'streetA') {
      const statusCopy = { ...this.state };
      statusCopy.address[name] = value;
      this.setState(statusCopy);
    } else {
      this.setState({ [name]: value });
    }
  };

  onSubmit = (e, id, data) => {
    e.preventDefault();
    this.props.onUpdata(id, data);
  };

  render() {
    const { modal, modalToggle, avatar, id } = this.props;
    const { name, username, email, phone, address } = this.state;
    const { country, city, streetA } = address;
    const { onChange, onSubmit } = this;
    const { ...data } = this.state;

    return (
      <Modal isOpen={modal} toggle={modalToggle}>
        <ModalBody>
          <div className="user-avatar">
            <img src={avatar} alt="User avatar" className="user-picture" />
          </div>
          <Form onSubmit={e => onSubmit(e, id, data)}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                value={name}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">UserName</Label>
              <Input
                type="text"
                name="username"
                id="exampleEmail"
                value={username}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={email}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Phone</Label>
              <Input
                type="tel"
                name="phone"
                id="exampleEmail"
                value={phone}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Country</Label>
              <Input
                type="text"
                name="country"
                id="exampleEmail"
                value={country}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">City</Label>
              <Input
                type="text"
                name="city"
                id="exampleEmail"
                value={city}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Street</Label>
              <Input
                type="text"
                name="streetA"
                id="exampleEmail"
                value={streetA}
                onChange={onChange}
              />
            </FormGroup>
            <Button
              size="lg"
              block
              color="success"
              type="submit"
              onSubmit={e => onSubmit(e, id, data)}
              onClick={modalToggle}
            >
              Save
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
};

UserEditModal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  address: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    streetA: PropTypes.string.isRequired,
  }).isRequired,
  modal: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default UserEditModal;
