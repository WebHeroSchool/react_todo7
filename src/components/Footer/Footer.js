import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({count }) => (<p className = {styles.lest}>Еще осталось выполнить дел: {count}</p>);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
