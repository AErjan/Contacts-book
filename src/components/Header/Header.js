import React from 'react';
import { Form, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => {
  const { search, onChange } = props;
  return (
    <div className="header-wrapper">
      <h1 className="header-title">Contacts Book</h1>
      <Form>
        <Input
          type="email"
          name="search"
          id="exampleEmail"
          placeholder="Search..."
          value={search}
          onChange={onChange}
        />
      </Form>
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
