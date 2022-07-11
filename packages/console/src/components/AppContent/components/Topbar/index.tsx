import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Spacer from '@/components/Spacer';
import Logo from '@/icons/Logo';
import GetStartedProgress from '@/pages/GetStarted/components/GetStartedProgress';

import UserInfo from '../UserInfo';
import * as styles from './index.module.scss';

type Props = {
  className?: string;
};

const Topbar = ({ className }: Props) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  return (
    <div className={classNames(styles.topbar, className)}>
      <Logo className={styles.logo} />
      <div className={styles.line} />
      <div className={styles.text}>{t('title')}</div>
      <Spacer />
      <GetStartedProgress />
      <UserInfo />
    </div>
  );
};

export default Topbar;
