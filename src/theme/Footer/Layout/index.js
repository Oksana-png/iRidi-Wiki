import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {

  return (
    <footer className={styles.footer}>
      <div className="container container-fluid">
        <div className={styles.footer__menu}>
          {links}
          <div className={styles.footer__contacts}>
            <Link className={styles.footer__logo} to="/">
              <img src={logo.props.logo.src} alt={logo.props.logo.alt} />
            </Link>
            <Link to="malto:contact@iridi.com">contact@iridi.com</Link>
            <Link to="tel:+74993227329">+7 (499) 322-73-29</Link>
          </div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
