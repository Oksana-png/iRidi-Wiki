import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from "./styles.module.scss";

// переделанный компонент
export default function NavbarLogo() {
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  return (
    <Link to="/" className={styles.navbarLogo}>
      <img src={'/' + logo.src} alt={logo.alt} />
    </Link>
  );
}
