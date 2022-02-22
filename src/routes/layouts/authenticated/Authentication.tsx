import { FC, useEffect } from 'react';
import Userfront from '@userfront/core';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../routes';

enum Confirmation {
  NOT_REQUIRED = 'not_required',
}

const Authentication: FC = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const confirmation = () => {
    switch (process.env.REACT_APP_UF_CONFIRMATION) {
      case Confirmation.NOT_REQUIRED:
        return false;
      default:
        return true;
    }
  };
  useEffect(() => {
    if (!Userfront.user.userId) navigate(Routes.LOGIN);
  });
  const isProduction = process.env.NODE_ENV === 'production';
  return (
    <div>
      {isProduction && confirmation() && !Userfront.user.isConfirmed && (
        <div
          className="flex px-4 py-3 bg-yellow-100 justify-center rounded-lg text-center"
          role="alert"
        >
          <p className="mr-2">
            {`${t('ui.components.alerts.ACCOUNT_NOT_VERIFIED').split('.')[0]}.`}
          </p>
          <Link to={Routes.VALIDATE_ACCOUNT}>
            <p className="underline">
              {t('ui.components.alerts.ACCOUNT_NOT_VERIFIED').split('.')[1]}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Authentication;
