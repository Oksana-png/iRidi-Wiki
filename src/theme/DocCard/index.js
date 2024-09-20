import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count },
      ),
    );
}
function CardContainer({ href, children, styless }) {
  return (
    <Link
      href={href}
      className={clsx('card', styles.cardContainer, styles.cardLink, styless)}>
      {children}
    </Link>
  );
}

// добавлена иконка и другая структура
function CardLayout({ href, icon, title, description, styless }) {
  return (
    <CardContainer href={href} styless={styless}>
      <div className={styles.cardIcon}>
        <img src={icon} />
      </div>
      <div className={styles.cardWrapper}>
        <Heading
          as="h2"
          className={clsx('text--truncate', styles.cardTitle)}
          title={title}>
          {title}
        </Heading>
        {description && (
          <p
            className={styles.cardDescription}
            title={description}>
            {description}
          </p>
        )}
        <img src="img/icons/arrow.svg" alt="arrow" className={styles.cardArrow} />
      </div>
    </CardContainer>
  );
}
// карточки категорий
function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  let iconSrc;
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  try {
    iconSrc = item.customProps.icon;
  } catch (err) {
    // иконка заглушка
    iconSrc = 'img/icons/template.svg';
  }
  return (
    <CardLayout
      href={href}
      icon={iconSrc}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}
// карточки самих статей
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  let iconSrc;
  try {
    iconSrc = item.customProps.icon;
  } catch (err) {
    // иконка заглушка
    iconSrc = 'img/icons/template.svg';
  }
  return (
    <CardLayout
      href={item.href}
      icon={iconSrc}
      title={item.label}
      description={item.description ?? doc?.description}
      styless={styles.cardCard}
    />
  );
}
export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
