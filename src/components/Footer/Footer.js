import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (<p className = {styles.lest}>Еще осталось выполнить дел: {count}</p>);
export default Footer;
