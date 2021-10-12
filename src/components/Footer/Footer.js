import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (<p className = {styles.lest}>Осталось выполнить вот столько дел: {count}</p>);
export default Footer;
