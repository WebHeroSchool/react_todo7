import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count, onClickFooter }) => (<p className = {styles.lest} onClick={onClickFooter}>Еще осталось выполнить дел: {count}</p>);
export default Footer;
