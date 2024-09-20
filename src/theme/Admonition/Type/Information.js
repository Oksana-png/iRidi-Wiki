import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconInformation from '@theme/Admonition/Icon/Information';

const infimaClassName = 'alert alert--information';

const defaultProps = {
  icon: <IconInformation />,
  title: (
    <Translate
      id="theme.admonition.information"
      description="The default label used for the Information admonition (:::information)">
      information
    </Translate>
  ),
};

export default function AdmonitionTypeInformation(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
