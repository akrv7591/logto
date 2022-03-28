import { User } from '@logto/schemas';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import Button from '@/components/Button';
import Card from '@/components/Card';
import CardTitle from '@/components/CardTitle';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ItemPreview from '@/components/ItemPreview';
import TableEmpty from '@/components/Table/TableEmpty';
import TableError from '@/components/Table/TableError';
import TableLoading from '@/components/Table/TableLoading';
import { RequestError } from '@/hooks/use-api';
import * as modalStyles from '@/scss/modal.module.scss';

import CreateForm from './components/CreateForm';
import * as styles from './index.module.scss';

const Users = () => {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { data, error, mutate } = useSWR<User[], RequestError>('/api/users');
  const isLoading = !data && !error;
  const navigate = useNavigate();

  return (
    <Card>
      <div className={styles.headline}>
        <CardTitle title="users.title" subtitle="users.subtitle" />
        <Button
          title="admin_console.users.create"
          type="primary"
          onClick={() => {
            setIsCreateFormOpen(true);
          }}
        />
        <Modal
          isOpen={isCreateFormOpen}
          className={modalStyles.content}
          overlayClassName={modalStyles.overlay}
        >
          <CreateForm
            onClose={(createdUser, password) => {
              setIsCreateFormOpen(false);

              if (createdUser && password) {
                navigate(`/users/${createdUser.id}?password=${password}`);
              }
            }}
          />
        </Modal>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.userName} />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>{t('users.user_name')}</th>
            <th>{t('users.application_name')}</th>
            <th>{t('users.latest_sign_in')}</th>
          </tr>
        </thead>
        <tbody>
          {error && (
            <TableError
              content={error.body.message}
              onRetry={async () => mutate(undefined, true)}
            />
          )}
          {isLoading && <TableLoading columns={3} />}
          {data?.length === 0 && (
            <TableEmpty>
              <Button
                title="admin_console.users.create"
                type="outline"
                onClick={() => {
                  setIsCreateFormOpen(true);
                }}
              />
            </TableEmpty>
          )}
          {data?.map(({ id, name, username }) => (
            <tr
              key={id}
              className={styles.clickable}
              onClick={() => {
                navigate(`/users/${id}`);
              }}
            >
              <td>
                <ItemPreview
                  title={name ?? '-'}
                  subtitle={username ?? '-'}
                  icon={<ImagePlaceholder />}
                  to={`/users/${id}`}
                />
              </td>
              <td>Application</td>
              <td>Last sign in</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Users;
