import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import styles from './styles.modules.scss';

function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
// отдельная колонка
function Column({ column }) {
  let titl;
  if (column.title) {
    titl = <div className={'footer__title ' + styles.footer__title}>{column.title}</div>
  }
  return (
    <div className={'footer__col ' + styles.footer__col}>
      {titl}
      <ul className={'footer__items clean-list ' + styles.footer__items}>
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className={'row footer__links ' + styles.footer__links}>
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
